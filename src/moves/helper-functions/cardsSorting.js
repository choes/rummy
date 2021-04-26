import { FaceJokerRank, validSets, validSeqs } from "../../constants";
import { subtractCards } from "./cardComparison";

function isJokerCard(card, jokerCard) {
    return card.rank === FaceJokerRank  ||
           card.rank === jokerCard.rank ||
           (jokerCard.rank === FaceJokerRank && card.rank === 'A'); // 'A' as a substitute to any card if the joker card is a face joker.
}

export function sortGroupedCards(cards, jokerCard) {
    let groupedCards = [];
    let plainCards = [];
    let jokerCards = [];

    for (let card of cards) {
        if (isJokerCard(card, jokerCard)) {
            jokerCards.push(card);
        } else {
            plainCards.push(card);
        }
    }

    return groupedCards;
}