import { Suits, Ranks, FaceJokerRank, RedJokerCard } from "../../constants";

export function compareCards(card1, card2) {
    if (card1.rank === FaceJokerRank || card2.rank === FaceJokerRank) {
        if (card1.rank === FaceJokerRank && card2.rank === FaceJokerRank) {
            if (card1.suit !== card2.suit) {
                return card1.suit === RedJokerCard.suit ? 1 : -1;
            }
        } else {
            return card1.rank === FaceJokerRank ? 1 : -1;
        }
    } else {
        let rank1Position = Ranks.indexOf(card1.rank);
        let rank2Position = Ranks.indexOf(card2.rank);
        if (rank1Position > rank2Position) {
            return 1;
        } else if (rank1Position < rank2Position) {
            return -1;
        } else {
            let suit1Position = Suits.indexOf(card1.suit);
            let suit2Position = Suits.indexOf(card2.suit);
            if (suit1Position > suit2Position) {
                return 1;
            } else if (suit1Position < suit2Position) {
                return -1;
            }
        }
    }

    return 0;
}

export function subtractCards(cards1, cards2) {
    let subtraction = [];
    let idxes= {};
    let rest = [];
    let group = [];
    
    for (let card1 of cards1) {
        let idx = cards2.findIndex(card2 => card2.rank === card1.rank && card2.suit === card1.suit);
        if (idx < 0) {
            subtraction.push(card1);
        } else {
            group.push(card1);
            idxes[idx] = true;
        }
    }
    
    for (let i = 0; i < cards2.length; i++) {
        if (!idxes[i]) {
            rest.push(cards2[i]);
        }
    }

    return { sub: subtraction, group: group, rest: rest };
}