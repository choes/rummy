import { sortGroupedCards } from "./helper-functions/cardsSorting";

export function drop(G, ctx) {

}

export function draw(G, ctx, deck) {
    let card = null;
    if (deck === "closed") {
        [card] = G.secret.closedDeck.splice(0, 1);
    } else {
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

export function discard(G, ctx, card) {
    
}

export function finish(G, ctx, card) {

}

export function declare(G, ctx) {

}