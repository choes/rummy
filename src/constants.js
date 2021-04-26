export const FaceJokerRank = "1";
export const RedJokerCard = { suit: "R", rank: FaceJokerRank };
export const BlackJokerCard = { suit: "B", rank: FaceJokerRank };

export const Suits = ["D", "C", "H", "S"];

export const Ranks = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "T",
    "J",
    "Q",
    "K",
];

export const Combinations = {
    PURESEQUENCE: "Pure Sequence",
    SEQUENCE: "Sequence",
    SET: "Set",
    INVALID: "Invalid"
};

export const validSets = {
    3:[
        [ { suit: 'D', rank: 'A' }, { suit: 'C', rank: 'A' }, { suit: 'H', rank: 'A' } ],
        [ { suit: 'D', rank: 'A' }, { suit: 'C', rank: 'A' }, { suit: 'S', rank: 'A' } ],
        [ { suit: 'D', rank: 'A' }, { suit: 'H', rank: 'A' }, { suit: 'S', rank: 'A' } ],
        [ { suit: 'C', rank: 'A' }, { suit: 'H', rank: 'A' }, { suit: 'S', rank: 'A' } ],

        [ { suit: 'D', rank: '2' }, { suit: 'C', rank: '2' }, { suit: 'H', rank: '2' } ],
        [ { suit: 'D', rank: '2' }, { suit: 'C', rank: '2' }, { suit: 'S', rank: '2' } ],
        [ { suit: 'D', rank: '2' }, { suit: 'H', rank: '2' }, { suit: 'S', rank: '2' } ],
        [ { suit: 'C', rank: '2' }, { suit: 'H', rank: '2' }, { suit: 'S', rank: '2' } ],

        [ { suit: 'D', rank: '3' }, { suit: 'C', rank: '3' }, { suit: 'H', rank: '3' } ],
        [ { suit: 'D', rank: '3' }, { suit: 'C', rank: '3' }, { suit: 'S', rank: '3' } ],
        [ { suit: 'D', rank: '3' }, { suit: 'H', rank: '3' }, { suit: 'S', rank: '3' } ],
        [ { suit: 'C', rank: '3' }, { suit: 'H', rank: '3' }, { suit: 'S', rank: '3' } ],

        [ { suit: 'D', rank: '4' }, { suit: 'C', rank: '4' }, { suit: 'H', rank: '4' } ],
        [ { suit: 'D', rank: '4' }, { suit: 'C', rank: '4' }, { suit: 'S', rank: '4' } ],
        [ { suit: 'D', rank: '4' }, { suit: 'H', rank: '4' }, { suit: 'S', rank: '4' } ],
        [ { suit: 'C', rank: '4' }, { suit: 'H', rank: '4' }, { suit: 'S', rank: '4' } ],

        [ { suit: 'D', rank: '5' }, { suit: 'C', rank: '5' }, { suit: 'H', rank: '5' } ],
        [ { suit: 'D', rank: '5' }, { suit: 'C', rank: '5' }, { suit: 'S', rank: '5' } ],
        [ { suit: 'D', rank: '5' }, { suit: 'H', rank: '5' }, { suit: 'S', rank: '5' } ],
        [ { suit: 'C', rank: '5' }, { suit: 'H', rank: '5' }, { suit: 'S', rank: '5' } ],

        [ { suit: 'D', rank: '6' }, { suit: 'C', rank: '6' }, { suit: 'H', rank: '6' } ],
        [ { suit: 'D', rank: '6' }, { suit: 'C', rank: '6' }, { suit: 'S', rank: '6' } ],
        [ { suit: 'D', rank: '6' }, { suit: 'H', rank: '6' }, { suit: 'S', rank: '6' } ],
        [ { suit: 'C', rank: '6' }, { suit: 'H', rank: '6' }, { suit: 'S', rank: '6' } ],

        [ { suit: 'D', rank: '7' }, { suit: 'C', rank: '7' }, { suit: 'H', rank: '7' } ],
        [ { suit: 'D', rank: '7' }, { suit: 'C', rank: '7' }, { suit: 'S', rank: '7' } ],
        [ { suit: 'D', rank: '7' }, { suit: 'H', rank: '7' }, { suit: 'S', rank: '7' } ],
        [ { suit: 'C', rank: '7' }, { suit: 'H', rank: '7' }, { suit: 'S', rank: '7' } ],

        [ { suit: 'D', rank: '8' }, { suit: 'C', rank: '8' }, { suit: 'H', rank: '8' } ],
        [ { suit: 'D', rank: '8' }, { suit: 'C', rank: '8' }, { suit: 'S', rank: '8' } ],
        [ { suit: 'D', rank: '8' }, { suit: 'H', rank: '8' }, { suit: 'S', rank: '8' } ],
        [ { suit: 'C', rank: '8' }, { suit: 'H', rank: '8' }, { suit: 'S', rank: '8' } ],

        [ { suit: 'D', rank: '9' }, { suit: 'C', rank: '9' }, { suit: 'H', rank: '9' } ],
        [ { suit: 'D', rank: '9' }, { suit: 'C', rank: '9' }, { suit: 'S', rank: '9' } ],
        [ { suit: 'D', rank: '9' }, { suit: 'H', rank: '9' }, { suit: 'S', rank: '9' } ],
        [ { suit: 'C', rank: '9' }, { suit: 'H', rank: '9' }, { suit: 'S', rank: '9' } ],

        [ { suit: 'D', rank: 'T' }, { suit: 'C', rank: 'T' }, { suit: 'H', rank: 'T' } ],
        [ { suit: 'D', rank: 'T' }, { suit: 'C', rank: 'T' }, { suit: 'S', rank: 'T' } ],
        [ { suit: 'D', rank: 'T' }, { suit: 'H', rank: 'T' }, { suit: 'S', rank: 'T' } ],
        [ { suit: 'C', rank: 'T' }, { suit: 'H', rank: 'T' }, { suit: 'S', rank: 'T' } ],

        [ { suit: 'D', rank: 'J' }, { suit: 'C', rank: 'J' }, { suit: 'H', rank: 'J' } ],
        [ { suit: 'D', rank: 'J' }, { suit: 'C', rank: 'J' }, { suit: 'S', rank: 'J' } ],
        [ { suit: 'D', rank: 'J' }, { suit: 'H', rank: 'J' }, { suit: 'S', rank: 'J' } ],
        [ { suit: 'C', rank: 'J' }, { suit: 'H', rank: 'J' }, { suit: 'S', rank: 'J' } ],

        [ { suit: 'D', rank: 'Q' }, { suit: 'C', rank: 'Q' }, { suit: 'H', rank: 'Q' } ],
        [ { suit: 'D', rank: 'Q' }, { suit: 'C', rank: 'Q' }, { suit: 'S', rank: 'Q' } ],
        [ { suit: 'D', rank: 'Q' }, { suit: 'H', rank: 'Q' }, { suit: 'S', rank: 'Q' } ],
        [ { suit: 'C', rank: 'Q' }, { suit: 'H', rank: 'Q' }, { suit: 'S', rank: 'Q' } ],

        [ { suit: 'D', rank: 'K' }, { suit: 'C', rank: 'K' }, { suit: 'H', rank: 'K' } ],
        [ { suit: 'D', rank: 'K' }, { suit: 'C', rank: 'K' }, { suit: 'S', rank: 'K' } ],
        [ { suit: 'D', rank: 'K' }, { suit: 'H', rank: 'K' }, { suit: 'S', rank: 'K' } ],
        [ { suit: 'C', rank: 'K' }, { suit: 'H', rank: 'K' }, { suit: 'S', rank: 'K' } ],
    ],

    4:[
        [ { suit: 'D', rank: 'A' }, { suit: 'C', rank: 'A' }, { suit: 'H', rank: 'A' }, { suit: 'S', rank: 'A' } ], 
        [ { suit: 'D', rank: '2' }, { suit: 'C', rank: '2' }, { suit: 'H', rank: '2' }, { suit: 'S', rank: '2' } ], 
        [ { suit: 'D', rank: '3' }, { suit: 'C', rank: '3' }, { suit: 'H', rank: '3' }, { suit: 'S', rank: '3' } ], 
        [ { suit: 'D', rank: '4' }, { suit: 'C', rank: '4' }, { suit: 'H', rank: '4' }, { suit: 'S', rank: '4' } ], 
        [ { suit: 'D', rank: '5' }, { suit: 'C', rank: '5' }, { suit: 'H', rank: '5' }, { suit: 'S', rank: '5' } ], 
        [ { suit: 'D', rank: '6' }, { suit: 'C', rank: '6' }, { suit: 'H', rank: '6' }, { suit: 'S', rank: '6' } ], 
        [ { suit: 'D', rank: '7' }, { suit: 'C', rank: '7' }, { suit: 'H', rank: '7' }, { suit: 'S', rank: '7' } ], 
        [ { suit: 'D', rank: '8' }, { suit: 'C', rank: '8' }, { suit: 'H', rank: '8' }, { suit: 'S', rank: '8' } ], 
        [ { suit: 'D', rank: '9' }, { suit: 'C', rank: '9' }, { suit: 'H', rank: '9' }, { suit: 'S', rank: '9' } ], 
        [ { suit: 'D', rank: 'T' }, { suit: 'C', rank: 'T' }, { suit: 'H', rank: 'T' }, { suit: 'S', rank: 'T' } ], 
        [ { suit: 'D', rank: 'J' }, { suit: 'C', rank: 'J' }, { suit: 'H', rank: 'J' }, { suit: 'S', rank: 'J' } ], 
        [ { suit: 'D', rank: 'Q' }, { suit: 'C', rank: 'Q' }, { suit: 'H', rank: 'Q' }, { suit: 'S', rank: 'Q' } ], 
        [ { suit: 'D', rank: 'K' }, { suit: 'C', rank: 'K' }, { suit: 'H', rank: 'K' }, { suit: 'S', rank: 'K' } ], 
    ]
};

