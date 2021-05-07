import { FaceJokerRank, validSets, validSeqs, Suits, Ranks, RanksScore, Combinations, BlackJokerCard} from "../../constants";
import { subtractCards } from "./cardComparison";

function isJokerCard(card, jokerCard) {
    return card.rank === FaceJokerRank  ||
           card.rank === jokerCard.rank ||
           (jokerCard.rank === FaceJokerRank && card.rank === 'A'); // 'A' as a substitute to any card if the joker card is a face joker.
}

function getCheckedKeys(cards, jokerCardsCnt) {
    let keys = { sets: [], seqs: [] };

    if ((cards.length > 0) && (cards.length + jokerCardsCnt >= 3)) {
        let suitCardsInfo = {};
        for (let suit of Suits) {
            suitCardsInfo[suit] = [];
        }

        for (let card of cards) {
            const len = suitCardsInfo[card.suit].length;
            if ((len === 0) || (suitCardsInfo[card.suit][len - 1].rank !== card.rank)) {
                suitCardsInfo[card.suit].push({suit: card.suit, rank: card.rank});
            }
        }

        for (let suit of Suits) {
            const suitCards = suitCardsInfo[suit];
            let len = suitCards.length;
            if (len > 0) {
                if (suitCards[len - 1].rank === 'K' && suitCards[0].rank === 'A') {
                    suitCards.push({ suit: suitCards[0].suit, rank: suitCards[0].rank });
                    len++;
                }

                for (let i = 0; i < len; i++) {
                    const begRank = suitCards[i].rank;
                    let seqBegRankIdx = Ranks.indexOf(begRank);
                    let seqEndRankIdx = seqBegRankIdx;
                    let needJokerCnt = 0;
                    let usedJokerCnt = 0;
                    for (let j = i + 1; j < len; j++) {
                        const endRank = suitCards[j].rank;
                        if (begRank === 'A' && endRank === 'K') { // 'K','A','2' is not allowed.
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

                    const maxRankIdx = (begRank === 'A') ? Ranks.indexOf('Q') : Ranks.length;
                    while (usedJokerCnt < jokerCardsCnt) {
                        if (seqEndRankIdx + 1 <= maxRankIdx) {
                            seqEndRankIdx++;
                        } else if (seqBegRankIdx - 1 >= 0) {
                            seqBegRankIdx--;
                        } else {
                            break;
                        }

                        usedJokerCnt++;
                    }

                    for (let k = seqBegRankIdx + 2; k <= seqEndRankIdx; k++) {
                        let seqKey = suit;
                        for (let rankIdx = seqBegRankIdx; rankIdx <= k; rankIdx++) {
                            seqKey += (rankIdx === Ranks.length ? 'A' : Ranks[rankIdx]);
                        }
                        
                        keys.seqs.push(seqKey);
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
                    if (key[3] === cards[beg].rank) {
                        keys.sets.push(key);
                    }
                } 

                if (maxSetCnt >= 4) {
                    for (let key in validSets[4]) {
                        if (key[4] === cards[beg].rank) {
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

function cloneCards(cards) {
    let clonedCards = [];
    for (let card of cards) {
        clonedCards.push({ suit: card.suit, rank: card.rank, isNeedJoker: card.isNeedJoker, isJoker: card.isJoker });
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
        score += (card.isJoker || card.isNeedJoker) ? 0 : RanksScore[card.rank];
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

function isNeedJokerCard(cards) {
    for (let card of cards) {
        if (card.isNeedJoker) {
            return true;
        }
    }

    return false;
}

function pushGroupedCards(allGroupedCards, groupedCards, jokerCards) {
    if (jokerCards.length > 0) {
        let needJokerCnt = 0;
        for (let cardsInfo of groupedCards) {
            for (let card of cardsInfo.cards) {
                if (card.isNeedJoker) {
                    needJokerCnt++;
                }
            }
        }

        if (needJokerCnt === jokerCards.length) {
            for (let cardsInfo of groupedCards) {
                for (let card of cardsInfo.cards) {
                    if (card.isNeedJoker) {
                        for (let i = 0; i < jokerCards.length; i++) {
                            if ((card.suit === jokerCards[i].suit) && (card.rank === jokerCards[i].rank)) {
                                card.isNeedJoker = false;
                                card.isJoker = true;
                                jokerCards.splice(i, 1);
                                break;
                            }
                        }

                        if (!isNeedJokerCard(cardsInfo.cards)) {
                            if (cardsInfo.type === Combinations.SEQUENCE) {
                                cardsInfo.type = Combinations.PURESEQUENCE;
                            }

                            break;
                        }
                    }
                }
            }

            for (let cardsInfo of groupedCards) {
                if (cardsInfo.type !== Combinations.PURESEQUENCE) {
                    for (let card of cardsInfo.cards) {
                        if (card.isNeedJoker && (jokerCards.length > 0)) {
                            const [jokerCard] = jokerCards.splice(0, 1);
                            card.rank = jokerCard.rank;
                            card.suit = jokerCard.suit;
                            card.isNeedJoker = false;
                            card.isJoker = true;
                        }
                    }
                }
            }
        }
    }

    if (groupedCards.length > 0) {
        calcGroupedCardsScore(groupedCards);
        allGroupedCards.push(groupedCards);
    }
}

function getGroupScore(groups) {
    let score = 0;
    for (let group of groups) {
        score += group.score;
    }

    return score;
}

function getUnknownGroupedCards(plainCards, jokerCards, restJokerCardsCnt) {
    if (plainCards.length + restJokerCardsCnt === 0) {
        return null;
    }

    let groupedCards = [];

    if (plainCards.length > 0) {
        let cardsInfo = { cards: [] };
        for (let card of plainCards) {
            cardsInfo.cards.push({ suit: card.suit, rank: card.rank});
        }

        plainCards.splice(0, plainCards.length);
        if (jokerCards.length === restJokerCardsCnt) {
            for (let card of jokerCards) {
                cardsInfo.cards.push({ isJoker: true, suit: card.suit, rank: card.rank });
            }

            jokerCards.splice(0, jokerCards.length);
        }

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
    } else {
        if (restJokerCardsCnt === jokerCards.length) {
            groupedCards.push({ cards: cloneCards(jokerCards), type: restJokerCardsCnt >= 3 ? Combinations.SEQUENCE : Combinations.INVALID });
            jokerCards.splice(0, jokerCards.length);
        }
    }

    if (groupedCards.length > 0) {
        calcGroupedCardsScore(groupedCards);
        return groupedCards;
    } else {
        return null;
    }
}

function sortAllGroupedCards(allGroupedCards) {
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
}

function procCheckedKey(keyType, key, allGroupedCards, plainCards, jokerCards, restJokerCardsCnt, checkedKeys) {
    const len = key.length - 1;
    const isSeqKey = (keyType === "seq");
    const keyCards = (isSeqKey ? validSeqs : validSets)[len][key];
    const subInfo = subtractCards(keyCards, plainCards);
    let isOver = false;
    if ((subInfo.group.length > 0) && (subInfo.group.length + restJokerCardsCnt >= keyCards.length)) {
        let clonedPlainCards = cloneCards(plainCards);
        let clonedRestJokerCardsCnt = restJokerCardsCnt;
        let clonedJokerCards = cloneCards(jokerCards);

        let groupedCardsWithKeyCards = [];
        if (subInfo.group.length === keyCards.length) {
            groupedCardsWithKeyCards.push({ cards: subInfo.group, type: isSeqKey ? Combinations.PURESEQUENCE : Combinations.SET });
        } else {
            for (const card of subInfo.sub) {
                if (card.isNeedJoker) {
                    restJokerCardsCnt--;
                }
            }
            groupedCardsWithKeyCards.push({ cards: subInfo.sub, type: isSeqKey ? Combinations.SEQUENCE : Combinations.SET });
        }

        plainCards.splice(0, plainCards.length);
        for (let card of subInfo.rest) {
            plainCards.push(card);
        }

        const restGroupedCards = getGroupedCards(plainCards, jokerCards, restJokerCardsCnt);
        if (restGroupedCards) {
            for (let groupedCards of restGroupedCards) {
                groupedCardsWithKeyCards.push(groupedCards);
            }
        }

        pushGroupedCards(allGroupedCards, groupedCardsWithKeyCards, jokerCards);
        if (getGroupScore(groupedCardsWithKeyCards) === 0) {
            isOver = true;
        } else {
            let keys = isSeqKey ? checkedKeys.seqs : checkedKeys.sets;
            for (let i = 0; i < keys.length; i++) {
                if (keys[i] === key) {
                    keys.splice(i, 1);
                    break;    
                }
            }

            const groupedCardsWithoutKeyCards = getGroupedCards(clonedPlainCards, clonedJokerCards, clonedRestJokerCardsCnt, checkedKeys) 
            if (groupedCardsWithoutKeyCards) {
                pushGroupedCards(allGroupedCards, groupedCardsWithoutKeyCards, clonedJokerCards);
                if (getGroupScore(groupedCardsWithoutKeyCards) === 0) {
                    isOver = true;
                }
            }
        }
    }

    return { isOver : isOver, restJokerCardsCnt: restJokerCardsCnt };
}

function getGroupedCards(plainCards, jokerCards, restJokerCardsCnt, checkedKeys) {
    if (plainCards.length + restJokerCardsCnt === 0) return null;
    
    if ((plainCards.length > 0) && (plainCards.length + restJokerCardsCnt >= 3)) {
        let allGroupedCards = [];
        let isOver = false;

        let needCheckedKeys = checkedKeys ? checkedKeys : getCheckedKeys(plainCards, restJokerCardsCnt);
        for (let seqKey of needCheckedKeys.seqs) {
            const ret = procCheckedKey("seq", seqKey, allGroupedCards, plainCards, jokerCards, restJokerCardsCnt, needCheckedKeys);
            isOver = ret.isOver;
            restJokerCardsCnt = ret.restJokerCardsCnt; 
            if (isOver) {
                break;
            }
        }

        if (!isOver) {
            for (let setKey of needCheckedKeys.sets) {
                const ret = procCheckedKey("set", setKey, allGroupedCards, plainCards, jokerCards, restJokerCardsCnt, needCheckedKeys);
                isOver = ret.isOver;
                restJokerCardsCnt = ret.restJokerCardsCnt;  
                if (isOver) {
                    break;
                }
            }
        }

        if (allGroupedCards.length === 0) {
            return getUnknownGroupedCards(plainCards, jokerCards, restJokerCardsCnt);
        }

        sortAllGroupedCards(allGroupedCards);
        return allGroupedCards[0];
    } else {
        return getUnknownGroupedCards(plainCards, jokerCards, restJokerCardsCnt);
    }
}

function adjustGroupedCards(groupedCards) {
    groupedCards.sort((group1, group2) => {
        if (group1.type === group2.type) {
            const group1Rank = Ranks.indexOf(group1.cards[0].rank);
            const group2Rank = Ranks.indexOf(group2.cards[0].rank);
            if (group1Rank === group2Rank) {
                const group1Suit = Suits.indexOf(group1.cards[0].suit);
                const group2Suit = Suits.indexOf(group2.cards[0].suit);
                return (group1Suit < group2Suit) ? -1 : (group1Suit > group2Suit ? 1 : 0);
            } else {
                return group1Rank < group2Rank ? -1 : 1;
            }
        } else {
            return group1.type < group2.type ? -1 : 1;
        }
    });

    let aloneInvalidCards = [];
    for (let cardsInfo of groupedCards) {
        if (cardsInfo.type === Combinations.INVALID && cardsInfo.cards.length === 1) {
            aloneInvalidCards.push(cardsInfo.cards[0]);
        }
    }

    if (aloneInvalidCards.length > 1) { // merge invalid cards.
        for (let i = 0; i < groupedCards.length; i++) {
            if (groupedCards[i].type === Combinations.INVALID) {
                const invalidGrouepdCards = groupedCards.splice(i, groupedCards.length - i);
                for (let cardsInfo of invalidGrouepdCards) {
                    if (cardsInfo.cards.length > 1) {
                        groupedCards.push(cardsInfo);
                    }
                }

                groupedCards.push({ cards: aloneInvalidCards, type: Combinations.INVALID, score: getCardsScore(aloneInvalidCards) }); 

                break;
            }
        }
    }
}

export function sortGroupedCards(cards, jokerCard) {
    let plainCards = [];
    let jokerCards = [];

    for (let card of cards) {
        if (isJokerCard(card, jokerCard)) {
            jokerCards.push({ suit: card.suit, rank: card.rank, isJoker: true });
        } else {
            plainCards.push({ suit: card.suit, rank: card.rank });
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

    jokerCards.sort((card1, card2) => {
        if (card1.rank !== FaceJokerRank && card2.rank !== FaceJokerRank) {
            const suitIdx1 = Suits.indexOf(card1.suit); 
            const suitIdx2 = Suits.indexOf(card2.suit);
            return suitIdx1 < suitIdx2 ? -1 : (suitIdx1 > suitIdx2 ? 1 : 0);
        } else {
            if (card1.rank === card2.rank) {
                return card1.suit === BlackJokerCard.suit ? -1 : 1;
            } else {
                return card1.rank === FaceJokerRank ? 1 : -1;
            }
        }
    }); 

    let groupedCards = getGroupedCards(plainCards, jokerCards, jokerCards.length);
    adjustGroupedCards(groupedCards);
    return groupedCards;
}