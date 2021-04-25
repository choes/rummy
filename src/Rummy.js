import { PlayerView } from "boardgame.io/core";
import { drop, draw, discard, finish, declare } from "./moves/cardPlayMoves";
import { groupCards, sortCards } from "./moves/cardAreaMoves";
import {RedJokerCard, BlackJokerCard, Suits, Ranks }  from "./constants";
import { compareCards } from "./moves/helper-functions/cardComparison";

const Rummy = {
	name: "rummy",
	setup: setUp,
	phases: {
		tossCard: {
			moves: {},
			start: true
		},

		play: {
			moves: { groupCards, sortCards, drop, draw, discard, finish, declare },
			endIf: G => {
				for (let player in G.players) {
					if (player.isFinished) {
						return true;
					}
				}

				return false;
			},
			next: "declare",
		},

		declare: {
			moves: { groupCards, sortCards, declare },
			endIf: G => {
				for (let player in G.players) {
					if (!player.isDeclared) {
						return false;
					}
				}
				
				return true;
			},
		}
	},

	turn: {
		stages: {
			draw: {
				moves: { drop, draw, groupCards, sortCards}
			},
			discard: {
				moves: { discard, finish, groupCards, sortCards }
			},
			notTurn: {
				moves: { groupCards, sortCards }
			},
		},

		order: {
			first: G => G.firstPlayer
		},
	},

	playerView: PlayerView.STRIP_SECRETS,
	endIf: (G, ctx) => {
		if (G.winner) {
			return true;
		} else {
			let droppedCnt = 0;
			for (let player in G.players) {
				if (player.isDropped) {
					droppedCnt++;
				}
			}

			if (droppedCnt === ctx.numPlayers - 1) {
				return true;
			}
		}

		return false;
	},
};

function setUp(ctx) {
	let tossedCards = [RedJokerCard, BlackJokerCard];
	for (let suit of Suits) {
		for (let rank of Ranks) {
			tossedCards.push({ suit: suit, rank: rank });	
		}
	}

	let n = ctx.random.D4();
	for (let i = 0; i < n; i++) {
		tossedCards = ctx.random.Shuffle(tossedCards);
	}

	let allCards = [RedJokerCard, BlackJokerCard];
	for (let i = 0; i < 2; i++) {
		for (let suit of Suits) {
			for (let rank of Ranks) {
				allCards.push({ suit: suit, rank: rank });	
			}
		}
	}

	n = ctx.random.D4();
	for (let i = 0; i < n; i++) {
		allCards = ctx.random.Shuffle(allCards);
	}

	const jokerCard = allCards[ctx.random.Die(allCards.length)];
	let firstPlayer;
	const players = {};
	
	for (let i = 0; i < ctx.numPlayers; i++) {
		players[i] = {
			groupedCards: [],
			tossedCard: tossedCards[i],
			isSortCards: true
		};

		if (i === 0 || compareCards(tossedCards[i], tossedCards[i - 1]) > 0) {
			firstPlayer = i;
		}
	}

	const maxCardsCnt = 13;
	const playerCards = allCards.splice(0, ctx.numPlayers * maxCardsCnt);
	for (let i = 0, j = 0; i < playerCards.length; i++) {
		players[j].groupedCards.push(playerCards[i]);
		j++;
		if (j === ctx.numPlayers) {
			j = 0;
		}
	}

	setTimeout(() => {
		ctx.events.setPhase("play");
		ctx.events.setActivePlayers({
			currentPlayer: { stage: "draw" },
 			others: { stage: "notTurn" },
		});
	}, 3000);

	return {
		isTossOver: false,
		finishSlot: null,
		closedDeck: allCards,
		openDeck: [],
		winner: null,
		jokerCard: jokerCard,
		players: players,
		firstPlayer: firstPlayer,
	};
}

export default Rummy;
