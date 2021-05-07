import { sortGroupedCards } from "./helper-functions/cardsSorting";
import { getCardsType, calcGroupedCardsScore } from "./helper-functions/cardsOperation";

function getPlayer(G, ctx) {
    const players = G.players;
    const playerID = ctx.playerID;
    return players[playerID];
}

export function groupCards(G, ctx, groupedCards) {
    const player = getPlayer(G, ctx);
    player.groupedCards = [];
    for (let cards of groupedCards) {
        player.groupedCards.push({ cards: cards, type: getCardsType(cards) }); 
    }

    calcGroupedCardsScore(player.groupedCards);
}

export function sortCards(G, ctx) {
    const player = getPlayer(G, ctx);
    if (!player.isSortCards) {
        player.groupedCards = sortGroupedCards(player.handCards, G.jokerCard);
        player.isSortCards = true;
    }
}

export function unSortCards(G, ctx) {
    const player = getPlayer(G, ctx);
    player.isSortCards = false;
}