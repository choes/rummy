import { sortGroupedCards } from "../moves/helper-functions/cardsSorting";

describe("sortCards", () =>{
    it("three joker cards", () => {
        const handCards = [
            {"suit":"H","rank":"7"},
            {"suit":"C","rank":"J"},
            {"suit":"C","rank":"8"},
            {"suit":"C","rank":"9"},
            {"suit":"C","rank":"Q"},
            {"suit":"C","rank":"T"},
            {"suit":"C","rank":"4"},
            {"suit":"D","rank":"T"},
            {"suit":"H","rank":"8"},
            {"suit":"H","rank":"T"},
            {"suit":"D","rank":"3"},
            {"suit":"S","rank":"3"},
            {"suit":"H","rank":"6"}
        ];

        const jokerCard = {"suit":"S","rank":"T"};
        const groupedCards = sortGroupedCards(handCards, jokerCard);
        expect(groupedCards).toEqual([
            {"cards":[{"suit":"H","rank":"6"},{"suit":"H","rank":"7"},{"suit":"H","rank":"8"}], "type":0, "score":0},
            {"cards":[{"suit":"C","rank":"8"},{"suit":"C","rank":"9"},{"suit":"C","rank":"T","isNeedJoker":false,"isJoker":true}], "type":0, "score":0},
            {"cards":[{"suit":"C","rank":"J"},{"suit":"C","rank":"Q"},{"suit":"D","rank":"T","isNeedJoker":false,"isJoker":true}], "type":1, "score":0},
            {"cards":[{"suit":"D","rank":"3"},{"suit":"H","rank":"T","isNeedJoker":false,"isJoker":true},{"suit":"S","rank":"3"}], "type":2, "score":0},
            {"cards":[{"suit":"C","rank":"4"}], "type":3, "score":4}
        ]);
    });
});