import { FaceJokerRank, validSets, validSeqs, Suits, Ranks, RanksScore, Combinations } from "../../constants";
import { subtractCards } from "./cardComparison";

function isJokerCard(card, jokerCard) {
    return card.rank === FaceJokerRank  ||
           card.rank === jokerCard.rank ||
           (jokerCard.rank === FaceJokerRank && card.rank === 'A'); // 'A' as a substitute to any card if the joker card is a face joker.
}

function getCheckedKeys(cards, jokerCardsCnt, notCheckedKeys) {
    let keys = { sets: [], seqs: [] };

    if ((cards.length > 0) && (cards.length + jokerCardsCnt >= 3)) {
        let suitCardsInfo = {};
        for (let suit of Suits) {
            suitCardsInfo[suit] = [];
        }

        for (let card of cards) {
            const len = suitCardsInfo[card.suit].length;
            if ((len === 0) || (suitCardsInfo[card.suit][len - 1].rank !== card.rank)) {
                suitCardsInfo[card.suit].push(card);
            }
        }

        for (let suit of Suits) {
            const suitCards = suitCardsInfo[suit];
            let len = suitCards.length;
            if (len > 0) {
                if (suitCards[len - 1].rank === 'K' && suitCards[0].rank === 'A') {
                    suitCards.push(suitCards[0]);
                    len++;
                }

                for (let i = 0; i < len; i++) {
                    const begRank = suitCards[i].rank;
                    const seqBegRankIdx = Ranks.indexOf(begRank);
                    let seqEndRankIdx = seqBegRankIdx;
                    let needJokerCnt = 0;
                    let usedJokerCnt = 0;
                    for (let j = i + 1; j < len; j++) {
                        const endRank = suitCards[j].rank;
                        if ((begRank === 'A' && endRank === 'K') || (begRank === '2' && endRank === 'A')) { // 'K','A','2' is not allowed.
                            break;
                        }

                        const lastRankIndex = Ranks.indexOf(suitCards[j - 1].rank);
                        const endRankIndex = (endRank === 'A') ? Ranks.length : Ranks.indexOf(endRank);
                        needJokerCnt += (endRankIndex - lastRankIndex - 1);
                        if (needJokerCnt > jokerCardsCnt) {
                            seqEndRankIdx = lastRankIndex;
                            break;
                        } else {
                            usedJokerCnt += (endRankIndex - lastRankIndex - 1);
                            seqEndRankIdx = endRankIndex;
                        }
                    }

                    if (jokerCardsCnt > usedJokerCnt) {
                        seqEndRankIdx += (jokerCardsCnt - usedJokerCnt);
                    }

                    if (seqEndRankIdx >= Ranks.length) {
                        seqEndRankIdx = Ranks.length;
                        if (begRank === 'A') {
                            seqEndRankIdx = Ranks.indexOf('Q');
                        }
                    }

                    for (let k = seqBegRankIdx + 2; k <= seqEndRankIdx; k++) {
                        let seqKey = suit;
                        for (let rankIdx = seqBegRankIdx; rankIdx <= k; rankIdx++) {
                            seqKey += (rankIdx === Ranks.length ? 'A' : Ranks[rankIdx]);
                        }
                        
                        if (!notCheckedKeys[seqKey]) {
                            keys.seqs.push(seqKey);
                        }
                    }
                }
            }
        }

        for (let beg = 0; beg < cards.length;) {
            let end = beg + 1;
            for (; end < cards.length; end++) {
                if (cards[end].rank !== cards[beg].rank) {
                    break;
                }
            }

            let maxSetCnt = 1;
            for (let i = beg + 1; i < end; i++) {
                if (cards[i].suit !== cards[i - 1].suit) {
                    maxSetCnt++;
                }
            }

            maxSetCnt += jokerCardsCnt;
            if (maxSetCnt >= 3) {
                for (let key in validSets[3]) {
                    if (key[2] === cards[beg].rank && !notCheckedKeys[key]) {
                        keys.sets.push(key);
                    }
                } 

                if (maxSetCnt >= 4) {
                    for (let key in validSets[4]) {
                        if (key[3] === cards[beg].rank && !notCheckedKeys[key]) {
                            keys.sets.push(key);
                        }
                    }
                }
            }

            beg = end;
        }
    }

    return keys;
}

function cloneNotCheckedKeys(keys) {
    let cloneKeys = {};
    for (let key in keys) {
        cloneKeys[key] = true;
    }

    return cloneKeys;
}

function cloneCards(cards) {
    let clonedCards = [];
    for (let card of cards) {
        clonedCards.push(card);
    }

    return clonedCards;
}