export const validSeqs = {
    3:[
        // A,2,3
        [ { suit: 'D', rank: 'A' }, { suit: 'D', rank: '2' }, { suit: 'D', rank: '3' } ],
        [ { suit: 'C', rank: 'A' }, { suit: 'C', rank: '2' }, { suit: 'C', rank: '3' } ],
        [ { suit: 'H', rank: 'A' }, { suit: 'H', rank: '2' }, { suit: 'H', rank: '3' } ],
        [ { suit: 'S', rank: 'A' }, { suit: 'S', rank: '2' }, { suit: 'S', rank: '3' } ],
        
        // 2,3,4
        [ { suit: 'D', rank: '2' }, { suit: 'D', rank: '3' }, { suit: 'D', rank: '4' } ],
        [ { suit: 'C', rank: '2' }, { suit: 'C', rank: '3' }, { suit: 'C', rank: '4' } ],
        [ { suit: 'H', rank: '2' }, { suit: 'H', rank: '3' }, { suit: 'H', rank: '4' } ],
        [ { suit: 'S', rank: '2' }, { suit: 'S', rank: '3' }, { suit: 'S', rank: '4' } ],

        // 3,4,5
        [ { suit: 'D', rank: '3' }, { suit: 'D', rank: '4' }, { suit: 'D', rank: '5' } ],
        [ { suit: 'C', rank: '3' }, { suit: 'C', rank: '4' }, { suit: 'C', rank: '5' } ],
        [ { suit: 'H', rank: '3' }, { suit: 'H', rank: '4' }, { suit: 'H', rank: '5' } ],
        [ { suit: 'S', rank: '3' }, { suit: 'S', rank: '4' }, { suit: 'S', rank: '5' } ],

        // 4,5,6
        [ { suit: 'D', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'D', rank: '6' } ],
        [ { suit: 'C', rank: '4' }, { suit: 'C', rank: '5' }, { suit: 'C', rank: '6' } ],
        [ { suit: 'H', rank: '4' }, { suit: 'H', rank: '5' }, { suit: 'H', rank: '6' } ],
        [ { suit: 'S', rank: '4' }, { suit: 'S', rank: '5' }, { suit: 'S', rank: '6' } ],

        // 5,6,7
        [ { suit: 'D', rank: '5' }, { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' } ],
        [ { suit: 'C', rank: '5' }, { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' } ],
        [ { suit: 'H', rank: '5' }, { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' } ],
        [ { suit: 'S', rank: '5' }, { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' } ],

        // 6,7,8
        [ { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' } ],
        [ { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' } ],
        [ { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' } ],
        [ { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' } ],

        // 7,8,9
        [ { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' } ],
        [ { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' } ],
        [ { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' } ],
        [ { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' } ],

        // 8,9,10
        [ { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' }, { suit: 'D', rank: 'T' } ],
        [ { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' }, { suit: 'C', rank: 'T' } ],
        [ { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' }, { suit: 'H', rank: 'T' } ],
        [ { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' }, { suit: 'S', rank: 'T' } ],

        // 9,10,J
        [ { suit: 'D', rank: '9' }, { suit: 'D', rank: 'T' }, { suit: 'D', rank: 'J' } ],
        [ { suit: 'C', rank: '9' }, { suit: 'C', rank: 'T' }, { suit: 'C', rank: 'J' } ],
        [ { suit: 'H', rank: '9' }, { suit: 'H', rank: 'T' }, { suit: 'H', rank: 'J' } ],
        [ { suit: 'S', rank: '9' }, { suit: 'S', rank: 'T' }, { suit: 'S', rank: 'J' } ],

        // 10,J,Q
        [ { suit: 'D', rank: 'T' }, { suit: 'D', rank: 'J' }, { suit: 'D', rank: 'Q' } ],
        [ { suit: 'C', rank: 'T' }, { suit: 'C', rank: 'J' }, { suit: 'C', rank: 'Q' } ],
        [ { suit: 'H', rank: 'T' }, { suit: 'H', rank: 'J' }, { suit: 'H', rank: 'Q' } ],
        [ { suit: 'S', rank: 'T' }, { suit: 'S', rank: 'J' }, { suit: 'S', rank: 'Q' } ],

        // J,Q,K
        [ { suit: 'D', rank: 'J' }, { suit: 'D', rank: 'Q' }, { suit: 'D', rank: 'K' } ],
        [ { suit: 'C', rank: 'J' }, { suit: 'C', rank: 'Q' }, { suit: 'C', rank: 'K' } ],
        [ { suit: 'H', rank: 'J' }, { suit: 'H', rank: 'Q' }, { suit: 'H', rank: 'K' } ],
        [ { suit: 'S', rank: 'J' }, { suit: 'S', rank: 'Q' }, { suit: 'S', rank: 'K' } ],

        // Q,K,A
        [ { suit: 'D', rank: 'Q' }, { suit: 'D', rank: 'K' }, { suit: 'D', rank: 'A' } ],
        [ { suit: 'C', rank: 'Q' }, { suit: 'C', rank: 'K' }, { suit: 'C', rank: 'A' } ],
        [ { suit: 'H', rank: 'Q' }, { suit: 'H', rank: 'K' }, { suit: 'H', rank: 'A' } ],
        [ { suit: 'S', rank: 'Q' }, { suit: 'S', rank: 'K' }, { suit: 'S', rank: 'A' } ],
    ],

    4:[
        // A,2,3,4
        [ { suit: 'D', rank: 'A' }, { suit: 'D', rank: '2' }, { suit: 'D', rank: '3' }, { suit: 'D', rank: '4' } ],
        [ { suit: 'C', rank: 'A' }, { suit: 'C', rank: '2' }, { suit: 'C', rank: '3' }, { suit: 'C', rank: '4' } ],
        [ { suit: 'H', rank: 'A' }, { suit: 'H', rank: '2' }, { suit: 'H', rank: '3' }, { suit: 'H', rank: '4' } ],
        [ { suit: 'S', rank: 'A' }, { suit: 'S', rank: '2' }, { suit: 'S', rank: '3' }, { suit: 'S', rank: '4' } ],
        
        // 2,3,4,5
        [ { suit: 'D', rank: '2' }, { suit: 'D', rank: '3' }, { suit: 'D', rank: '4' }, { suit: 'D', rank: '5' } ],
        [ { suit: 'C', rank: '2' }, { suit: 'C', rank: '3' }, { suit: 'C', rank: '4' }, { suit: 'C', rank: '5' } ],
        [ { suit: 'H', rank: '2' }, { suit: 'H', rank: '3' }, { suit: 'H', rank: '4' }, { suit: 'H', rank: '5' } ],
        [ { suit: 'S', rank: '2' }, { suit: 'S', rank: '3' }, { suit: 'S', rank: '4' }, { suit: 'S', rank: '5' } ],

        // 3,4,5,6
        [ { suit: 'D', rank: '3' }, { suit: 'D', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'D', rank: '6' } ],
        [ { suit: 'C', rank: '3' }, { suit: 'C', rank: '4' }, { suit: 'C', rank: '5' }, { suit: 'C', rank: '6' } ],
        [ { suit: 'H', rank: '3' }, { suit: 'H', rank: '4' }, { suit: 'H', rank: '5' }, { suit: 'H', rank: '6' } ],
        [ { suit: 'S', rank: '3' }, { suit: 'S', rank: '4' }, { suit: 'S', rank: '5' }, { suit: 'S', rank: '6' } ],

        // 4,5,6,7
        [ { suit: 'D', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' } ],
        [ { suit: 'C', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' } ],
        [ { suit: 'H', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' } ],
        [ { suit: 'S', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' } ],

        // 5,6,7,8
        [ { suit: 'D', rank: '5' }, { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' } ],
        [ { suit: 'D', rank: '5' }, { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' } ],
        [ { suit: 'D', rank: '5' }, { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' } ],
        [ { suit: 'D', rank: '5' }, { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' } ],

        // 6,7,8,9
        [ { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' } ],
        [ { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' } ],
        [ { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' } ],
        [ { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' } ],

        // 7,8,9,10
        [ { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' }, { suit: 'D', rank: 'T' } ],
        [ { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' }, { suit: 'C', rank: 'T' } ],
        [ { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' }, { suit: 'H', rank: 'T' } ],
        [ { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' }, { suit: 'S', rank: 'T' } ],

        // 8,9,10,J
        [ { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' }, { suit: 'D', rank: 'T' }, { suit: 'D', rank: 'J' } ],
        [ { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' }, { suit: 'C', rank: 'T' }, { suit: 'C', rank: 'J' } ],
        [ { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' }, { suit: 'H', rank: 'T' }, { suit: 'H', rank: 'J' } ],
        [ { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' }, { suit: 'S', rank: 'T' }, { suit: 'S', rank: 'J' } ],

        // 9,10,J,Q
        [ { suit: 'D', rank: '9' }, { suit: 'D', rank: 'T' }, { suit: 'D', rank: 'J' }, { suit: 'D', rank: 'Q' }  ],
        [ { suit: 'C', rank: '9' }, { suit: 'C', rank: 'T' }, { suit: 'C', rank: 'J' }, { suit: 'C', rank: 'Q' }  ],
        [ { suit: 'H', rank: '9' }, { suit: 'H', rank: 'T' }, { suit: 'H', rank: 'J' }, { suit: 'H', rank: 'Q' }  ],
        [ { suit: 'S', rank: '9' }, { suit: 'S', rank: 'T' }, { suit: 'S', rank: 'J' }, { suit: 'S', rank: 'Q' }  ],

        // 10,J,Q,K
        [ { suit: 'D', rank: 'T' }, { suit: 'D', rank: 'J' }, { suit: 'D', rank: 'Q' }, { suit: 'D', rank: 'K' } ],
        [ { suit: 'C', rank: 'T' }, { suit: 'C', rank: 'J' }, { suit: 'C', rank: 'Q' }, { suit: 'C', rank: 'K' } ],
        [ { suit: 'H', rank: 'T' }, { suit: 'H', rank: 'J' }, { suit: 'H', rank: 'Q' }, { suit: 'H', rank: 'K' } ],
        [ { suit: 'S', rank: 'T' }, { suit: 'S', rank: 'J' }, { suit: 'S', rank: 'Q' }, { suit: 'S', rank: 'K' } ],

        // J,Q,K,A
        [ { suit: 'D', rank: 'J' }, { suit: 'D', rank: 'Q' }, { suit: 'D', rank: 'K' }, { suit: 'D', rank: 'A' } ],
        [ { suit: 'C', rank: 'J' }, { suit: 'C', rank: 'Q' }, { suit: 'C', rank: 'K' }, { suit: 'C', rank: 'A' } ],
        [ { suit: 'H', rank: 'J' }, { suit: 'H', rank: 'Q' }, { suit: 'H', rank: 'K' }, { suit: 'H', rank: 'A' } ],
        [ { suit: 'S', rank: 'J' }, { suit: 'S', rank: 'Q' }, { suit: 'S', rank: 'K' }, { suit: 'S', rank: 'A' } ],
    ],

    5:[
        // A,2,3,4,5
        [ { suit: 'D', rank: 'A' }, { suit: 'D', rank: '2' }, { suit: 'D', rank: '3' }, { suit: 'D', rank: '4' }, { suit: 'D', rank: '5' } ],
        [ { suit: 'C', rank: 'A' }, { suit: 'C', rank: '2' }, { suit: 'C', rank: '3' }, { suit: 'C', rank: '4' }, { suit: 'C', rank: '5' } ],
        [ { suit: 'H', rank: 'A' }, { suit: 'H', rank: '2' }, { suit: 'H', rank: '3' }, { suit: 'H', rank: '4' }, { suit: 'H', rank: '5' } ],
        [ { suit: 'S', rank: 'A' }, { suit: 'S', rank: '2' }, { suit: 'S', rank: '3' }, { suit: 'S', rank: '4' }, { suit: 'S', rank: '5' } ],
        
        // 2,3,4,5,6
        [ { suit: 'D', rank: '2' }, { suit: 'D', rank: '3' }, { suit: 'D', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'D', rank: '6' } ],
        [ { suit: 'C', rank: '2' }, { suit: 'C', rank: '3' }, { suit: 'C', rank: '4' }, { suit: 'C', rank: '5' }, { suit: 'C', rank: '6' } ],
        [ { suit: 'H', rank: '2' }, { suit: 'H', rank: '3' }, { suit: 'H', rank: '4' }, { suit: 'H', rank: '5' }, { suit: 'H', rank: '6' } ],
        [ { suit: 'S', rank: '2' }, { suit: 'S', rank: '3' }, { suit: 'S', rank: '4' }, { suit: 'S', rank: '5' }, { suit: 'S', rank: '6' } ],

        // 3,4,5,6,7
        [ { suit: 'D', rank: '3' }, { suit: 'D', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' } ],
        [ { suit: 'C', rank: '3' }, { suit: 'C', rank: '4' }, { suit: 'C', rank: '5' }, { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' } ],
        [ { suit: 'H', rank: '3' }, { suit: 'H', rank: '4' }, { suit: 'H', rank: '5' }, { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' } ],
        [ { suit: 'S', rank: '3' }, { suit: 'S', rank: '4' }, { suit: 'S', rank: '5' }, { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' } ],

        // 4,5,6,7,8
        [ { suit: 'D', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' } ],
        [ { suit: 'C', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' } ],
        [ { suit: 'H', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' } ],
        [ { suit: 'S', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' } ],

        // 5,6,7,8,9
        [ { suit: 'D', rank: '5' }, { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' } ],
        [ { suit: 'D', rank: '5' }, { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' } ],
        [ { suit: 'D', rank: '5' }, { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' } ],
        [ { suit: 'D', rank: '5' }, { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' } ],

        // 6,7,8,9,10
        [ { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' }, { suit: 'D', rank: 'T' } ],
        [ { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' }, { suit: 'C', rank: 'T' } ],
        [ { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' }, { suit: 'H', rank: 'T' } ],
        [ { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' }, { suit: 'S', rank: 'T' } ],

        // 7,8,9,10,J
        [ { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' }, { suit: 'D', rank: 'T' }, { suit: 'D', rank: 'J' } ],
        [ { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' }, { suit: 'C', rank: 'T' }, { suit: 'C', rank: 'J' } ],
        [ { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' }, { suit: 'H', rank: 'T' }, { suit: 'H', rank: 'J' } ],
        [ { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' }, { suit: 'S', rank: 'T' }, { suit: 'S', rank: 'J' } ],

        // 8,9,10,J,Q
        [ { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' }, { suit: 'D', rank: 'T' }, { suit: 'D', rank: 'J' }, { suit: 'D', rank: 'Q' } ],
        [ { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' }, { suit: 'C', rank: 'T' }, { suit: 'C', rank: 'J' }, { suit: 'C', rank: 'Q' } ],
        [ { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' }, { suit: 'H', rank: 'T' }, { suit: 'H', rank: 'J' }, { suit: 'H', rank: 'Q' } ],
        [ { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' }, { suit: 'S', rank: 'T' }, { suit: 'S', rank: 'J' }, { suit: 'S', rank: 'Q' } ],

        // 9,10,J,Q,K
        [ { suit: 'D', rank: '9' }, { suit: 'D', rank: 'T' }, { suit: 'D', rank: 'J' }, { suit: 'D', rank: 'Q' }, { suit: 'D', rank: 'K' } ],
        [ { suit: 'C', rank: '9' }, { suit: 'C', rank: 'T' }, { suit: 'C', rank: 'J' }, { suit: 'C', rank: 'Q' }, { suit: 'C', rank: 'K' } ],
        [ { suit: 'H', rank: '9' }, { suit: 'H', rank: 'T' }, { suit: 'H', rank: 'J' }, { suit: 'H', rank: 'Q' }, { suit: 'H', rank: 'K' } ],
        [ { suit: 'S', rank: '9' }, { suit: 'S', rank: 'T' }, { suit: 'S', rank: 'J' }, { suit: 'S', rank: 'Q' }, { suit: 'S', rank: 'K' } ],

        // 10,J,Q,K,A
        [ { suit: 'D', rank: 'T' }, { suit: 'D', rank: 'J' }, { suit: 'D', rank: 'Q' }, { suit: 'D', rank: 'K' }, { suit: 'D', rank: 'A' } ],
        [ { suit: 'C', rank: 'T' }, { suit: 'C', rank: 'J' }, { suit: 'C', rank: 'Q' }, { suit: 'C', rank: 'K' }, { suit: 'C', rank: 'A' } ],
        [ { suit: 'H', rank: 'T' }, { suit: 'H', rank: 'J' }, { suit: 'H', rank: 'Q' }, { suit: 'H', rank: 'K' }, { suit: 'H', rank: 'A' } ],
        [ { suit: 'S', rank: 'T' }, { suit: 'S', rank: 'J' }, { suit: 'S', rank: 'Q' }, { suit: 'S', rank: 'K' }, { suit: 'S', rank: 'A' } ],
    ],

    6:[
        // A,2,3,4,5,6
        [ { suit: 'D', rank: 'A' }, { suit: 'D', rank: '2' }, { suit: 'D', rank: '3' }, { suit: 'D', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'D', rank: '6' } ],
        [ { suit: 'C', rank: 'A' }, { suit: 'C', rank: '2' }, { suit: 'C', rank: '3' }, { suit: 'C', rank: '4' }, { suit: 'C', rank: '5' }, { suit: 'C', rank: '6' } ],
        [ { suit: 'H', rank: 'A' }, { suit: 'H', rank: '2' }, { suit: 'H', rank: '3' }, { suit: 'H', rank: '4' }, { suit: 'H', rank: '5' }, { suit: 'H', rank: '6' } ],
        [ { suit: 'S', rank: 'A' }, { suit: 'S', rank: '2' }, { suit: 'S', rank: '3' }, { suit: 'S', rank: '4' }, { suit: 'S', rank: '5' }, { suit: 'S', rank: '6' } ],
        
        // 2,3,4,5,6,7
        [ { suit: 'D', rank: '2' }, { suit: 'D', rank: '3' }, { suit: 'D', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' } ],
        [ { suit: 'C', rank: '2' }, { suit: 'C', rank: '3' }, { suit: 'C', rank: '4' }, { suit: 'C', rank: '5' }, { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' } ],
        [ { suit: 'H', rank: '2' }, { suit: 'H', rank: '3' }, { suit: 'H', rank: '4' }, { suit: 'H', rank: '5' }, { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' } ],
        [ { suit: 'S', rank: '2' }, { suit: 'S', rank: '3' }, { suit: 'S', rank: '4' }, { suit: 'S', rank: '5' }, { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' } ],

        // 3,4,5,6,7,8
        [ { suit: 'D', rank: '3' }, { suit: 'D', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' } ],
        [ { suit: 'C', rank: '3' }, { suit: 'C', rank: '4' }, { suit: 'C', rank: '5' }, { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' } ],
        [ { suit: 'H', rank: '3' }, { suit: 'H', rank: '4' }, { suit: 'H', rank: '5' }, { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' } ],
        [ { suit: 'S', rank: '3' }, { suit: 'S', rank: '4' }, { suit: 'S', rank: '5' }, { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' } ],

        // 4,5,6,7,8,9
        [ { suit: 'D', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' } ],
        [ { suit: 'C', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' } ],
        [ { suit: 'H', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' } ],
        [ { suit: 'S', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' } ],

        // 5,6,7,8,9,10
        [ { suit: 'D', rank: '5' }, { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' }, { suit: 'D', rank: 'T' } ],
        [ { suit: 'D', rank: '5' }, { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' }, { suit: 'C', rank: 'T' } ],
        [ { suit: 'D', rank: '5' }, { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' }, { suit: 'H', rank: 'T' } ],
        [ { suit: 'D', rank: '5' }, { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' }, { suit: 'S', rank: 'T' } ],

        // 6,7,8,9,10,J
        [ { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' }, { suit: 'D', rank: 'T' }, { suit: 'D', rank: 'J' } ],
        [ { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' }, { suit: 'C', rank: 'T' }, { suit: 'C', rank: 'J' } ],
        [ { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' }, { suit: 'H', rank: 'T' }, { suit: 'H', rank: 'J' } ],
        [ { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' }, { suit: 'S', rank: 'T' }, { suit: 'S', rank: 'J' } ],

        // 7,8,9,10,J,Q
        [ { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' }, { suit: 'D', rank: 'T' }, { suit: 'D', rank: 'J' }, { suit: 'D', rank: 'Q' } ],
        [ { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' }, { suit: 'C', rank: 'T' }, { suit: 'C', rank: 'J' }, { suit: 'C', rank: 'Q' } ],
        [ { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' }, { suit: 'H', rank: 'T' }, { suit: 'H', rank: 'J' }, { suit: 'H', rank: 'Q' } ],
        [ { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' }, { suit: 'S', rank: 'T' }, { suit: 'S', rank: 'J' }, { suit: 'S', rank: 'Q' } ],

        // 8,9,10,J,Q,K
        [ { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' }, { suit: 'D', rank: 'T' }, { suit: 'D', rank: 'J' }, { suit: 'D', rank: 'Q' }, { suit: 'D', rank: 'K' } ],
        [ { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' }, { suit: 'C', rank: 'T' }, { suit: 'C', rank: 'J' }, { suit: 'C', rank: 'Q' }, { suit: 'D', rank: 'K' } ],
        [ { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' }, { suit: 'H', rank: 'T' }, { suit: 'H', rank: 'J' }, { suit: 'H', rank: 'Q' }, { suit: 'D', rank: 'K' } ],
        [ { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' }, { suit: 'S', rank: 'T' }, { suit: 'S', rank: 'J' }, { suit: 'S', rank: 'Q' }, { suit: 'D', rank: 'K' } ],

        // 9,10,J,Q,K,A
        [ { suit: 'D', rank: '9' }, { suit: 'D', rank: 'T' }, { suit: 'D', rank: 'J' }, { suit: 'D', rank: 'Q' }, { suit: 'D', rank: 'K' }, { suit: 'D', rank: 'A' } ],
        [ { suit: 'C', rank: '9' }, { suit: 'C', rank: 'T' }, { suit: 'C', rank: 'J' }, { suit: 'C', rank: 'Q' }, { suit: 'C', rank: 'K' }, { suit: 'C', rank: 'A' } ],
        [ { suit: 'H', rank: '9' }, { suit: 'H', rank: 'T' }, { suit: 'H', rank: 'J' }, { suit: 'H', rank: 'Q' }, { suit: 'H', rank: 'K' }, { suit: 'H', rank: 'A' } ],
        [ { suit: 'S', rank: '9' }, { suit: 'S', rank: 'T' }, { suit: 'S', rank: 'J' }, { suit: 'S', rank: 'Q' }, { suit: 'S', rank: 'K' }, { suit: 'S', rank: 'A' } ],
    ],

    7:[
        // A,2,3,4,5,6,7
        [ { suit: 'D', rank: 'A' }, { suit: 'D', rank: '2' }, { suit: 'D', rank: '3' }, { suit: 'D', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' } ],
        [ { suit: 'C', rank: 'A' }, { suit: 'C', rank: '2' }, { suit: 'C', rank: '3' }, { suit: 'C', rank: '4' }, { suit: 'C', rank: '5' }, { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' } ],
        [ { suit: 'H', rank: 'A' }, { suit: 'H', rank: '2' }, { suit: 'H', rank: '3' }, { suit: 'H', rank: '4' }, { suit: 'H', rank: '5' }, { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' } ],
        [ { suit: 'S', rank: 'A' }, { suit: 'S', rank: '2' }, { suit: 'S', rank: '3' }, { suit: 'S', rank: '4' }, { suit: 'S', rank: '5' }, { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' } ],
        
        // 2,3,4,5,6,7,8
        [ { suit: 'D', rank: '2' }, { suit: 'D', rank: '3' }, { suit: 'D', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' } ],
        [ { suit: 'C', rank: '2' }, { suit: 'C', rank: '3' }, { suit: 'C', rank: '4' }, { suit: 'C', rank: '5' }, { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' } ],
        [ { suit: 'H', rank: '2' }, { suit: 'H', rank: '3' }, { suit: 'H', rank: '4' }, { suit: 'H', rank: '5' }, { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' } ],
        [ { suit: 'S', rank: '2' }, { suit: 'S', rank: '3' }, { suit: 'S', rank: '4' }, { suit: 'S', rank: '5' }, { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' } ],

        // 3,4,5,6,7,8,9
        [ { suit: 'D', rank: '3' }, { suit: 'D', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' } ],
        [ { suit: 'C', rank: '3' }, { suit: 'C', rank: '4' }, { suit: 'C', rank: '5' }, { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' } ],
        [ { suit: 'H', rank: '3' }, { suit: 'H', rank: '4' }, { suit: 'H', rank: '5' }, { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' } ],
        [ { suit: 'S', rank: '3' }, { suit: 'S', rank: '4' }, { suit: 'S', rank: '5' }, { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' } ],

        // 4,5,6,7,8,9,10
        [ { suit: 'D', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' }, { suit: 'D', rank: 'T' } ],
        [ { suit: 'C', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' }, { suit: 'C', rank: 'T' } ],
        [ { suit: 'H', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' }, { suit: 'H', rank: 'T' } ],
        [ { suit: 'S', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' }, { suit: 'S', rank: 'T' } ],

        // 5,6,7,8,9,10,J
        [ { suit: 'D', rank: '5' }, { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' }, { suit: 'D', rank: 'T' }, { suit: 'D', rank: 'J' } ],
        [ { suit: 'D', rank: '5' }, { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' }, { suit: 'C', rank: 'T' }, { suit: 'C', rank: 'J' } ],
        [ { suit: 'D', rank: '5' }, { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' }, { suit: 'H', rank: 'T' }, { suit: 'H', rank: 'J' } ],
        [ { suit: 'D', rank: '5' }, { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' }, { suit: 'S', rank: 'T' }, { suit: 'S', rank: 'J' } ],

        // 6,7,8,9,10,J,Q
        [ { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' }, { suit: 'D', rank: 'T' }, { suit: 'D', rank: 'J' }, { suit: 'D', rank: 'Q' } ],
        [ { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' }, { suit: 'C', rank: 'T' }, { suit: 'C', rank: 'J' }, { suit: 'C', rank: 'Q' } ],
        [ { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' }, { suit: 'H', rank: 'T' }, { suit: 'H', rank: 'J' }, { suit: 'H', rank: 'Q' } ],
        [ { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' }, { suit: 'S', rank: 'T' }, { suit: 'S', rank: 'J' }, { suit: 'S', rank: 'Q' } ],

        // 7,8,9,10,J,Q,K
        [ { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' }, { suit: 'D', rank: 'T' }, { suit: 'D', rank: 'J' }, { suit: 'D', rank: 'Q' }, { suit: 'D', rank: 'K' } ],
        [ { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' }, { suit: 'C', rank: 'T' }, { suit: 'C', rank: 'J' }, { suit: 'C', rank: 'Q' }, { suit: 'C', rank: 'K' } ],
        [ { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' }, { suit: 'H', rank: 'T' }, { suit: 'H', rank: 'J' }, { suit: 'H', rank: 'Q' }, { suit: 'H', rank: 'K' } ],
        [ { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' }, { suit: 'S', rank: 'T' }, { suit: 'S', rank: 'J' }, { suit: 'S', rank: 'Q' }, { suit: 'S', rank: 'K' } ],

        // 8,9,10,J,Q,K,A
        [ { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' }, { suit: 'D', rank: 'T' }, { suit: 'D', rank: 'J' }, { suit: 'D', rank: 'Q' }, { suit: 'D', rank: 'K' }, { suit: 'D', rank: 'A' } ],
        [ { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' }, { suit: 'C', rank: 'T' }, { suit: 'C', rank: 'J' }, { suit: 'C', rank: 'Q' }, { suit: 'D', rank: 'K' }, { suit: 'C', rank: 'A' } ],
        [ { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' }, { suit: 'H', rank: 'T' }, { suit: 'H', rank: 'J' }, { suit: 'H', rank: 'Q' }, { suit: 'D', rank: 'K' }, { suit: 'H', rank: 'A' } ],
        [ { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' }, { suit: 'S', rank: 'T' }, { suit: 'S', rank: 'J' }, { suit: 'S', rank: 'Q' }, { suit: 'D', rank: 'K' }, { suit: 'S', rank: 'A' } ],
    ],

    8:[
        // A,2,3,4,5,6,7,8
        [ { suit: 'D', rank: 'A' }, { suit: 'D', rank: '2' }, { suit: 'D', rank: '3' }, { suit: 'D', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' } ],
        [ { suit: 'C', rank: 'A' }, { suit: 'C', rank: '2' }, { suit: 'C', rank: '3' }, { suit: 'C', rank: '4' }, { suit: 'C', rank: '5' }, { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' } ],
        [ { suit: 'H', rank: 'A' }, { suit: 'H', rank: '2' }, { suit: 'H', rank: '3' }, { suit: 'H', rank: '4' }, { suit: 'H', rank: '5' }, { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' } ],
        [ { suit: 'S', rank: 'A' }, { suit: 'S', rank: '2' }, { suit: 'S', rank: '3' }, { suit: 'S', rank: '4' }, { suit: 'S', rank: '5' }, { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' } ],
        
        // 2,3,4,5,6,7,8,9
        [ { suit: 'D', rank: '2' }, { suit: 'D', rank: '3' }, { suit: 'D', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' } ],
        [ { suit: 'C', rank: '2' }, { suit: 'C', rank: '3' }, { suit: 'C', rank: '4' }, { suit: 'C', rank: '5' }, { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' } ],
        [ { suit: 'H', rank: '2' }, { suit: 'H', rank: '3' }, { suit: 'H', rank: '4' }, { suit: 'H', rank: '5' }, { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' } ],
        [ { suit: 'S', rank: '2' }, { suit: 'S', rank: '3' }, { suit: 'S', rank: '4' }, { suit: 'S', rank: '5' }, { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' } ],

        // 3,4,5,6,7,8,9,10
        [ { suit: 'D', rank: '3' }, { suit: 'D', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' }, { suit: 'D', rank: 'T' } ],
        [ { suit: 'C', rank: '3' }, { suit: 'C', rank: '4' }, { suit: 'C', rank: '5' }, { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' }, { suit: 'C', rank: 'T' } ],
        [ { suit: 'H', rank: '3' }, { suit: 'H', rank: '4' }, { suit: 'H', rank: '5' }, { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' }, { suit: 'H', rank: 'T' } ],
        [ { suit: 'S', rank: '3' }, { suit: 'S', rank: '4' }, { suit: 'S', rank: '5' }, { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' }, { suit: 'S', rank: 'T' } ],

        // 4,5,6,7,8,9,10,J
        [ { suit: 'D', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' }, { suit: 'D', rank: 'T' }, { suit: 'D', rank: 'J' } ],
        [ { suit: 'C', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' }, { suit: 'C', rank: 'T' }, { suit: 'C', rank: 'J' } ],
        [ { suit: 'H', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' }, { suit: 'H', rank: 'T' }, { suit: 'H', rank: 'J' } ],
        [ { suit: 'S', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' }, { suit: 'S', rank: 'T' }, { suit: 'S', rank: 'J' } ],

        // 5,6,7,8,9,10,J,Q
        [ { suit: 'D', rank: '5' }, { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' }, { suit: 'D', rank: 'T' }, { suit: 'D', rank: 'J' }, { suit: 'D', rank: 'Q' } ],
        [ { suit: 'D', rank: '5' }, { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' }, { suit: 'C', rank: 'T' }, { suit: 'C', rank: 'J' }, { suit: 'C', rank: 'Q' } ],
        [ { suit: 'D', rank: '5' }, { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' }, { suit: 'H', rank: 'T' }, { suit: 'H', rank: 'J' }, { suit: 'H', rank: 'Q' } ],
        [ { suit: 'D', rank: '5' }, { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' }, { suit: 'S', rank: 'T' }, { suit: 'S', rank: 'J' }, { suit: 'S', rank: 'Q' } ],

        // 6,7,8,9,10,J,Q,K
        [ { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' }, { suit: 'D', rank: 'T' }, { suit: 'D', rank: 'J' }, { suit: 'D', rank: 'Q' }, { suit: 'D', rank: 'K' } ],
        [ { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' }, { suit: 'C', rank: 'T' }, { suit: 'C', rank: 'J' }, { suit: 'C', rank: 'Q' }, { suit: 'C', rank: 'K' } ],
        [ { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' }, { suit: 'H', rank: 'T' }, { suit: 'H', rank: 'J' }, { suit: 'H', rank: 'Q' }, { suit: 'H', rank: 'K' } ],
        [ { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' }, { suit: 'S', rank: 'T' }, { suit: 'S', rank: 'J' }, { suit: 'S', rank: 'Q' }, { suit: 'S', rank: 'K' } ],

        // 7,8,9,10,J,Q,K,A
        [ { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' }, { suit: 'D', rank: 'T' }, { suit: 'D', rank: 'J' }, { suit: 'D', rank: 'Q' }, { suit: 'D', rank: 'K' }, { suit: 'D', rank: 'A' } ],
        [ { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' }, { suit: 'C', rank: 'T' }, { suit: 'C', rank: 'J' }, { suit: 'C', rank: 'Q' }, { suit: 'C', rank: 'K' }, { suit: 'C', rank: 'A' } ],
        [ { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' }, { suit: 'H', rank: 'T' }, { suit: 'H', rank: 'J' }, { suit: 'H', rank: 'Q' }, { suit: 'H', rank: 'K' }, { suit: 'H', rank: 'A' } ],
        [ { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' }, { suit: 'S', rank: 'T' }, { suit: 'S', rank: 'J' }, { suit: 'S', rank: 'Q' }, { suit: 'S', rank: 'K' }, { suit: 'S', rank: 'A' } ],
    ],

    9:[
        // A,2,3,4,5,6,7,8,9
        [ { suit: 'D', rank: 'A' }, { suit: 'D', rank: '2' }, { suit: 'D', rank: '3' }, { suit: 'D', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' } ],
        [ { suit: 'C', rank: 'A' }, { suit: 'C', rank: '2' }, { suit: 'C', rank: '3' }, { suit: 'C', rank: '4' }, { suit: 'C', rank: '5' }, { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' } ],
        [ { suit: 'H', rank: 'A' }, { suit: 'H', rank: '2' }, { suit: 'H', rank: '3' }, { suit: 'H', rank: '4' }, { suit: 'H', rank: '5' }, { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' } ],
        [ { suit: 'S', rank: 'A' }, { suit: 'S', rank: '2' }, { suit: 'S', rank: '3' }, { suit: 'S', rank: '4' }, { suit: 'S', rank: '5' }, { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' } ],
        
        // 2,3,4,5,6,7,8,9,10
        [ { suit: 'D', rank: '2' }, { suit: 'D', rank: '3' }, { suit: 'D', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' }, { suit: 'D', rank: 'T' } ],
        [ { suit: 'C', rank: '2' }, { suit: 'C', rank: '3' }, { suit: 'C', rank: '4' }, { suit: 'C', rank: '5' }, { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' }, { suit: 'C', rank: 'T' } ],
        [ { suit: 'H', rank: '2' }, { suit: 'H', rank: '3' }, { suit: 'H', rank: '4' }, { suit: 'H', rank: '5' }, { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' }, { suit: 'H', rank: 'T' } ],
        [ { suit: 'S', rank: '2' }, { suit: 'S', rank: '3' }, { suit: 'S', rank: '4' }, { suit: 'S', rank: '5' }, { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' }, { suit: 'S', rank: 'T' } ],

        // 3,4,5,6,7,8,9,10,J
        [ { suit: 'D', rank: '3' }, { suit: 'D', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' }, { suit: 'D', rank: 'T' }, { suit: 'D', rank: 'J' } ],
        [ { suit: 'C', rank: '3' }, { suit: 'C', rank: '4' }, { suit: 'C', rank: '5' }, { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' }, { suit: 'C', rank: 'T' }, { suit: 'C', rank: 'J' } ],
        [ { suit: 'H', rank: '3' }, { suit: 'H', rank: '4' }, { suit: 'H', rank: '5' }, { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' }, { suit: 'H', rank: 'T' }, { suit: 'H', rank: 'J' } ],
        [ { suit: 'S', rank: '3' }, { suit: 'S', rank: '4' }, { suit: 'S', rank: '5' }, { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' }, { suit: 'S', rank: 'T' }, { suit: 'S', rank: 'J' } ],

        // 4,5,6,7,8,9,10,J,Q
        [ { suit: 'D', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' }, { suit: 'D', rank: 'T' }, { suit: 'D', rank: 'J' }, { suit: 'D', rank: 'Q' } ],
        [ { suit: 'C', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' }, { suit: 'C', rank: 'T' }, { suit: 'C', rank: 'J' }, { suit: 'C', rank: 'Q' } ],
        [ { suit: 'H', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' }, { suit: 'H', rank: 'T' }, { suit: 'H', rank: 'J' }, { suit: 'H', rank: 'Q' } ],
        [ { suit: 'S', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' }, { suit: 'S', rank: 'T' }, { suit: 'S', rank: 'J' }, { suit: 'S', rank: 'Q' } ],

        // 5,6,7,8,9,10,J,Q,K
        [ { suit: 'D', rank: '5' }, { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' }, { suit: 'D', rank: 'T' }, { suit: 'D', rank: 'J' }, { suit: 'D', rank: 'Q' }, { suit: 'D', rank: 'K' } ],
        [ { suit: 'D', rank: '5' }, { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' }, { suit: 'C', rank: 'T' }, { suit: 'C', rank: 'J' }, { suit: 'C', rank: 'Q' }, { suit: 'C', rank: 'K' } ],
        [ { suit: 'D', rank: '5' }, { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' }, { suit: 'H', rank: 'T' }, { suit: 'H', rank: 'J' }, { suit: 'H', rank: 'Q' }, { suit: 'H', rank: 'K' } ],
        [ { suit: 'D', rank: '5' }, { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' }, { suit: 'S', rank: 'T' }, { suit: 'S', rank: 'J' }, { suit: 'S', rank: 'Q' }, { suit: 'S', rank: 'K' } ],

        // 6,7,8,9,10,J,Q,K,A
        [ { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' }, { suit: 'D', rank: 'T' }, { suit: 'D', rank: 'J' }, { suit: 'D', rank: 'Q' }, { suit: 'D', rank: 'K' }, { suit: 'D', rank: 'A' } ],
        [ { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' }, { suit: 'C', rank: 'T' }, { suit: 'C', rank: 'J' }, { suit: 'C', rank: 'Q' }, { suit: 'C', rank: 'K' }, { suit: 'C', rank: 'A' } ],
        [ { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' }, { suit: 'H', rank: 'T' }, { suit: 'H', rank: 'J' }, { suit: 'H', rank: 'Q' }, { suit: 'H', rank: 'K' }, { suit: 'H', rank: 'A' } ],
        [ { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' }, { suit: 'S', rank: 'T' }, { suit: 'S', rank: 'J' }, { suit: 'S', rank: 'Q' }, { suit: 'S', rank: 'K' }, { suit: 'S', rank: 'A' } ],
    ],

    10:[
        // A,2,3,4,5,6,7,8,9,10
        [ { suit: 'D', rank: 'A' }, { suit: 'D', rank: '2' }, { suit: 'D', rank: '3' }, { suit: 'D', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' }, { suit: 'D', rank: 'T' } ],
        [ { suit: 'C', rank: 'A' }, { suit: 'C', rank: '2' }, { suit: 'C', rank: '3' }, { suit: 'C', rank: '4' }, { suit: 'C', rank: '5' }, { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' }, { suit: 'C', rank: 'T' } ],
        [ { suit: 'H', rank: 'A' }, { suit: 'H', rank: '2' }, { suit: 'H', rank: '3' }, { suit: 'H', rank: '4' }, { suit: 'H', rank: '5' }, { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' }, { suit: 'H', rank: 'T' } ],
        [ { suit: 'S', rank: 'A' }, { suit: 'S', rank: '2' }, { suit: 'S', rank: '3' }, { suit: 'S', rank: '4' }, { suit: 'S', rank: '5' }, { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' }, { suit: 'S', rank: 'T' } ],
        
        // 2,3,4,5,6,7,8,9,10,J
        [ { suit: 'D', rank: '2' }, { suit: 'D', rank: '3' }, { suit: 'D', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' }, { suit: 'D', rank: 'T' }, { suit: 'D', rank: 'J' } ],
        [ { suit: 'C', rank: '2' }, { suit: 'C', rank: '3' }, { suit: 'C', rank: '4' }, { suit: 'C', rank: '5' }, { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' }, { suit: 'C', rank: 'T' }, { suit: 'C', rank: 'J' } ],
        [ { suit: 'H', rank: '2' }, { suit: 'H', rank: '3' }, { suit: 'H', rank: '4' }, { suit: 'H', rank: '5' }, { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' }, { suit: 'H', rank: 'T' }, { suit: 'H', rank: 'J' } ],
        [ { suit: 'S', rank: '2' }, { suit: 'S', rank: '3' }, { suit: 'S', rank: '4' }, { suit: 'S', rank: '5' }, { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' }, { suit: 'S', rank: 'T' }, { suit: 'S', rank: 'J' } ],

        // 3,4,5,6,7,8,9,10,J,Q
        [ { suit: 'D', rank: '3' }, { suit: 'D', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' }, { suit: 'D', rank: 'T' }, { suit: 'D', rank: 'J' }, { suit: 'D', rank: 'Q' } ],
        [ { suit: 'C', rank: '3' }, { suit: 'C', rank: '4' }, { suit: 'C', rank: '5' }, { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' }, { suit: 'C', rank: 'T' }, { suit: 'C', rank: 'J' }, { suit: 'C', rank: 'Q' } ],
        [ { suit: 'H', rank: '3' }, { suit: 'H', rank: '4' }, { suit: 'H', rank: '5' }, { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' }, { suit: 'H', rank: 'T' }, { suit: 'H', rank: 'J' }, { suit: 'H', rank: 'Q' } ],
        [ { suit: 'S', rank: '3' }, { suit: 'S', rank: '4' }, { suit: 'S', rank: '5' }, { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' }, { suit: 'S', rank: 'T' }, { suit: 'S', rank: 'J' }, { suit: 'S', rank: 'Q' } ],

        // 4,5,6,7,8,9,10,J,Q,K
        [ { suit: 'D', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' }, { suit: 'D', rank: 'T' }, { suit: 'D', rank: 'J' }, { suit: 'D', rank: 'Q' }, { suit: 'D', rank: 'K' } ],
        [ { suit: 'C', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' }, { suit: 'C', rank: 'T' }, { suit: 'C', rank: 'J' }, { suit: 'C', rank: 'Q' }, { suit: 'C', rank: 'K' } ],
        [ { suit: 'H', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' }, { suit: 'H', rank: 'T' }, { suit: 'H', rank: 'J' }, { suit: 'H', rank: 'Q' }, { suit: 'H', rank: 'K' } ],
        [ { suit: 'S', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' }, { suit: 'S', rank: 'T' }, { suit: 'S', rank: 'J' }, { suit: 'S', rank: 'Q' }, { suit: 'S', rank: 'K' } ],

        // 5,6,7,8,9,10,J,Q,K,A
        [ { suit: 'D', rank: '5' }, { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' }, { suit: 'D', rank: 'T' }, { suit: 'D', rank: 'J' }, { suit: 'D', rank: 'Q' }, { suit: 'D', rank: 'K' }, { suit: 'D', rank: 'A' } ],
        [ { suit: 'D', rank: '5' }, { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' }, { suit: 'C', rank: 'T' }, { suit: 'C', rank: 'J' }, { suit: 'C', rank: 'Q' }, { suit: 'C', rank: 'K' }, { suit: 'C', rank: 'A' } ],
        [ { suit: 'D', rank: '5' }, { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' }, { suit: 'H', rank: 'T' }, { suit: 'H', rank: 'J' }, { suit: 'H', rank: 'Q' }, { suit: 'H', rank: 'K' }, { suit: 'H', rank: 'A' } ],
        [ { suit: 'D', rank: '5' }, { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' }, { suit: 'S', rank: 'T' }, { suit: 'S', rank: 'J' }, { suit: 'S', rank: 'Q' }, { suit: 'S', rank: 'K' }, { suit: 'S', rank: 'A' } ],
    ],

    11:[
        // A,2,3,4,5,6,7,8,9,10,J
        [ { suit: 'D', rank: 'A' }, { suit: 'D', rank: '2' }, { suit: 'D', rank: '3' }, { suit: 'D', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' }, { suit: 'D', rank: 'T' }, { suit: 'D', rank: 'J' } ],
        [ { suit: 'C', rank: 'A' }, { suit: 'C', rank: '2' }, { suit: 'C', rank: '3' }, { suit: 'C', rank: '4' }, { suit: 'C', rank: '5' }, { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' }, { suit: 'C', rank: 'T' }, { suit: 'C', rank: 'J' } ],
        [ { suit: 'H', rank: 'A' }, { suit: 'H', rank: '2' }, { suit: 'H', rank: '3' }, { suit: 'H', rank: '4' }, { suit: 'H', rank: '5' }, { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' }, { suit: 'H', rank: 'T' }, { suit: 'H', rank: 'J' } ],
        [ { suit: 'S', rank: 'A' }, { suit: 'S', rank: '2' }, { suit: 'S', rank: '3' }, { suit: 'S', rank: '4' }, { suit: 'S', rank: '5' }, { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' }, { suit: 'S', rank: 'T' }, { suit: 'S', rank: 'J' } ],
        
        // 2,3,4,5,6,7,8,9,10,J,Q
        [ { suit: 'D', rank: '2' }, { suit: 'D', rank: '3' }, { suit: 'D', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' }, { suit: 'D', rank: 'T' }, { suit: 'D', rank: 'J' }, { suit: 'D', rank: 'Q' } ],
        [ { suit: 'C', rank: '2' }, { suit: 'C', rank: '3' }, { suit: 'C', rank: '4' }, { suit: 'C', rank: '5' }, { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' }, { suit: 'C', rank: 'T' }, { suit: 'C', rank: 'J' }, { suit: 'C', rank: 'Q' } ],
        [ { suit: 'H', rank: '2' }, { suit: 'H', rank: '3' }, { suit: 'H', rank: '4' }, { suit: 'H', rank: '5' }, { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' }, { suit: 'H', rank: 'T' }, { suit: 'H', rank: 'J' }, { suit: 'H', rank: 'Q' } ],
        [ { suit: 'S', rank: '2' }, { suit: 'S', rank: '3' }, { suit: 'S', rank: '4' }, { suit: 'S', rank: '5' }, { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' }, { suit: 'S', rank: 'T' }, { suit: 'S', rank: 'J' }, { suit: 'S', rank: 'Q' } ],

        // 3,4,5,6,7,8,9,10,J,Q,K
        [ { suit: 'D', rank: '3' }, { suit: 'D', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' }, { suit: 'D', rank: 'T' }, { suit: 'D', rank: 'J' }, { suit: 'D', rank: 'Q' }, { suit: 'D', rank: 'K' } ],
        [ { suit: 'C', rank: '3' }, { suit: 'C', rank: '4' }, { suit: 'C', rank: '5' }, { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' }, { suit: 'C', rank: 'T' }, { suit: 'C', rank: 'J' }, { suit: 'C', rank: 'Q' }, { suit: 'C', rank: 'K' } ],
        [ { suit: 'H', rank: '3' }, { suit: 'H', rank: '4' }, { suit: 'H', rank: '5' }, { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' }, { suit: 'H', rank: 'T' }, { suit: 'H', rank: 'J' }, { suit: 'H', rank: 'Q' }, { suit: 'H', rank: 'K' } ],
        [ { suit: 'S', rank: '3' }, { suit: 'S', rank: '4' }, { suit: 'S', rank: '5' }, { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' }, { suit: 'S', rank: 'T' }, { suit: 'S', rank: 'J' }, { suit: 'S', rank: 'Q' }, { suit: 'S', rank: 'K' } ],

        // 4,5,6,7,8,9,10,J,Q,K,A
        [ { suit: 'D', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' }, { suit: 'D', rank: 'T' }, { suit: 'D', rank: 'J' }, { suit: 'D', rank: 'Q' }, { suit: 'D', rank: 'K' }, { suit: 'D', rank: 'A' } ],
        [ { suit: 'C', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' }, { suit: 'C', rank: 'T' }, { suit: 'C', rank: 'J' }, { suit: 'C', rank: 'Q' }, { suit: 'C', rank: 'K' }, { suit: 'C', rank: 'A' } ],
        [ { suit: 'H', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' }, { suit: 'H', rank: 'T' }, { suit: 'H', rank: 'J' }, { suit: 'H', rank: 'Q' }, { suit: 'H', rank: 'K' }, { suit: 'H', rank: 'A' } ],
        [ { suit: 'S', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' }, { suit: 'S', rank: 'T' }, { suit: 'S', rank: 'J' }, { suit: 'S', rank: 'Q' }, { suit: 'S', rank: 'K' }, { suit: 'S', rank: 'A' } ],
    ],

    12:[
        // A,2,3,4,5,6,7,8,9,10,J,Q
        [ { suit: 'D', rank: 'A' }, { suit: 'D', rank: '2' }, { suit: 'D', rank: '3' }, { suit: 'D', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' }, { suit: 'D', rank: 'T' }, { suit: 'D', rank: 'J' }, { suit: 'D', rank: 'Q' } ],
        [ { suit: 'C', rank: 'A' }, { suit: 'C', rank: '2' }, { suit: 'C', rank: '3' }, { suit: 'C', rank: '4' }, { suit: 'C', rank: '5' }, { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' }, { suit: 'C', rank: 'T' }, { suit: 'C', rank: 'J' }, { suit: 'C', rank: 'Q' } ],
        [ { suit: 'H', rank: 'A' }, { suit: 'H', rank: '2' }, { suit: 'H', rank: '3' }, { suit: 'H', rank: '4' }, { suit: 'H', rank: '5' }, { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' }, { suit: 'H', rank: 'T' }, { suit: 'H', rank: 'J' }, { suit: 'H', rank: 'Q' } ],
        [ { suit: 'S', rank: 'A' }, { suit: 'S', rank: '2' }, { suit: 'S', rank: '3' }, { suit: 'S', rank: '4' }, { suit: 'S', rank: '5' }, { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' }, { suit: 'S', rank: 'T' }, { suit: 'S', rank: 'J' }, { suit: 'S', rank: 'Q' } ],
        
        // 2,3,4,5,6,7,8,9,10,J,Q,K
        [ { suit: 'D', rank: '2' }, { suit: 'D', rank: '3' }, { suit: 'D', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' }, { suit: 'D', rank: 'T' }, { suit: 'D', rank: 'J' }, { suit: 'D', rank: 'Q' }, { suit: 'D', rank: 'K' } ],
        [ { suit: 'C', rank: '2' }, { suit: 'C', rank: '3' }, { suit: 'C', rank: '4' }, { suit: 'C', rank: '5' }, { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' }, { suit: 'C', rank: 'T' }, { suit: 'C', rank: 'J' }, { suit: 'C', rank: 'Q' }, { suit: 'C', rank: 'K' } ],
        [ { suit: 'H', rank: '2' }, { suit: 'H', rank: '3' }, { suit: 'H', rank: '4' }, { suit: 'H', rank: '5' }, { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' }, { suit: 'H', rank: 'T' }, { suit: 'H', rank: 'J' }, { suit: 'H', rank: 'Q' }, { suit: 'H', rank: 'K' } ],
        [ { suit: 'S', rank: '2' }, { suit: 'S', rank: '3' }, { suit: 'S', rank: '4' }, { suit: 'S', rank: '5' }, { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' }, { suit: 'S', rank: 'T' }, { suit: 'S', rank: 'J' }, { suit: 'S', rank: 'Q' }, { suit: 'S', rank: 'K' } ],

        // 3,4,5,6,7,8,9,10,J,Q,K,A
        [ { suit: 'D', rank: '3' }, { suit: 'D', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' }, { suit: 'D', rank: 'T' }, { suit: 'D', rank: 'J' }, { suit: 'D', rank: 'Q' }, { suit: 'D', rank: 'K' }, { suit: 'D', rank: 'A' } ],
        [ { suit: 'C', rank: '3' }, { suit: 'C', rank: '4' }, { suit: 'C', rank: '5' }, { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' }, { suit: 'C', rank: 'T' }, { suit: 'C', rank: 'J' }, { suit: 'C', rank: 'Q' }, { suit: 'C', rank: 'K' }, { suit: 'C', rank: 'A' } ],
        [ { suit: 'H', rank: '3' }, { suit: 'H', rank: '4' }, { suit: 'H', rank: '5' }, { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' }, { suit: 'H', rank: 'T' }, { suit: 'H', rank: 'J' }, { suit: 'H', rank: 'Q' }, { suit: 'H', rank: 'K' }, { suit: 'H', rank: 'A' } ],
        [ { suit: 'S', rank: '3' }, { suit: 'S', rank: '4' }, { suit: 'S', rank: '5' }, { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' }, { suit: 'S', rank: 'T' }, { suit: 'S', rank: 'J' }, { suit: 'S', rank: 'Q' }, { suit: 'S', rank: 'K' }, { suit: 'S', rank: 'A' } ],
    ],

    13:[
        // 2,3,4,5,6,7,8,9,10,J,Q,K,A
        [ { suit: 'D', rank: '2' }, { suit: 'D', rank: '3' }, { suit: 'D', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' }, { suit: 'D', rank: 'T' }, { suit: 'D', rank: 'J' }, { suit: 'D', rank: 'Q' }, { suit: 'D', rank: 'K' }, { suit: 'D', rank: 'A' } ],
        [ { suit: 'C', rank: '2' }, { suit: 'C', rank: '3' }, { suit: 'C', rank: '4' }, { suit: 'C', rank: '5' }, { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' }, { suit: 'C', rank: 'T' }, { suit: 'C', rank: 'J' }, { suit: 'C', rank: 'Q' }, { suit: 'C', rank: 'K' }, { suit: 'D', rank: 'A' } ],
        [ { suit: 'H', rank: '2' }, { suit: 'H', rank: '3' }, { suit: 'H', rank: '4' }, { suit: 'H', rank: '5' }, { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' }, { suit: 'H', rank: 'T' }, { suit: 'H', rank: 'J' }, { suit: 'H', rank: 'Q' }, { suit: 'H', rank: 'K' }, { suit: 'D', rank: 'A' } ],
        [ { suit: 'S', rank: '2' }, { suit: 'S', rank: '3' }, { suit: 'S', rank: '4' }, { suit: 'S', rank: '5' }, { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' }, { suit: 'S', rank: 'T' }, { suit: 'S', rank: 'J' }, { suit: 'S', rank: 'Q' }, { suit: 'S', rank: 'K' }, { suit: 'D', rank: 'A' } ],
    ],
}