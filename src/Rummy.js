import { PlayerView } from "boardgame.io/core";
import { drop, draw, discard, finish, declare } from "./moves/cardPlayMoves";
import { groupCards, sortCards, unSortCards } from "./moves/cardAreaMoves";
import { RedJokerCard, BlackJokerCard, Suits, Ranks }  from "./constants";
import { compareCards } from "./moves/helper-functions/cardsOperation";
import { sortGroupedCards } from "./moves/helper-functions/cardsSorting";

const Rummy = {
    name: "rummy",
    setup: setUp,
    phases: {
        play: {
            moves: {
                draw: { move: draw, client: false },
                groupCards, sortCards, unSortCards, drop, discard, finish, declare
            },
            endIf: G => {
                for (let i in G.playersState) {
                    if (G.playersState[i].isFinished) {
                        return true;
                    }
                }

                return false;
            },
            start: true,
            next: "declare",
        },

        declare: {
            moves: { groupCards, sortCards, unSortCards, declare },
            endIf: G => {
                for (let i in G.playersState) {
                    if (!G.playersState[i].isDeclared) {
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
                moves: {
                    draw: { move: draw, client: false },
                    drop, groupCards, sortCards, unSortCards
                }
            },
            discard: {
                moves: { discard, finish, groupCards, sortCards, unSortCards }
            },
            notTurn: {
                moves: { groupCards, sortCards, unSortCards }
            },
            dropped: {
                moves: {}
            }
        },

        order: {
            first: G => G.firstPlayer
        },

        activePlayers: {
            currentPlayer: { stage: "draw" },
            others: { stage: "notTurn" }
        },
    },

    playerView: PlayerView.STRIP_SECRETS,
    endIf: (G, ctx) => {
        let droppedCnt = 0;
        for (let i in G.playersState) {
            if (G.playersState[i].isDropped) {
                droppedCnt++;
            }
        }

        if (G.winner || (droppedCnt === ctx.numPlayers - 1) || (G.secret.closedDeck.length === 0)) {
            return true;
        }
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

    tossedCards.splice(ctx.numPlayers, tossedCards.length - ctx.numPlayers);

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

    const jokerCard = allCards[ctx.random.Die(allCards.length ) - 1];
    let firstPlayer;
    const players = {};
    const playersState = {};
    
    for (let i = 0; i < ctx.numPlayers; i++) {
        players[i] = {
            handCards: [],
            groupedCards: [],
            isSortCards: true
        };

        playersState[i]	= {
            isDropped: false,
            isDeclared: false,
            isFinished: false,
        }

        if (i === 0 || compareCards(tossedCards[i], tossedCards[i - 1]) > 0) {
            firstPlayer = i;
        }
    }

    const maxCardsCnt = 13;
    const playerCards = allCards.splice(0, ctx.numPlayers * maxCardsCnt);
    for (let i = 0, j = 0; i < playerCards.length; i++) {
        players[j].handCards.push(playerCards[i]);
        j++;
        if (j === ctx.numPlayers) {
            j = 0;
        }
    }

    for (let i in players) {
        players[i].groupedCards = sortGroupedCards(players[i].handCards, jokerCard);
    }

    return {
        finishSlot: null,
        tossedCards: tossedCards,
        secret: { closedDeck: allCards },
        openDeck: [],
        winner: null,
        jokerCard: jokerCard,
        players: players,
        playersState: playersState,
        firstPlayer: firstPlayer,
    };
}

export default Rummy;