function getCombinationCnt(groupedCards) {
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

function getCardsScore(cards) {
    let score = 0;
    for (let card of cards) {
        if (!card.isJoker) {
            score += RanksScore[card.rank]; 
        }
    }

    return score;
}

function calcGroupedCardsScore(groupedCards) {
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

function pushGroupedCards(allGroupedCards, groupedCards, jokerCards) {
    let clonedJokerCards = cloneCards(jokerCards);

    for (let cardsInfo of groupedCards) {
        if (cardsInfo.type === Combinations.SEQUENCE) {
            let isNeedJoker = false;
            for (let card of cardsInfo.cards) {
                if (card.isNeedJoker) {
                    isNeedJoker = true;
                    for (let jokerCard of clonedJokerCards) {
                        if (!jokerCard.isUsed && card.suit === jokerCard.suit && card.rank === jokerCard.rank) {
                            card.isNeedJoker = undefined;
                            card.isJoker = true;
                            jokerCard.isUsed = true;
                            isNeedJoker = false;
                            break;
                        }
                    }
                }
            }

            if (!isNeedJoker) {
                cardsInfo.type = Combinations.PURESEQUENCE;
            }
        }
    }

    for (let cardsInfo of groupedCards) {
        if (cardsInfo.type !== Combinations.PURESEQUENCE) {
            for (let card of cardsInfo.cards) {
                if (card.isNeedJoker) {
                    for (let jokerCard of clonedJokerCards) {
                        if (!jokerCard.isUsed) {
                            jokerCard.isUsed = true;
                            card.rank = jokerCard.rank;
                            card.suit = jokerCard.suit;
                            card.isNeedJoker = undefined
                            card.isJoker = true;
                            break
                        }
                    }
                }
            }

            if (!cardsInfo.type) {
                cardsInfo.type = cardsInfo.cards.length < 3 ? Combinations.INVALID : Combinations.SEQUENCE;
            }
        }
    }

    calcGroupedCardsScore(groupedCards);
    allGroupedCards.push(groupedCards);
}

function getGroupScore(groups) {
    let score = 0;
    for (let group of groups) {
        score += group.score;
    }

    return score;
}

function getUnknownGroupedCards(plainCards, jokerCards, restJokerCardCnt) {
    let cardsInfo = { cards: [], type: null };
    for (let card of plainCards) {
        cardsInfo.cards.push(card);
    }
    
    if (restJokerCardCnt === 0) {
        cardsInfo.type = Combinations.INVALID;
    } else {
        if (restJokerCardCnt === jokerCards.length) {
            cardsInfo.type = Combinations.INVALID;
            for (let card of jokerCards) {
                card.isJoker = true;
                cardsInfo.cards.push(card);
            }
        } else {
            for (let i = 0; i < restJokerCardCnt; i++) {
                cardsInfo.cards.push({ isNeedJoker: true });
            }
        }
    }

    let groupedCards = [];
    if (cardsInfo.type) {
        let suitCards = {};
        let faceJokerCards = [];
        for (let suit of Suits) {
            suitCards[suit] = [];
        }

        for (let card of cardsInfo.cards) {
            if (suitCards[card.suit]) {
                suitCards[card.suit].push(card);
            } else {
                faceJokerCards.push(card);
            }
        }

        for (let suit of Suits) {
            if (suitCards[suit].length > 0) {
                groupedCards.push({ cards: suitCards[suit], type: Combinations.INVALID });    
            }
        }

        if (faceJokerCards.length > 0) {
            groupedCards.push({ cards: faceJokerCards, type: Combinations.INVALID });
        }
        
        calcGroupedCardsScore(groupedCards);
    } else {
        groupedCards.push(cardsInfo);    
    }

    return groupedCards;
}

function concatGroupedCards(groupedCads) {

}

function getGroupedCards(plainCards, jokerCards, restJokerCardCnt, notCheckedKeys) {
    if (plainCards.length + restJokerCardCnt === 0) return null;
    
    if ((plainCards.length > 0) && (plainCards.length + restJokerCardCnt >= 3)) {
        let allGroupedCards = [];
        let isOver = false;

        const checkedKeys = getCheckedKeys(plainCards, restJokerCardCnt, notCheckedKeys);
        for (let seqKey of checkedKeys.seqs) {
            const seqLen = seqKey.length - 1;
            let seqCards = validSeqs[seqLen][seqKey];
            const subInfo = subtractCards(seqCards, plainCards);
            if ((subInfo.group.length > 0) && (subInfo.group.length + restJokerCardCnt >= seqCards.length)) {
                let clonedKeys = cloneNotCheckedKeys(notCheckedKeys);
                clonedKeys[seqKey] = true;
                const groupedCardsWithoutSeqCards = getGroupedCards(plainCards, jokerCards, restJokerCardCnt, clonedKeys) 
                if (groupedCardsWithoutSeqCards) {
                    pushGroupedCards(allGroupedCards, groupedCardsWithoutSeqCards, jokerCards);
                    if (getGroupScore(groupedCardsWithoutSeqCards) === 0) {
                        isOver = true;
                        break;
                    }
                }

                let groupedCardsWithSeqCards = [];
                if (subInfo.group.length === seqCards.length) {
                    groupedCardsWithSeqCards.push({ cards: seqCards, type: Combinations.PURESEQUENCE });
                } else {
                    let cardsWithJoker = { cards: [], type: Combinations.SEQUENCE };
                    for (let card of subInfo.group) {
                        cardsWithJoker.cards.push(card);    
                    }

                    for (let card of subInfo.sub) {
                        card.isNeedJoker = true;
                        cardsWithJoker.cards.push(card);
                    }

                    restJokerCardCnt -= subInfo.sub.length;
                    groupedCardsWithSeqCards.push(cardsWithJoker);
                }

                plainCards = subInfo.rest;
                const restGroupedCards = getGroupedCards(plainCards, jokerCards, restJokerCardCnt, notCheckedKeys);
                if (restGroupedCards) {
                    for (let groupedCards of restGroupedCards) {
                        groupedCardsWithSeqCards.push(groupedCards);
                    }
                }

                pushGroupedCards(allGroupedCards, groupedCardsWithSeqCards, jokerCards);
                if (getGroupScore(groupedCardsWithSeqCards) === 0) {
                    isOver = true;
                    break;
                }
            }
        }

        if (!isOver) {
            for (let setKey of checkedKeys.sets) {
                const setLen = setKey.length - 1;
                let setCards = validSets[setLen][setKey];
                const subInfo = subtractCards(setCards, plainCards);
                if ((subInfo.group.length > 0) && (subInfo.group.length + restJokerCardCnt >= setCards.length)) {
                    let clonedKeys = cloneNotCheckedKeys(notCheckedKeys);
                    clonedKeys[setKey] = true;
                    const groupedCardsWithoutSetCards = getGroupedCards(plainCards, jokerCards, restJokerCardCnt, clonedKeys) 
                    if (groupedCardsWithoutSetCards) {
                        pushGroupedCards(allGroupedCards, groupedCardsWithoutSetCards, jokerCards);
                        if (getGroupScore(groupedCardsWithoutSetCards) === 0) {
                            break;
                        }
                    }

                    let groupedCardsWithSetCards = [];
                    if (subInfo.group.length === setCards.length) {
                        groupedCardsWithSetCards.push({ cards: setCards, type: Combinations.SET });
                    } else {
                        let cardsWithJoker = { cards: [], type: Combinations.SET };
                        for (let card of subInfo.group) {
                            cardsWithJoker.cards.push(card);    
                        }

                        for (let card of subInfo.sub) {
                            card.isNeedJoker = true;
                            cardsWithJoker.cards.push(card);
                        }

                        restJokerCardCnt -= subInfo.sub.length;
                        groupedCardsWithSetCards.push(cardsWithJoker);
                    }

                    plainCards = subInfo.rest;
                    const restGroupedCards = getGroupedCards(plainCards, jokerCards, restJokerCardCnt, notCheckedKeys);
                    if (restGroupedCards) {
                        for (let groupedCards of restGroupedCards) {
                            groupedCardsWithSetCards.push(groupedCards);
                        }
                    }

                    pushGroupedCards(allGroupedCards, groupedCardsWithSetCards, jokerCards);
                    if (getGroupScore(groupedCardsWithSetCards) === 0) {
                        break;
                    }
                }
            }
        }

        if (allGroupedCards.length === 0) {
            return getUnknownGroupedCards(plainCards, jokerCards, restJokerCardCnt);
        }

        allGroupedCards.sort((group1, group2) => {
            const groupScore1 = getGroupScore(group1);
            const groupScore2 = getGroupScore(group1);
            const combination1 = getCombinationCnt(group1);
            const combination2 = getCombinationCnt(group2);

            if (groupScore1 < groupScore2) {
                return -1;
            } else if (groupScore1 > groupScore2) {
                return 1;
            } else {
                if (combination1.pureSeq !== combination2.pureSeq) {
                    return combination1.pureSeq > combination2.pureSeq ? -1 : 1;
                } else if (combination1.seq !== combination2.seq) {
                    return combination1.seq > combination2.seq ? -1 : 1;    
                } else if (combination1.set !== combination2.set) {
                    return combination1.set > combination2.set ? -1 : 1;    
                } else {
                    return group1.length < group2.length ? -1 : (group1.length > group2.length ? 1 : 0);
                }
            }
        });

        concatGroupedCards(allGroupedCards[0]);
        return allGroupedCards[0];
    } else {
        return getUnknownGroupedCards(plainCards, jokerCards, restJokerCardCnt);
    }
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

    return getGroupedCards(plainCards, jokerCards, jokerCards.length, {});
}