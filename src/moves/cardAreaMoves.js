export function groupCards(G, ctx, cards) {

}

export function sortCards(G, ctx) {

}

export function unSortCards(G, ctx) {
    const players = G.players;
    const playerID = ctx.playerID;

    players[playerID].isSortCards = false
}