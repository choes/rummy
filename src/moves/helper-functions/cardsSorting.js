import { FaceJokerRank, validSets, validSeqs, Suits, Ranks, Combinations } from "../../constants";
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

function pushGroupedCards(allGroupedCards, groupedCards, cloneCards) {
    let clonedJokerCards = cloneCards(cloneCards);

    for (let cardsInfo of groupedCards) {
        if (cardsInfo.type === Combinations.SEQUENCE) {
            let isNeedJoker = false;
            for (let card of cardsInfo.cards) {
                if (card.isNeedJoker) {
                    isNeedJoker = true;
                    for (let jokerCard of clonedJokerCards) {
                        if (!jokerCard.isUsed && card.suit === jokerCard.suit && card.rank === jokerCard.rank) {
                            card.isNeedJoker = undefined;
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
}

function getGroupScore(groups) {
    let score = 0;
    for (let group of groups) {
        score += group.score;
    }

    return score;
}

function getGroupedCards(plainCards, jokerCards, restJokerCardCnt, notCheckedKeys) {
    if (plainCards.length + restJokerCardCnt === 0) return null;
    
    if ((plainCards.length > 0) && (plainCards.length + restJokerCardCnt >= 3)) {
        let allGroupedCards = [];

        const checkedKeys = getCheckedKeys(plainCards[0], plainCards.length + restJokerCardCnt, notCheckedKeys);
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
            }
        }

        for (let setKey of checkedKeys.sets) {
            const setLen = setKey.length - 1;
            let setCards = validSeqs[setLen][setKey];
            const subInfo = subtractCards(setCards, plainCards);
            if ((subInfo.group.length > 0) && (subInfo.group.length + restJokerCardCnt >= setCards.length)) {
                let clonedKeys = cloneNotCheckedKeys(notCheckedKeys);
                clonedKeys[setKey] = true;
                const groupedCardsWithoutSetCards = getGroupedCards(plainCards, jokerCards, restJokerCardCnt, clonedKeys) 
                if (groupedCardsWithoutSetCards) {
                    pushGroupedCards(allGroupedCards, groupedCardsWithoutSetCards, jokerCards);
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
            }
        }

        allGroupedCards.sort((group1, group2) => {
            const groupScore1 = getGroupScore(group1);
            const groupScore2 = getGroupScore(group1);

            if (groupScore1 < groupScore2) {
                return -1;
            } else if (groupScore1 > groupScore2) {
                return 1;
            } else {
                return group1.length < group2.length ? -1 : (group1.length > group2.length ? 1 : 0);
            }
        });

        return allGroupedCards[0];
    } else {
        let groupedCards = [ {cards: [], type: null } ];
        for (let card of plainCards) {
            groupedCards[0].cards.push(card);
        }

        for (let i = 0; i < restJokerCardCnt; i++) {
            groupedCards[0].cards.push({ isNeedJoker: true });
        }

        return groupedCards;
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
        return idx1 < idx2 ? -1 : (idx1 > idx2 ? 1 : 0)
    });

    return getGroupedCards(plainCards, jokerCards, jokerCards.length, {});
}