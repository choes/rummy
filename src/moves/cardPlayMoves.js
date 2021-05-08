import { sortGroupedCards } from "./helper-functions/cardsSorting";
import { getCardsType, calcGroupedCardsScore } from "./helper-functions/cardsOperation";

function getNextPlayer(G, ctx) {
    for (let pos = (ctx.playOrderPos + 1) % ctx.numPlayers; pos !== ctx.playOrderPos; pos = (pos + 1) % ctx.numPlayers) {
        if (!G.playersState[pos].isDropped) {
            return pos.toString();
        }
    }

    return null;
}

function getCurrentPlayer(G, ctx) {
    const currentPlayer = ctx.currentPlayer;
    return G.players[currentPlayer];
}

function setNextPlayer(G, ctx, nextPlayerPos) {
    ctx.events.endTurn({ next: nextPlayerPos });
    let activePlayers = {};
    for (let i in G.playersState) {
        if (i === nextPlayerPos) {
            activePlayers[i] = "draw";
        } else {
            activePlayers[i] = G.playersState[i].isDropped ? "dropped" : "notTurn";
        }
    }

    ctx.events.setActivePlayers({ value: activePlayers });
}

export function drop(G, ctx) {
    G.playersState[ctx.currentPlayer].isDropped = true;
    const nextPlayerPos = getNextPlayer(G, ctx);
    if (nextPlayerPos) {
        let isOthersDropped = true;
        for (const i in G.playersState) {
            if (i !== nextPlayerPos && !G.playersState[i].isDropped) {
                isOthersDropped = false;
                break;
            }
        }
        if (isOthersDropped) {
            G.winner = nextPlayerPos;
        } else {
            setNextPlayer(G, ctx, nextPlayerPos);
        }
    }
}

export function draw(G, ctx, deck) {
    let card = null;
    if (deck === "closed") {
        [card] = G.secret.closedDeck.splice(0, 1);
    } else {
        [card] = G.openDeck.splice(0, 1);
    }

    if (card) {
        const player = getCurrentPlayer(G, ctx);
        player.handCards.push(card);

        if (player.isSortCards) {
            player.groupedCards = sortGroupedCards(player.handCards, G.jokerCard);
        } else {
            player.groupedCards[player.groupedCards.length - 1].push(card);
        }
        
        ctx.events.setStage("discard");
    }
}

function removeHandCard(G, ctx, card, index) {
    const player = getCurrentPlayer(G, ctx);
    for (let i = 0; i < player.handCards.length; i++) {
        const handCard = player.handCards[i];
        if (handCard.suit === card.suit && handCard.rank === card.rank) {
            if (index >= 0 && index < player.groupedCards.length) {
                let groupedCards = player.groupedCards[index].cards;
                for (let j = 0; j < groupedCards.length; j++) {
                    if (groupedCards[j].suit === card.suit && groupedCards[j].rank === card.rank) {
                        G.openDeck.splice(0, 0, handCard);
                        player.handCards.splice(i, 1);
                        groupedCards.splice(j, 1);
                        player.groupedCards[index].type = getCardsType(groupedCards);
                        calcGroupedCardsScore(player.groupedCards);

                        if (player.isSortCards) {
                            player.groupedCards = sortGroupedCards(player.handCards, G.jokerCard);
                        }
                        
                        return true;
                    }
                }
            }

            return false;
        }
    }

    return false;
}

export function discard(G, ctx, card, index) {
    if (removeHandCard(G, ctx, card, index)) {
        const nextPlayerPos = getNextPlayer(G, ctx);
        if (nextPlayerPos) {
            setNextPlayer(G, ctx, nextPlayerPos);
        }
    }
}

export function finish(G, ctx, card, index) {
    if (removeHandCard(G, ctx, card, index)) {
        G.finishSlot = { suit: card.suit, rank: card.rank };
        G.playersState[ctx.currentPlayer].isFinished = true;
        ctx.events.endTurn();
    }
}

export function declare(G, ctx) {
    G.playersState[ctx.playerID].isDeclared = true;
    let isAllDeclared = true;
    for (let i in G.playersState) {
        if (!G.playersState[i].isDropped && !G.playersState[i].isDeclared) {
            isAllDeclared = false;
            break;
        }
    }

    if (isAllDeclared) {
        for (let i in G.playersState) {
            if (G.playersState[i].isFinished) {
                G.winner = i;
                break;
            }
        }
    }
}