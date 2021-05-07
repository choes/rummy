import { sortGroupedCards } from "./helper-functions/cardsSorting";

export function drop(G, ctx) {
    const currentPlayer = ctx.currentPlayer;
    const player = G.players[currentPlayer];
    player.isDropped = true;
}

export function draw(G, ctx, deck) {
    let card = null;
    if (deck === "closed") {
        [card] = G.secret.closedDeck.splice(0, 1);
    } else {
        [card] = G.openDeck.splice(0, 1);
    }

    if (card) {
        let currentPlayer = ctx.currentPlayer;
        let player = G.players[currentPlayer];
        player.handCards.push(card);

        if (player.isSortCards) {
            player.groupedCards = sortGroupedCards(player.handCards, G.jokerCard);
        } else {
            player.groupedCards[player.groupedCards.length - 1].push(card);
        }
        
        ctx.events.setStage("discard");
    }
}

export function discard(G, ctx, card, index) {

}

export function finish(G, ctx, card, index) {

}

export function declare(G, ctx) {

}