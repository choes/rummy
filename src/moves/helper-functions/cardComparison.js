import { Suits, Ranks, JokerCardRank, RedJokerCard } from "../../constants";

export function compareCards(card1, card2) {
    if (card1.rank === JokerCardRank || card2.rank === JokerCardRank) {
        if (card1.rank === JokerCardRank && card2.rank === JokerCardRank) {
            if (card1.suit !== card2.suit) {
                return card1.suit === RedJokerCard.suit ? 1 : -1;
            }
        } else {
            return card1.rank === JokerCardRank ? 1 : -1;
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