import { FaceJokerRank, validSets, validSeqs, Suits, Ranks } from "../../constants";
import { subtractCards } from "./cardComparison";

function isJokerCard(card, jokerCard) {
    return card.rank === FaceJokerRank  ||
           card.rank === jokerCard.rank ||
           (jokerCard.rank === FaceJokerRank && card.rank === 'A'); // 'A' as a substitute to any card if the joker card is a face joker.
}

function getCheckedKeys(card, maxLen) {
    let keys = { sets: [], seqs: [] };

    if (card.rank === 'A') {

    } else {

    }

    return keys;
}

function getGroupedCards(plainCards, jokerCards, restJokerCardCnt) {
    let groupedCards = [];

    if (plainCards.length + restJokerCardCnt >= 3) {
        if (plainCards.length > 0) {
            const checkedKeys = getCheckedKeys(plainCards[0], plainCards.length + restJokerCardCnt);
            for (let seqKey of checkedKeys.seqs) {
                const seqLen = seqKey.length - 1;
                const subInfo = subtractCards(validSeqs[seqLen][seqKey], plainCards);
            }
        } else {

        }
    } else {
        if (plainCards.length > 0) {
            if (restJokerCardCnt > 0) {

            } else {

            }
        } else {
            if (restJokerCardCnt > 0) {

            }
        }
    }

    return groupedCards;
}

export function sortGroupedCards(cards, jokerCard) {
    let plainCards = [];
    let jokerCards = [];

    for (let card of cards) {
        if (isJokerCard(card, jokerCard)) {
            jokerCards.push(card);
        } else {
            plainCards.push(card);
        }
    }

    plainCards.sort((card1, card2) => {
        let idx1 = Ranks.indexOf(card1.rank);
        let idx2 = Ranks.indexOf(card2.rank);
        return idx1 < idx2 ? -1 : (idx1 > idx2 ? 1 : 0)
    });

    return getGroupedCards(plainCards, jokerCards, jokerCards.length);
}