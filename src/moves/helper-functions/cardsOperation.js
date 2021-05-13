import { Suits, Ranks, FaceJokerRank, RedJokerCard, Combinations, RanksScore, validSeqs} from "../../constants";

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
            subtraction.push({ suit: card1.suit, rank: card1.rank, isNeedJoker: true });
        } else {
            group.push({ suit: card1.suit, rank: card1.rank });
            subtraction.push({ suit: card1.suit, rank: card1.rank }); 
            idxes[idx] = true;
        }
    }
    
    for (let i = 0; i < cards2.length; i++) {
        if (!idxes[i]) {
            const card2 = cards2[i];
            rest.push({ suit: card2.suit, rank: card2.rank });
        }
    }

    return { sub: subtraction, group: group, rest: rest };
}

export function getCardsScore(cards) {
    let score = 0;
    for (let card of cards) {
        score += (card.isJoker || card.isNeedJoker) ? 0 : RanksScore[card.rank];
    }

    return score;
}

export function sortPlainCards(plainCards) {
    plainCards.sort((card1, card2) => {
        let idx1 = Ranks.indexOf(card1.rank);
        let idx2 = Ranks.indexOf(card2.rank);
        if (idx1 < idx2) {
            return -1;
        } else if (idx1 > idx2) {
            return 1;
        } else {
            const suitIdx1 = Suits.indexOf(card1.suit); 
            const suitIdx2 = Suits.indexOf(card2.suit);
            return suitIdx1 < suitIdx2 ? -1 : (suitIdx1 > suitIdx2 ? 1 : 0);
        }
    });
}

export function getCardsType(cards) {
    if ((!cards) || (cards.length > 13)) { return Combinations.INVALID };

    if (cards.length >= 3) {
        let plainCards = [];
        let jokerCards = [];
        for (let card of cards) {
            if (card.isJoker) {
                jokerCards.push(card);
            } else {
                plainCards.push(card);
            }
        }

        sortPlainCards(plainCards);
        if (plainCards.length <= 1) {
            return Combinations.SEQUENCE;
        } else {
            let isSet = false;
            if (cards.length <= 4) {
                isSet = true;
                for (let i = 0; i < plainCards.length - 1; i++) {
                    if ((cards[i].rank !== cards[i+1].rank) || (cards[i].suit === cards[i+1].suit)) {
                        isSet = false;
                        break;
                    }
                }
            }

            if (isSet) {
                return Combinations.SET;
            } else {
                const seqKeys = validSeqs[cards.length];
                for (const key in seqKeys) {
                    const seqCards = seqKeys[key];
                    const subInfo = subtractCards(seqCards, plainCards);
                    if (subInfo.group.length === seqCards.length) {
                        return Combinations.PURESEQUENCE;
                    } else if (subInfo.group.length + jokerCards.length === seqCards.length) {
                        return Combinations.SEQUENCE;
                    }
                }
            }
        }
    }
    
    return Combinations.INVALID;
}

export function getCombinationCnt(groupedCards) {
    let purSeqCnt = 0;
    let seqCnt = 0;
    let setCnt = 0;
    let invaldCnt = 0;
    for (let cardsInfo of groupedCards) {
        if (cardsInfo.type === Combinations.PURESEQUENCE) {
            purSeqCnt++;
        } else if (cardsInfo.type === Combinations.SEQUENCE) {
            seqCnt++;
        } else if (cardsInfo.type === Combinations.SET) {
            setCnt++;
        } else {
            invaldCnt++;
        }
    }

    return { pureSeq: purSeqCnt, seq: seqCnt, set: setCnt, invalid: invaldCnt };
}

export function calcGroupedCardsScore(groupedCards) {
    const combinations = getCombinationCnt(groupedCards);

    for (let cardsInfo of groupedCards) {
        if (cardsInfo.type === Combinations.PURESEQUENCE) {
            cardsInfo.score = 0;
        } else if (cardsInfo.type === Combinations.SEQUENCE || cardsInfo.type === Combinations.SET) {
            if ((combinations.pureSeq > 0) && (combinations.pureSeq + combinations.seq >= 2)) {
                cardsInfo.score = 0;
            } else {
                cardsInfo.score = getCardsScore(cardsInfo.cards);
            }
        } else {
            cardsInfo.score = getCardsScore(cardsInfo.cards);
        }
    }
}