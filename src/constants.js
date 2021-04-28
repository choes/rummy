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
    3:{
        'DCHA': [ { suit: 'D', rank: 'A' }, { suit: 'C', rank: 'A' }, { suit: 'H', rank: 'A' } ],
        'DCSA': [ { suit: 'D', rank: 'A' }, { suit: 'C', rank: 'A' }, { suit: 'S', rank: 'A' } ],
        'DHSA': [ { suit: 'D', rank: 'A' }, { suit: 'H', rank: 'A' }, { suit: 'S', rank: 'A' } ],
        'CHSA': [ { suit: 'C', rank: 'A' }, { suit: 'H', rank: 'A' }, { suit: 'S', rank: 'A' } ],

        'DCH2': [ { suit: 'D', rank: '2' }, { suit: 'C', rank: '2' }, { suit: 'H', rank: '2' } ],
        'DCS2': [ { suit: 'D', rank: '2' }, { suit: 'C', rank: '2' }, { suit: 'S', rank: '2' } ],
        'DHS2': [ { suit: 'D', rank: '2' }, { suit: 'H', rank: '2' }, { suit: 'S', rank: '2' } ],
        'CHS2': [ { suit: 'C', rank: '2' }, { suit: 'H', rank: '2' }, { suit: 'S', rank: '2' } ],

        'DCH3': [ { suit: 'D', rank: '3' }, { suit: 'C', rank: '3' }, { suit: 'H', rank: '3' } ],
        'DCS3': [ { suit: 'D', rank: '3' }, { suit: 'C', rank: '3' }, { suit: 'S', rank: '3' } ],
        'DHS3': [ { suit: 'D', rank: '3' }, { suit: 'H', rank: '3' }, { suit: 'S', rank: '3' } ],
        'CHS3': [ { suit: 'C', rank: '3' }, { suit: 'H', rank: '3' }, { suit: 'S', rank: '3' } ],

        'DCH4': [ { suit: 'D', rank: '4' }, { suit: 'C', rank: '4' }, { suit: 'H', rank: '4' } ],
        'DCS4': [ { suit: 'D', rank: '4' }, { suit: 'C', rank: '4' }, { suit: 'S', rank: '4' } ],
        'DHS4': [ { suit: 'D', rank: '4' }, { suit: 'H', rank: '4' }, { suit: 'S', rank: '4' } ],
        'CHS4': [ { suit: 'C', rank: '4' }, { suit: 'H', rank: '4' }, { suit: 'S', rank: '4' } ],

        'DCH5': [ { suit: 'D', rank: '5' }, { suit: 'C', rank: '5' }, { suit: 'H', rank: '5' } ],
        'DCS5': [ { suit: 'D', rank: '5' }, { suit: 'C', rank: '5' }, { suit: 'S', rank: '5' } ],
        'DHS5': [ { suit: 'D', rank: '5' }, { suit: 'H', rank: '5' }, { suit: 'S', rank: '5' } ],
        'CHS5': [ { suit: 'C', rank: '5' }, { suit: 'H', rank: '5' }, { suit: 'S', rank: '5' } ],

        'DCH6': [ { suit: 'D', rank: '6' }, { suit: 'C', rank: '6' }, { suit: 'H', rank: '6' } ],
        'DCS6': [ { suit: 'D', rank: '6' }, { suit: 'C', rank: '6' }, { suit: 'S', rank: '6' } ],
        'DHS6': [ { suit: 'D', rank: '6' }, { suit: 'H', rank: '6' }, { suit: 'S', rank: '6' } ],
        'CHS6': [ { suit: 'C', rank: '6' }, { suit: 'H', rank: '6' }, { suit: 'S', rank: '6' } ],

        'DCH7': [ { suit: 'D', rank: '7' }, { suit: 'C', rank: '7' }, { suit: 'H', rank: '7' } ],
        'DCS7': [ { suit: 'D', rank: '7' }, { suit: 'C', rank: '7' }, { suit: 'S', rank: '7' } ],
        'DHS7': [ { suit: 'D', rank: '7' }, { suit: 'H', rank: '7' }, { suit: 'S', rank: '7' } ],
        'CHS7': [ { suit: 'C', rank: '7' }, { suit: 'H', rank: '7' }, { suit: 'S', rank: '7' } ],

        'DCH8': [ { suit: 'D', rank: '8' }, { suit: 'C', rank: '8' }, { suit: 'H', rank: '8' } ],
        'DCS8': [ { suit: 'D', rank: '8' }, { suit: 'C', rank: '8' }, { suit: 'S', rank: '8' } ],
        'DHS8': [ { suit: 'D', rank: '8' }, { suit: 'H', rank: '8' }, { suit: 'S', rank: '8' } ],
        'CHS8': [ { suit: 'C', rank: '8' }, { suit: 'H', rank: '8' }, { suit: 'S', rank: '8' } ],

        'DCH9': [ { suit: 'D', rank: '9' }, { suit: 'C', rank: '9' }, { suit: 'H', rank: '9' } ],
        'DCS9': [ { suit: 'D', rank: '9' }, { suit: 'C', rank: '9' }, { suit: 'S', rank: '9' } ],
        'DHS9': [ { suit: 'D', rank: '9' }, { suit: 'H', rank: '9' }, { suit: 'S', rank: '9' } ],
        'CHS9': [ { suit: 'C', rank: '9' }, { suit: 'H', rank: '9' }, { suit: 'S', rank: '9' } ],

        'DCHT': [ { suit: 'D', rank: 'T' }, { suit: 'C', rank: 'T' }, { suit: 'H', rank: 'T' } ],
        'DCST': [ { suit: 'D', rank: 'T' }, { suit: 'C', rank: 'T' }, { suit: 'S', rank: 'T' } ],
        'DHST': [ { suit: 'D', rank: 'T' }, { suit: 'H', rank: 'T' }, { suit: 'S', rank: 'T' } ],
        'CHST': [ { suit: 'C', rank: 'T' }, { suit: 'H', rank: 'T' }, { suit: 'S', rank: 'T' } ],

        'DCHJ': [ { suit: 'D', rank: 'J' }, { suit: 'C', rank: 'J' }, { suit: 'H', rank: 'J' } ],
        'DCSJ': [ { suit: 'D', rank: 'J' }, { suit: 'C', rank: 'J' }, { suit: 'S', rank: 'J' } ],
        'DHSJ': [ { suit: 'D', rank: 'J' }, { suit: 'H', rank: 'J' }, { suit: 'S', rank: 'J' } ],
        'CHSJ': [ { suit: 'C', rank: 'J' }, { suit: 'H', rank: 'J' }, { suit: 'S', rank: 'J' } ],

        'DCHQ': [ { suit: 'D', rank: 'Q' }, { suit: 'C', rank: 'Q' }, { suit: 'H', rank: 'Q' } ],
        'DCSQ': [ { suit: 'D', rank: 'Q' }, { suit: 'C', rank: 'Q' }, { suit: 'S', rank: 'Q' } ],
        'DHSQ': [ { suit: 'D', rank: 'Q' }, { suit: 'H', rank: 'Q' }, { suit: 'S', rank: 'Q' } ],
        'CHSQ': [ { suit: 'C', rank: 'Q' }, { suit: 'H', rank: 'Q' }, { suit: 'S', rank: 'Q' } ],

        'DCHK': [ { suit: 'D', rank: 'K' }, { suit: 'C', rank: 'K' }, { suit: 'H', rank: 'K' } ],
        'DCSK': [ { suit: 'D', rank: 'K' }, { suit: 'C', rank: 'K' }, { suit: 'S', rank: 'K' } ],
        'DHSK': [ { suit: 'D', rank: 'K' }, { suit: 'H', rank: 'K' }, { suit: 'S', rank: 'K' } ],
        'CHSK': [ { suit: 'C', rank: 'K' }, { suit: 'H', rank: 'K' }, { suit: 'S', rank: 'K' } ],
    },

    4:{
        'DCHSA': [ { suit: 'D', rank: 'A' }, { suit: 'C', rank: 'A' }, { suit: 'H', rank: 'A' }, { suit: 'S', rank: 'A' } ], 
        'DCHS2': [ { suit: 'D', rank: '2' }, { suit: 'C', rank: '2' }, { suit: 'H', rank: '2' }, { suit: 'S', rank: '2' } ], 
        'DCHS3': [ { suit: 'D', rank: '3' }, { suit: 'C', rank: '3' }, { suit: 'H', rank: '3' }, { suit: 'S', rank: '3' } ], 
        'DCHS4': [ { suit: 'D', rank: '4' }, { suit: 'C', rank: '4' }, { suit: 'H', rank: '4' }, { suit: 'S', rank: '4' } ], 
        'DCHS5': [ { suit: 'D', rank: '5' }, { suit: 'C', rank: '5' }, { suit: 'H', rank: '5' }, { suit: 'S', rank: '5' } ], 
        'DCHS6': [ { suit: 'D', rank: '6' }, { suit: 'C', rank: '6' }, { suit: 'H', rank: '6' }, { suit: 'S', rank: '6' } ], 
        'DCHS7': [ { suit: 'D', rank: '7' }, { suit: 'C', rank: '7' }, { suit: 'H', rank: '7' }, { suit: 'S', rank: '7' } ], 
        'DCHS8': [ { suit: 'D', rank: '8' }, { suit: 'C', rank: '8' }, { suit: 'H', rank: '8' }, { suit: 'S', rank: '8' } ], 
        'DCHS9': [ { suit: 'D', rank: '9' }, { suit: 'C', rank: '9' }, { suit: 'H', rank: '9' }, { suit: 'S', rank: '9' } ], 
        'DCHST': [ { suit: 'D', rank: 'T' }, { suit: 'C', rank: 'T' }, { suit: 'H', rank: 'T' }, { suit: 'S', rank: 'T' } ], 
        'DCHSJ': [ { suit: 'D', rank: 'J' }, { suit: 'C', rank: 'J' }, { suit: 'H', rank: 'J' }, { suit: 'S', rank: 'J' } ], 
        'DCHSQ': [ { suit: 'D', rank: 'Q' }, { suit: 'C', rank: 'Q' }, { suit: 'H', rank: 'Q' }, { suit: 'S', rank: 'Q' } ], 
        'DCHSK': [ { suit: 'D', rank: 'K' }, { suit: 'C', rank: 'K' }, { suit: 'H', rank: 'K' }, { suit: 'S', rank: 'K' } ], 
    }
};

export const validSeqs = {
    3:{
        "DA23": [ { suit: 'D', rank: 'A' }, { suit: 'D', rank: '2' }, { suit: 'D', rank: '3' } ],
        "CA23": [ { suit: 'C', rank: 'A' }, { suit: 'C', rank: '2' }, { suit: 'C', rank: '3' } ],
        "HA23": [ { suit: 'H', rank: 'A' }, { suit: 'H', rank: '2' }, { suit: 'H', rank: '3' } ],
        "SA23": [ { suit: 'S', rank: 'A' }, { suit: 'S', rank: '2' }, { suit: 'S', rank: '3' } ],
        
        "D234": [ { suit: 'D', rank: '2' }, { suit: 'D', rank: '3' }, { suit: 'D', rank: '4' } ],
        "C234": [ { suit: 'C', rank: '2' }, { suit: 'C', rank: '3' }, { suit: 'C', rank: '4' } ],
        "H234": [ { suit: 'H', rank: '2' }, { suit: 'H', rank: '3' }, { suit: 'H', rank: '4' } ],
        "S234": [ { suit: 'S', rank: '2' }, { suit: 'S', rank: '3' }, { suit: 'S', rank: '4' } ],

        "D345": [ { suit: 'D', rank: '3' }, { suit: 'D', rank: '4' }, { suit: 'D', rank: '5' } ],
        "C345": [ { suit: 'C', rank: '3' }, { suit: 'C', rank: '4' }, { suit: 'C', rank: '5' } ],
        "H345": [ { suit: 'H', rank: '3' }, { suit: 'H', rank: '4' }, { suit: 'H', rank: '5' } ],
        "S345": [ { suit: 'S', rank: '3' }, { suit: 'S', rank: '4' }, { suit: 'S', rank: '5' } ],

        "D456": [ { suit: 'D', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'D', rank: '6' } ],
        "C456": [ { suit: 'C', rank: '4' }, { suit: 'C', rank: '5' }, { suit: 'C', rank: '6' } ],
        "H456": [ { suit: 'H', rank: '4' }, { suit: 'H', rank: '5' }, { suit: 'H', rank: '6' } ],
        "S456": [ { suit: 'S', rank: '4' }, { suit: 'S', rank: '5' }, { suit: 'S', rank: '6' } ],

        "D567": [ { suit: 'D', rank: '5' }, { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' } ],
        "C567": [ { suit: 'C', rank: '5' }, { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' } ],
        "H567": [ { suit: 'H', rank: '5' }, { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' } ],
        "S567": [ { suit: 'S', rank: '5' }, { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' } ],

        "D678": [ { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' } ],
        "C678": [ { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' } ],
        "H678": [ { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' } ],
        "S678": [ { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' } ],

        "D789": [ { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' } ],
        "C789": [ { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' } ],
        "H789": [ { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' } ],
        "S789": [ { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' } ],

        "D89T": [ { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' }, { suit: 'D', rank: 'T' } ],
        "C89T": [ { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' }, { suit: 'C', rank: 'T' } ],
        "H89T": [ { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' }, { suit: 'H', rank: 'T' } ],
        "S89T": [ { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' }, { suit: 'S', rank: 'T' } ],

        "D9TJ": [ { suit: 'D', rank: '9' }, { suit: 'D', rank: 'T' }, { suit: 'D', rank: 'J' } ],
        "C9TJ": [ { suit: 'C', rank: '9' }, { suit: 'C', rank: 'T' }, { suit: 'C', rank: 'J' } ],
        "H9TJ": [ { suit: 'H', rank: '9' }, { suit: 'H', rank: 'T' }, { suit: 'H', rank: 'J' } ],
        "S9TJ": [ { suit: 'S', rank: '9' }, { suit: 'S', rank: 'T' }, { suit: 'S', rank: 'J' } ],

        "DTJQ": [ { suit: 'D', rank: 'T' }, { suit: 'D', rank: 'J' }, { suit: 'D', rank: 'Q' } ],
        "CTJQ": [ { suit: 'C', rank: 'T' }, { suit: 'C', rank: 'J' }, { suit: 'C', rank: 'Q' } ],
        "HTJQ": [ { suit: 'H', rank: 'T' }, { suit: 'H', rank: 'J' }, { suit: 'H', rank: 'Q' } ],
        "STJQ": [ { suit: 'S', rank: 'T' }, { suit: 'S', rank: 'J' }, { suit: 'S', rank: 'Q' } ],

        "DJQK": [ { suit: 'D', rank: 'J' }, { suit: 'D', rank: 'Q' }, { suit: 'D', rank: 'K' } ],
        "CJQK": [ { suit: 'C', rank: 'J' }, { suit: 'C', rank: 'Q' }, { suit: 'C', rank: 'K' } ],
        "HJQK": [ { suit: 'H', rank: 'J' }, { suit: 'H', rank: 'Q' }, { suit: 'H', rank: 'K' } ],
        "SJQK": [ { suit: 'S', rank: 'J' }, { suit: 'S', rank: 'Q' }, { suit: 'S', rank: 'K' } ],

        "DQKA": [ { suit: 'D', rank: 'Q' }, { suit: 'D', rank: 'K' }, { suit: 'D', rank: 'A' } ],
        "CQKA": [ { suit: 'C', rank: 'Q' }, { suit: 'C', rank: 'K' }, { suit: 'C', rank: 'A' } ],
        "HQKA": [ { suit: 'H', rank: 'Q' }, { suit: 'H', rank: 'K' }, { suit: 'H', rank: 'A' } ],
        "SQKA": [ { suit: 'S', rank: 'Q' }, { suit: 'S', rank: 'K' }, { suit: 'S', rank: 'A' } ],
    },

    4:{
        "DA234": [ { suit: 'D', rank: 'A' }, { suit: 'D', rank: '2' }, { suit: 'D', rank: '3' }, { suit: 'D', rank: '4' } ],
        "CA234": [ { suit: 'C', rank: 'A' }, { suit: 'C', rank: '2' }, { suit: 'C', rank: '3' }, { suit: 'C', rank: '4' } ],
        "HA234": [ { suit: 'H', rank: 'A' }, { suit: 'H', rank: '2' }, { suit: 'H', rank: '3' }, { suit: 'H', rank: '4' } ],
        "SA234": [ { suit: 'S', rank: 'A' }, { suit: 'S', rank: '2' }, { suit: 'S', rank: '3' }, { suit: 'S', rank: '4' } ],
        
        "D2345": [ { suit: 'D', rank: '2' }, { suit: 'D', rank: '3' }, { suit: 'D', rank: '4' }, { suit: 'D', rank: '5' } ],
        "C2345": [ { suit: 'C', rank: '2' }, { suit: 'C', rank: '3' }, { suit: 'C', rank: '4' }, { suit: 'C', rank: '5' } ],
        "H2345": [ { suit: 'H', rank: '2' }, { suit: 'H', rank: '3' }, { suit: 'H', rank: '4' }, { suit: 'H', rank: '5' } ],
        "S2345": [ { suit: 'S', rank: '2' }, { suit: 'S', rank: '3' }, { suit: 'S', rank: '4' }, { suit: 'S', rank: '5' } ],

        "D3456": [ { suit: 'D', rank: '3' }, { suit: 'D', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'D', rank: '6' } ],
        "C3456": [ { suit: 'C', rank: '3' }, { suit: 'C', rank: '4' }, { suit: 'C', rank: '5' }, { suit: 'C', rank: '6' } ],
        "H3456": [ { suit: 'H', rank: '3' }, { suit: 'H', rank: '4' }, { suit: 'H', rank: '5' }, { suit: 'H', rank: '6' } ],
        "S3456": [ { suit: 'S', rank: '3' }, { suit: 'S', rank: '4' }, { suit: 'S', rank: '5' }, { suit: 'S', rank: '6' } ],

        "D4567": [ { suit: 'D', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' } ],
        "C4567": [ { suit: 'C', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' } ],
        "H4567": [ { suit: 'H', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' } ],
        "S4567": [ { suit: 'S', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' } ],

        "D5678": [ { suit: 'D', rank: '5' }, { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' } ],
        "C5678": [ { suit: 'D', rank: '5' }, { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' } ],
        "H5678": [ { suit: 'D', rank: '5' }, { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' } ],
        "S5678": [ { suit: 'D', rank: '5' }, { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' } ],

        "D6789": [ { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' } ],
        "C6789": [ { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' } ],
        "H6789": [ { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' } ],
        "S6789": [ { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' } ],

        "D789T": [ { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' }, { suit: 'D', rank: 'T' } ],
        "C789T": [ { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' }, { suit: 'C', rank: 'T' } ],
        "H789T": [ { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' }, { suit: 'H', rank: 'T' } ],
        "S789T": [ { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' }, { suit: 'S', rank: 'T' } ],

        "D89TJ": [ { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' }, { suit: 'D', rank: 'T' }, { suit: 'D', rank: 'J' } ],
        "C89TJ": [ { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' }, { suit: 'C', rank: 'T' }, { suit: 'C', rank: 'J' } ],
        "H89TJ": [ { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' }, { suit: 'H', rank: 'T' }, { suit: 'H', rank: 'J' } ],
        "S89TJ": [ { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' }, { suit: 'S', rank: 'T' }, { suit: 'S', rank: 'J' } ],

        "D9TJQ": [ { suit: 'D', rank: '9' }, { suit: 'D', rank: 'T' }, { suit: 'D', rank: 'J' }, { suit: 'D', rank: 'Q' }  ],
        "C9TJQ": [ { suit: 'C', rank: '9' }, { suit: 'C', rank: 'T' }, { suit: 'C', rank: 'J' }, { suit: 'C', rank: 'Q' }  ],
        "H9TJQ": [ { suit: 'H', rank: '9' }, { suit: 'H', rank: 'T' }, { suit: 'H', rank: 'J' }, { suit: 'H', rank: 'Q' }  ],
        "S9TJQ": [ { suit: 'S', rank: '9' }, { suit: 'S', rank: 'T' }, { suit: 'S', rank: 'J' }, { suit: 'S', rank: 'Q' }  ],

        "DTJQK": [ { suit: 'D', rank: 'T' }, { suit: 'D', rank: 'J' }, { suit: 'D', rank: 'Q' }, { suit: 'D', rank: 'K' } ],
        "CTJQK": [ { suit: 'C', rank: 'T' }, { suit: 'C', rank: 'J' }, { suit: 'C', rank: 'Q' }, { suit: 'C', rank: 'K' } ],
        "HTJQK": [ { suit: 'H', rank: 'T' }, { suit: 'H', rank: 'J' }, { suit: 'H', rank: 'Q' }, { suit: 'H', rank: 'K' } ],
        "STJQK": [ { suit: 'S', rank: 'T' }, { suit: 'S', rank: 'J' }, { suit: 'S', rank: 'Q' }, { suit: 'S', rank: 'K' } ],

        "DJQKA": [ { suit: 'D', rank: 'J' }, { suit: 'D', rank: 'Q' }, { suit: 'D', rank: 'K' }, { suit: 'D', rank: 'A' } ],
        "CJQKA": [ { suit: 'C', rank: 'J' }, { suit: 'C', rank: 'Q' }, { suit: 'C', rank: 'K' }, { suit: 'C', rank: 'A' } ],
        "HJQKA": [ { suit: 'H', rank: 'J' }, { suit: 'H', rank: 'Q' }, { suit: 'H', rank: 'K' }, { suit: 'H', rank: 'A' } ],
        "SJQKA": [ { suit: 'S', rank: 'J' }, { suit: 'S', rank: 'Q' }, { suit: 'S', rank: 'K' }, { suit: 'S', rank: 'A' } ],
    },

    5:{
        "DA2345": [ { suit: 'D', rank: 'A' }, { suit: 'D', rank: '2' }, { suit: 'D', rank: '3' }, { suit: 'D', rank: '4' }, { suit: 'D', rank: '5' } ],
        "CA2345": [ { suit: 'C', rank: 'A' }, { suit: 'C', rank: '2' }, { suit: 'C', rank: '3' }, { suit: 'C', rank: '4' }, { suit: 'C', rank: '5' } ],
        "HA2345": [ { suit: 'H', rank: 'A' }, { suit: 'H', rank: '2' }, { suit: 'H', rank: '3' }, { suit: 'H', rank: '4' }, { suit: 'H', rank: '5' } ],
        "SA2345": [ { suit: 'S', rank: 'A' }, { suit: 'S', rank: '2' }, { suit: 'S', rank: '3' }, { suit: 'S', rank: '4' }, { suit: 'S', rank: '5' } ],
        
        "D23456": [ { suit: 'D', rank: '2' }, { suit: 'D', rank: '3' }, { suit: 'D', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'D', rank: '6' } ],
        "C23456": [ { suit: 'C', rank: '2' }, { suit: 'C', rank: '3' }, { suit: 'C', rank: '4' }, { suit: 'C', rank: '5' }, { suit: 'C', rank: '6' } ],
        "H23456": [ { suit: 'H', rank: '2' }, { suit: 'H', rank: '3' }, { suit: 'H', rank: '4' }, { suit: 'H', rank: '5' }, { suit: 'H', rank: '6' } ],
        "S23456": [ { suit: 'S', rank: '2' }, { suit: 'S', rank: '3' }, { suit: 'S', rank: '4' }, { suit: 'S', rank: '5' }, { suit: 'S', rank: '6' } ],

        "D34567": [ { suit: 'D', rank: '3' }, { suit: 'D', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' } ],
        "C34567": [ { suit: 'C', rank: '3' }, { suit: 'C', rank: '4' }, { suit: 'C', rank: '5' }, { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' } ],
        "H34567": [ { suit: 'H', rank: '3' }, { suit: 'H', rank: '4' }, { suit: 'H', rank: '5' }, { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' } ],
        "S34567": [ { suit: 'S', rank: '3' }, { suit: 'S', rank: '4' }, { suit: 'S', rank: '5' }, { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' } ],

        "D45678": [ { suit: 'D', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' } ],
        "C45678": [ { suit: 'C', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' } ],
        "H45678": [ { suit: 'H', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' } ],
        "S45678": [ { suit: 'S', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' } ],

        "D56789": [ { suit: 'D', rank: '5' }, { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' } ],
        "C56789": [ { suit: 'D', rank: '5' }, { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' } ],
        "H56789": [ { suit: 'D', rank: '5' }, { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' } ],
        "S56789": [ { suit: 'D', rank: '5' }, { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' } ],

        "D6789T": [ { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' }, { suit: 'D', rank: 'T' } ],
        "C6789T": [ { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' }, { suit: 'C', rank: 'T' } ],
        "H6789T": [ { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' }, { suit: 'H', rank: 'T' } ],
        "S6789T": [ { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' }, { suit: 'S', rank: 'T' } ],

        "D789TJ": [ { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' }, { suit: 'D', rank: 'T' }, { suit: 'D', rank: 'J' } ],
        "C789TJ": [ { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' }, { suit: 'C', rank: 'T' }, { suit: 'C', rank: 'J' } ],
        "H789TJ": [ { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' }, { suit: 'H', rank: 'T' }, { suit: 'H', rank: 'J' } ],
        "S789TJ": [ { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' }, { suit: 'S', rank: 'T' }, { suit: 'S', rank: 'J' } ],

        "D89TJQ": [ { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' }, { suit: 'D', rank: 'T' }, { suit: 'D', rank: 'J' }, { suit: 'D', rank: 'Q' } ],
        "C89TJQ": [ { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' }, { suit: 'C', rank: 'T' }, { suit: 'C', rank: 'J' }, { suit: 'C', rank: 'Q' } ],
        "H89TJQ": [ { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' }, { suit: 'H', rank: 'T' }, { suit: 'H', rank: 'J' }, { suit: 'H', rank: 'Q' } ],
        "S89TJQ": [ { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' }, { suit: 'S', rank: 'T' }, { suit: 'S', rank: 'J' }, { suit: 'S', rank: 'Q' } ],

        "D9TJQK": [ { suit: 'D', rank: '9' }, { suit: 'D', rank: 'T' }, { suit: 'D', rank: 'J' }, { suit: 'D', rank: 'Q' }, { suit: 'D', rank: 'K' } ],
        "C9TJQK": [ { suit: 'C', rank: '9' }, { suit: 'C', rank: 'T' }, { suit: 'C', rank: 'J' }, { suit: 'C', rank: 'Q' }, { suit: 'C', rank: 'K' } ],
        "H9TJQK": [ { suit: 'H', rank: '9' }, { suit: 'H', rank: 'T' }, { suit: 'H', rank: 'J' }, { suit: 'H', rank: 'Q' }, { suit: 'H', rank: 'K' } ],
        "S9TJQK": [ { suit: 'S', rank: '9' }, { suit: 'S', rank: 'T' }, { suit: 'S', rank: 'J' }, { suit: 'S', rank: 'Q' }, { suit: 'S', rank: 'K' } ],

        "DTJQKA": [ { suit: 'D', rank: 'T' }, { suit: 'D', rank: 'J' }, { suit: 'D', rank: 'Q' }, { suit: 'D', rank: 'K' }, { suit: 'D', rank: 'A' } ],
        "CTJQKA": [ { suit: 'C', rank: 'T' }, { suit: 'C', rank: 'J' }, { suit: 'C', rank: 'Q' }, { suit: 'C', rank: 'K' }, { suit: 'C', rank: 'A' } ],
        "HTJQKA": [ { suit: 'H', rank: 'T' }, { suit: 'H', rank: 'J' }, { suit: 'H', rank: 'Q' }, { suit: 'H', rank: 'K' }, { suit: 'H', rank: 'A' } ],
        "STJQKA": [ { suit: 'S', rank: 'T' }, { suit: 'S', rank: 'J' }, { suit: 'S', rank: 'Q' }, { suit: 'S', rank: 'K' }, { suit: 'S', rank: 'A' } ],
    },

    6:{
        "DA23456": [ { suit: 'D', rank: 'A' }, { suit: 'D', rank: '2' }, { suit: 'D', rank: '3' }, { suit: 'D', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'D', rank: '6' } ],
        "CA23456": [ { suit: 'C', rank: 'A' }, { suit: 'C', rank: '2' }, { suit: 'C', rank: '3' }, { suit: 'C', rank: '4' }, { suit: 'C', rank: '5' }, { suit: 'C', rank: '6' } ],
        "HA23456": [ { suit: 'H', rank: 'A' }, { suit: 'H', rank: '2' }, { suit: 'H', rank: '3' }, { suit: 'H', rank: '4' }, { suit: 'H', rank: '5' }, { suit: 'H', rank: '6' } ],
        "SA23456": [ { suit: 'S', rank: 'A' }, { suit: 'S', rank: '2' }, { suit: 'S', rank: '3' }, { suit: 'S', rank: '4' }, { suit: 'S', rank: '5' }, { suit: 'S', rank: '6' } ],
        
        "D234567": [ { suit: 'D', rank: '2' }, { suit: 'D', rank: '3' }, { suit: 'D', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' } ],
        "C234567": [ { suit: 'C', rank: '2' }, { suit: 'C', rank: '3' }, { suit: 'C', rank: '4' }, { suit: 'C', rank: '5' }, { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' } ],
        "H234567": [ { suit: 'H', rank: '2' }, { suit: 'H', rank: '3' }, { suit: 'H', rank: '4' }, { suit: 'H', rank: '5' }, { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' } ],
        "S234567": [ { suit: 'S', rank: '2' }, { suit: 'S', rank: '3' }, { suit: 'S', rank: '4' }, { suit: 'S', rank: '5' }, { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' } ],
        
        "D345678": [ { suit: 'D', rank: '3' }, { suit: 'D', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' } ],
        "C345678": [ { suit: 'C', rank: '3' }, { suit: 'C', rank: '4' }, { suit: 'C', rank: '5' }, { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' } ],
        "H345678": [ { suit: 'H', rank: '3' }, { suit: 'H', rank: '4' }, { suit: 'H', rank: '5' }, { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' } ],
        "S345678": [ { suit: 'S', rank: '3' }, { suit: 'S', rank: '4' }, { suit: 'S', rank: '5' }, { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' } ],

        "D456789": [ { suit: 'D', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' } ],
        "C456789": [ { suit: 'C', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' } ],
        "H456789": [ { suit: 'H', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' } ],
        "S456789": [ { suit: 'S', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' } ],

        "56789T":[
            [ { suit: 'D', rank: '5' }, { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' }, { suit: 'D', rank: 'T' } ],
            [ { suit: 'D', rank: '5' }, { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' }, { suit: 'C', rank: 'T' } ],
            [ { suit: 'D', rank: '5' }, { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' }, { suit: 'H', rank: 'T' } ],
            [ { suit: 'D', rank: '5' }, { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' }, { suit: 'S', rank: 'T' } ],
        ],

        "6789TJ":[
            [ { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' }, { suit: 'D', rank: 'T' }, { suit: 'D', rank: 'J' } ],
            [ { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' }, { suit: 'C', rank: 'T' }, { suit: 'C', rank: 'J' } ],
            [ { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' }, { suit: 'H', rank: 'T' }, { suit: 'H', rank: 'J' } ],
            [ { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' }, { suit: 'S', rank: 'T' }, { suit: 'S', rank: 'J' } ],
        ],

        "789TJQ":[
            [ { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' }, { suit: 'D', rank: 'T' }, { suit: 'D', rank: 'J' }, { suit: 'D', rank: 'Q' } ],
            [ { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' }, { suit: 'C', rank: 'T' }, { suit: 'C', rank: 'J' }, { suit: 'C', rank: 'Q' } ],
            [ { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' }, { suit: 'H', rank: 'T' }, { suit: 'H', rank: 'J' }, { suit: 'H', rank: 'Q' } ],
            [ { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' }, { suit: 'S', rank: 'T' }, { suit: 'S', rank: 'J' }, { suit: 'S', rank: 'Q' } ],
        ],

        "89TJQK":[
            [ { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' }, { suit: 'D', rank: 'T' }, { suit: 'D', rank: 'J' }, { suit: 'D', rank: 'Q' }, { suit: 'D', rank: 'K' } ],
            [ { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' }, { suit: 'C', rank: 'T' }, { suit: 'C', rank: 'J' }, { suit: 'C', rank: 'Q' }, { suit: 'D', rank: 'K' } ],
            [ { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' }, { suit: 'H', rank: 'T' }, { suit: 'H', rank: 'J' }, { suit: 'H', rank: 'Q' }, { suit: 'D', rank: 'K' } ],
            [ { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' }, { suit: 'S', rank: 'T' }, { suit: 'S', rank: 'J' }, { suit: 'S', rank: 'Q' }, { suit: 'D', rank: 'K' } ],
        ],

        "9TJQKA":[
            [ { suit: 'D', rank: '9' }, { suit: 'D', rank: 'T' }, { suit: 'D', rank: 'J' }, { suit: 'D', rank: 'Q' }, { suit: 'D', rank: 'K' }, { suit: 'D', rank: 'A' } ],
            [ { suit: 'C', rank: '9' }, { suit: 'C', rank: 'T' }, { suit: 'C', rank: 'J' }, { suit: 'C', rank: 'Q' }, { suit: 'C', rank: 'K' }, { suit: 'C', rank: 'A' } ],
            [ { suit: 'H', rank: '9' }, { suit: 'H', rank: 'T' }, { suit: 'H', rank: 'J' }, { suit: 'H', rank: 'Q' }, { suit: 'H', rank: 'K' }, { suit: 'H', rank: 'A' } ],
            [ { suit: 'S', rank: '9' }, { suit: 'S', rank: 'T' }, { suit: 'S', rank: 'J' }, { suit: 'S', rank: 'Q' }, { suit: 'S', rank: 'K' }, { suit: 'S', rank: 'A' } ],
        ],
    },

    7:{
        "A234567":[
            [ { suit: 'D', rank: 'A' }, { suit: 'D', rank: '2' }, { suit: 'D', rank: '3' }, { suit: 'D', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' } ],
            [ { suit: 'C', rank: 'A' }, { suit: 'C', rank: '2' }, { suit: 'C', rank: '3' }, { suit: 'C', rank: '4' }, { suit: 'C', rank: '5' }, { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' } ],
            [ { suit: 'H', rank: 'A' }, { suit: 'H', rank: '2' }, { suit: 'H', rank: '3' }, { suit: 'H', rank: '4' }, { suit: 'H', rank: '5' }, { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' } ],
            [ { suit: 'S', rank: 'A' }, { suit: 'S', rank: '2' }, { suit: 'S', rank: '3' }, { suit: 'S', rank: '4' }, { suit: 'S', rank: '5' }, { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' } ],
        ],

        "2345678":[
            [ { suit: 'D', rank: '2' }, { suit: 'D', rank: '3' }, { suit: 'D', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' } ],
            [ { suit: 'C', rank: '2' }, { suit: 'C', rank: '3' }, { suit: 'C', rank: '4' }, { suit: 'C', rank: '5' }, { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' } ],
            [ { suit: 'H', rank: '2' }, { suit: 'H', rank: '3' }, { suit: 'H', rank: '4' }, { suit: 'H', rank: '5' }, { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' } ],
            [ { suit: 'S', rank: '2' }, { suit: 'S', rank: '3' }, { suit: 'S', rank: '4' }, { suit: 'S', rank: '5' }, { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' } ],
        ],

        "3456789":[
            [ { suit: 'D', rank: '3' }, { suit: 'D', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' } ],
            [ { suit: 'C', rank: '3' }, { suit: 'C', rank: '4' }, { suit: 'C', rank: '5' }, { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' } ],
            [ { suit: 'H', rank: '3' }, { suit: 'H', rank: '4' }, { suit: 'H', rank: '5' }, { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' } ],
            [ { suit: 'S', rank: '3' }, { suit: 'S', rank: '4' }, { suit: 'S', rank: '5' }, { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' } ],
        ],

        "456789T":[
            [ { suit: 'D', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' }, { suit: 'D', rank: 'T' } ],
            [ { suit: 'C', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' }, { suit: 'C', rank: 'T' } ],
            [ { suit: 'H', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' }, { suit: 'H', rank: 'T' } ],
            [ { suit: 'S', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' }, { suit: 'S', rank: 'T' } ],
        ],

        "56789TJ":[
            [ { suit: 'D', rank: '5' }, { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' }, { suit: 'D', rank: 'T' }, { suit: 'D', rank: 'J' } ],
            [ { suit: 'D', rank: '5' }, { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' }, { suit: 'C', rank: 'T' }, { suit: 'C', rank: 'J' } ],
            [ { suit: 'D', rank: '5' }, { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' }, { suit: 'H', rank: 'T' }, { suit: 'H', rank: 'J' } ],
            [ { suit: 'D', rank: '5' }, { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' }, { suit: 'S', rank: 'T' }, { suit: 'S', rank: 'J' } ],
        ],

        "6789TJQ":[
            [ { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' }, { suit: 'D', rank: 'T' }, { suit: 'D', rank: 'J' }, { suit: 'D', rank: 'Q' } ],
            [ { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' }, { suit: 'C', rank: 'T' }, { suit: 'C', rank: 'J' }, { suit: 'C', rank: 'Q' } ],
            [ { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' }, { suit: 'H', rank: 'T' }, { suit: 'H', rank: 'J' }, { suit: 'H', rank: 'Q' } ],
            [ { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' }, { suit: 'S', rank: 'T' }, { suit: 'S', rank: 'J' }, { suit: 'S', rank: 'Q' } ],
        ],

        "789TJQK":[
            [ { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' }, { suit: 'D', rank: 'T' }, { suit: 'D', rank: 'J' }, { suit: 'D', rank: 'Q' }, { suit: 'D', rank: 'K' } ],
            [ { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' }, { suit: 'C', rank: 'T' }, { suit: 'C', rank: 'J' }, { suit: 'C', rank: 'Q' }, { suit: 'C', rank: 'K' } ],
            [ { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' }, { suit: 'H', rank: 'T' }, { suit: 'H', rank: 'J' }, { suit: 'H', rank: 'Q' }, { suit: 'H', rank: 'K' } ],
            [ { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' }, { suit: 'S', rank: 'T' }, { suit: 'S', rank: 'J' }, { suit: 'S', rank: 'Q' }, { suit: 'S', rank: 'K' } ],
        ],

        "89TJQKA":[
            [ { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' }, { suit: 'D', rank: 'T' }, { suit: 'D', rank: 'J' }, { suit: 'D', rank: 'Q' }, { suit: 'D', rank: 'K' }, { suit: 'D', rank: 'A' } ],
            [ { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' }, { suit: 'C', rank: 'T' }, { suit: 'C', rank: 'J' }, { suit: 'C', rank: 'Q' }, { suit: 'D', rank: 'K' }, { suit: 'C', rank: 'A' } ],
            [ { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' }, { suit: 'H', rank: 'T' }, { suit: 'H', rank: 'J' }, { suit: 'H', rank: 'Q' }, { suit: 'D', rank: 'K' }, { suit: 'H', rank: 'A' } ],
            [ { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' }, { suit: 'S', rank: 'T' }, { suit: 'S', rank: 'J' }, { suit: 'S', rank: 'Q' }, { suit: 'D', rank: 'K' }, { suit: 'S', rank: 'A' } ],
        ],
    },

    8:{
        "A2345678":[
        [ { suit: 'D', rank: 'A' }, { suit: 'D', rank: '2' }, { suit: 'D', rank: '3' }, { suit: 'D', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' } ],
        [ { suit: 'C', rank: 'A' }, { suit: 'C', rank: '2' }, { suit: 'C', rank: '3' }, { suit: 'C', rank: '4' }, { suit: 'C', rank: '5' }, { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' } ],
        [ { suit: 'H', rank: 'A' }, { suit: 'H', rank: '2' }, { suit: 'H', rank: '3' }, { suit: 'H', rank: '4' }, { suit: 'H', rank: '5' }, { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' } ],
        [ { suit: 'S', rank: 'A' }, { suit: 'S', rank: '2' }, { suit: 'S', rank: '3' }, { suit: 'S', rank: '4' }, { suit: 'S', rank: '5' }, { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' } ],
        ],

        "23456789":[
            [ { suit: 'D', rank: '2' }, { suit: 'D', rank: '3' }, { suit: 'D', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' } ],
            [ { suit: 'C', rank: '2' }, { suit: 'C', rank: '3' }, { suit: 'C', rank: '4' }, { suit: 'C', rank: '5' }, { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' } ],
            [ { suit: 'H', rank: '2' }, { suit: 'H', rank: '3' }, { suit: 'H', rank: '4' }, { suit: 'H', rank: '5' }, { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' } ],
            [ { suit: 'S', rank: '2' }, { suit: 'S', rank: '3' }, { suit: 'S', rank: '4' }, { suit: 'S', rank: '5' }, { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' } ],
        ],

        "3456789T":[
            [ { suit: 'D', rank: '3' }, { suit: 'D', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' }, { suit: 'D', rank: 'T' } ],
            [ { suit: 'C', rank: '3' }, { suit: 'C', rank: '4' }, { suit: 'C', rank: '5' }, { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' }, { suit: 'C', rank: 'T' } ],
            [ { suit: 'H', rank: '3' }, { suit: 'H', rank: '4' }, { suit: 'H', rank: '5' }, { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' }, { suit: 'H', rank: 'T' } ],
            [ { suit: 'S', rank: '3' }, { suit: 'S', rank: '4' }, { suit: 'S', rank: '5' }, { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' }, { suit: 'S', rank: 'T' } ],
        ],

        "456789TJ":[
            [ { suit: 'D', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' }, { suit: 'D', rank: 'T' }, { suit: 'D', rank: 'J' } ],
            [ { suit: 'C', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' }, { suit: 'C', rank: 'T' }, { suit: 'C', rank: 'J' } ],
            [ { suit: 'H', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' }, { suit: 'H', rank: 'T' }, { suit: 'H', rank: 'J' } ],
            [ { suit: 'S', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' }, { suit: 'S', rank: 'T' }, { suit: 'S', rank: 'J' } ],
        ],

        "56789TJQ":[
            [ { suit: 'D', rank: '5' }, { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' }, { suit: 'D', rank: 'T' }, { suit: 'D', rank: 'J' }, { suit: 'D', rank: 'Q' } ],
            [ { suit: 'D', rank: '5' }, { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' }, { suit: 'C', rank: 'T' }, { suit: 'C', rank: 'J' }, { suit: 'C', rank: 'Q' } ],
            [ { suit: 'D', rank: '5' }, { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' }, { suit: 'H', rank: 'T' }, { suit: 'H', rank: 'J' }, { suit: 'H', rank: 'Q' } ],
            [ { suit: 'D', rank: '5' }, { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' }, { suit: 'S', rank: 'T' }, { suit: 'S', rank: 'J' }, { suit: 'S', rank: 'Q' } ],
        ],

        "6789TJQK":[
            [ { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' }, { suit: 'D', rank: 'T' }, { suit: 'D', rank: 'J' }, { suit: 'D', rank: 'Q' }, { suit: 'D', rank: 'K' } ],
            [ { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' }, { suit: 'C', rank: 'T' }, { suit: 'C', rank: 'J' }, { suit: 'C', rank: 'Q' }, { suit: 'C', rank: 'K' } ],
            [ { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' }, { suit: 'H', rank: 'T' }, { suit: 'H', rank: 'J' }, { suit: 'H', rank: 'Q' }, { suit: 'H', rank: 'K' } ],
            [ { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' }, { suit: 'S', rank: 'T' }, { suit: 'S', rank: 'J' }, { suit: 'S', rank: 'Q' }, { suit: 'S', rank: 'K' } ],
        ],

        "789TJQKA":[
            [ { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' }, { suit: 'D', rank: 'T' }, { suit: 'D', rank: 'J' }, { suit: 'D', rank: 'Q' }, { suit: 'D', rank: 'K' }, { suit: 'D', rank: 'A' } ],
            [ { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' }, { suit: 'C', rank: 'T' }, { suit: 'C', rank: 'J' }, { suit: 'C', rank: 'Q' }, { suit: 'C', rank: 'K' }, { suit: 'C', rank: 'A' } ],
            [ { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' }, { suit: 'H', rank: 'T' }, { suit: 'H', rank: 'J' }, { suit: 'H', rank: 'Q' }, { suit: 'H', rank: 'K' }, { suit: 'H', rank: 'A' } ],
            [ { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' }, { suit: 'S', rank: 'T' }, { suit: 'S', rank: 'J' }, { suit: 'S', rank: 'Q' }, { suit: 'S', rank: 'K' }, { suit: 'S', rank: 'A' } ],
        ]
    },

    9:{
        "A23456789":[
            [ { suit: 'D', rank: 'A' }, { suit: 'D', rank: '2' }, { suit: 'D', rank: '3' }, { suit: 'D', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' } ],
            [ { suit: 'C', rank: 'A' }, { suit: 'C', rank: '2' }, { suit: 'C', rank: '3' }, { suit: 'C', rank: '4' }, { suit: 'C', rank: '5' }, { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' } ],
            [ { suit: 'H', rank: 'A' }, { suit: 'H', rank: '2' }, { suit: 'H', rank: '3' }, { suit: 'H', rank: '4' }, { suit: 'H', rank: '5' }, { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' } ],
            [ { suit: 'S', rank: 'A' }, { suit: 'S', rank: '2' }, { suit: 'S', rank: '3' }, { suit: 'S', rank: '4' }, { suit: 'S', rank: '5' }, { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' } ],
        ],

        "23456789T":[
            [ { suit: 'D', rank: '2' }, { suit: 'D', rank: '3' }, { suit: 'D', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' }, { suit: 'D', rank: 'T' } ],
            [ { suit: 'C', rank: '2' }, { suit: 'C', rank: '3' }, { suit: 'C', rank: '4' }, { suit: 'C', rank: '5' }, { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' }, { suit: 'C', rank: 'T' } ],
            [ { suit: 'H', rank: '2' }, { suit: 'H', rank: '3' }, { suit: 'H', rank: '4' }, { suit: 'H', rank: '5' }, { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' }, { suit: 'H', rank: 'T' } ],
            [ { suit: 'S', rank: '2' }, { suit: 'S', rank: '3' }, { suit: 'S', rank: '4' }, { suit: 'S', rank: '5' }, { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' }, { suit: 'S', rank: 'T' } ],
        ],

        "3456789TJ":[
            [ { suit: 'D', rank: '3' }, { suit: 'D', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' }, { suit: 'D', rank: 'T' }, { suit: 'D', rank: 'J' } ],
            [ { suit: 'C', rank: '3' }, { suit: 'C', rank: '4' }, { suit: 'C', rank: '5' }, { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' }, { suit: 'C', rank: 'T' }, { suit: 'C', rank: 'J' } ],
            [ { suit: 'H', rank: '3' }, { suit: 'H', rank: '4' }, { suit: 'H', rank: '5' }, { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' }, { suit: 'H', rank: 'T' }, { suit: 'H', rank: 'J' } ],
            [ { suit: 'S', rank: '3' }, { suit: 'S', rank: '4' }, { suit: 'S', rank: '5' }, { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' }, { suit: 'S', rank: 'T' }, { suit: 'S', rank: 'J' } ],
        ],

        "456789TJQ":[
            [ { suit: 'D', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' }, { suit: 'D', rank: 'T' }, { suit: 'D', rank: 'J' }, { suit: 'D', rank: 'Q' } ],
            [ { suit: 'C', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' }, { suit: 'C', rank: 'T' }, { suit: 'C', rank: 'J' }, { suit: 'C', rank: 'Q' } ],
            [ { suit: 'H', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' }, { suit: 'H', rank: 'T' }, { suit: 'H', rank: 'J' }, { suit: 'H', rank: 'Q' } ],
            [ { suit: 'S', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' }, { suit: 'S', rank: 'T' }, { suit: 'S', rank: 'J' }, { suit: 'S', rank: 'Q' } ],
        ],

        "56789TJQK":[
            [ { suit: 'D', rank: '5' }, { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' }, { suit: 'D', rank: 'T' }, { suit: 'D', rank: 'J' }, { suit: 'D', rank: 'Q' }, { suit: 'D', rank: 'K' } ],
            [ { suit: 'D', rank: '5' }, { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' }, { suit: 'C', rank: 'T' }, { suit: 'C', rank: 'J' }, { suit: 'C', rank: 'Q' }, { suit: 'C', rank: 'K' } ],
            [ { suit: 'D', rank: '5' }, { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' }, { suit: 'H', rank: 'T' }, { suit: 'H', rank: 'J' }, { suit: 'H', rank: 'Q' }, { suit: 'H', rank: 'K' } ],
            [ { suit: 'D', rank: '5' }, { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' }, { suit: 'S', rank: 'T' }, { suit: 'S', rank: 'J' }, { suit: 'S', rank: 'Q' }, { suit: 'S', rank: 'K' } ],
        ],

        "6789TJQKA":[
            [ { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' }, { suit: 'D', rank: 'T' }, { suit: 'D', rank: 'J' }, { suit: 'D', rank: 'Q' }, { suit: 'D', rank: 'K' }, { suit: 'D', rank: 'A' } ],
            [ { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' }, { suit: 'C', rank: 'T' }, { suit: 'C', rank: 'J' }, { suit: 'C', rank: 'Q' }, { suit: 'C', rank: 'K' }, { suit: 'C', rank: 'A' } ],
            [ { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' }, { suit: 'H', rank: 'T' }, { suit: 'H', rank: 'J' }, { suit: 'H', rank: 'Q' }, { suit: 'H', rank: 'K' }, { suit: 'H', rank: 'A' } ],
            [ { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' }, { suit: 'S', rank: 'T' }, { suit: 'S', rank: 'J' }, { suit: 'S', rank: 'Q' }, { suit: 'S', rank: 'K' }, { suit: 'S', rank: 'A' } ],
        ]
    },

    10:{
        "A23456789T":[
            [ { suit: 'D', rank: 'A' }, { suit: 'D', rank: '2' }, { suit: 'D', rank: '3' }, { suit: 'D', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' }, { suit: 'D', rank: 'T' } ],
            [ { suit: 'C', rank: 'A' }, { suit: 'C', rank: '2' }, { suit: 'C', rank: '3' }, { suit: 'C', rank: '4' }, { suit: 'C', rank: '5' }, { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' }, { suit: 'C', rank: 'T' } ],
            [ { suit: 'H', rank: 'A' }, { suit: 'H', rank: '2' }, { suit: 'H', rank: '3' }, { suit: 'H', rank: '4' }, { suit: 'H', rank: '5' }, { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' }, { suit: 'H', rank: 'T' } ],
            [ { suit: 'S', rank: 'A' }, { suit: 'S', rank: '2' }, { suit: 'S', rank: '3' }, { suit: 'S', rank: '4' }, { suit: 'S', rank: '5' }, { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' }, { suit: 'S', rank: 'T' } ],
        ],

        "23456789TJ":[
            [ { suit: 'D', rank: '2' }, { suit: 'D', rank: '3' }, { suit: 'D', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' }, { suit: 'D', rank: 'T' }, { suit: 'D', rank: 'J' } ],
            [ { suit: 'C', rank: '2' }, { suit: 'C', rank: '3' }, { suit: 'C', rank: '4' }, { suit: 'C', rank: '5' }, { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' }, { suit: 'C', rank: 'T' }, { suit: 'C', rank: 'J' } ],
            [ { suit: 'H', rank: '2' }, { suit: 'H', rank: '3' }, { suit: 'H', rank: '4' }, { suit: 'H', rank: '5' }, { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' }, { suit: 'H', rank: 'T' }, { suit: 'H', rank: 'J' } ],
            [ { suit: 'S', rank: '2' }, { suit: 'S', rank: '3' }, { suit: 'S', rank: '4' }, { suit: 'S', rank: '5' }, { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' }, { suit: 'S', rank: 'T' }, { suit: 'S', rank: 'J' } ],
        ],

        "3456789TJQ":[
            [ { suit: 'D', rank: '3' }, { suit: 'D', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' }, { suit: 'D', rank: 'T' }, { suit: 'D', rank: 'J' }, { suit: 'D', rank: 'Q' } ],
            [ { suit: 'C', rank: '3' }, { suit: 'C', rank: '4' }, { suit: 'C', rank: '5' }, { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' }, { suit: 'C', rank: 'T' }, { suit: 'C', rank: 'J' }, { suit: 'C', rank: 'Q' } ],
            [ { suit: 'H', rank: '3' }, { suit: 'H', rank: '4' }, { suit: 'H', rank: '5' }, { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' }, { suit: 'H', rank: 'T' }, { suit: 'H', rank: 'J' }, { suit: 'H', rank: 'Q' } ],
            [ { suit: 'S', rank: '3' }, { suit: 'S', rank: '4' }, { suit: 'S', rank: '5' }, { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' }, { suit: 'S', rank: 'T' }, { suit: 'S', rank: 'J' }, { suit: 'S', rank: 'Q' } ],
        ],

        "456789TJQK":[
            [ { suit: 'D', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' }, { suit: 'D', rank: 'T' }, { suit: 'D', rank: 'J' }, { suit: 'D', rank: 'Q' }, { suit: 'D', rank: 'K' } ],
            [ { suit: 'C', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' }, { suit: 'C', rank: 'T' }, { suit: 'C', rank: 'J' }, { suit: 'C', rank: 'Q' }, { suit: 'C', rank: 'K' } ],
            [ { suit: 'H', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' }, { suit: 'H', rank: 'T' }, { suit: 'H', rank: 'J' }, { suit: 'H', rank: 'Q' }, { suit: 'H', rank: 'K' } ],
            [ { suit: 'S', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' }, { suit: 'S', rank: 'T' }, { suit: 'S', rank: 'J' }, { suit: 'S', rank: 'Q' }, { suit: 'S', rank: 'K' } ],
        ],

        "56789TJQKA":[
            [ { suit: 'D', rank: '5' }, { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' }, { suit: 'D', rank: 'T' }, { suit: 'D', rank: 'J' }, { suit: 'D', rank: 'Q' }, { suit: 'D', rank: 'K' }, { suit: 'D', rank: 'A' } ],
            [ { suit: 'D', rank: '5' }, { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' }, { suit: 'C', rank: 'T' }, { suit: 'C', rank: 'J' }, { suit: 'C', rank: 'Q' }, { suit: 'C', rank: 'K' }, { suit: 'C', rank: 'A' } ],
            [ { suit: 'D', rank: '5' }, { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' }, { suit: 'H', rank: 'T' }, { suit: 'H', rank: 'J' }, { suit: 'H', rank: 'Q' }, { suit: 'H', rank: 'K' }, { suit: 'H', rank: 'A' } ],
            [ { suit: 'D', rank: '5' }, { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' }, { suit: 'S', rank: 'T' }, { suit: 'S', rank: 'J' }, { suit: 'S', rank: 'Q' }, { suit: 'S', rank: 'K' }, { suit: 'S', rank: 'A' } ],
        ]
    },

    11:{
        "A23456789TJ":[
            [ { suit: 'D', rank: 'A' }, { suit: 'D', rank: '2' }, { suit: 'D', rank: '3' }, { suit: 'D', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' }, { suit: 'D', rank: 'T' }, { suit: 'D', rank: 'J' } ],
            [ { suit: 'C', rank: 'A' }, { suit: 'C', rank: '2' }, { suit: 'C', rank: '3' }, { suit: 'C', rank: '4' }, { suit: 'C', rank: '5' }, { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' }, { suit: 'C', rank: 'T' }, { suit: 'C', rank: 'J' } ],
            [ { suit: 'H', rank: 'A' }, { suit: 'H', rank: '2' }, { suit: 'H', rank: '3' }, { suit: 'H', rank: '4' }, { suit: 'H', rank: '5' }, { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' }, { suit: 'H', rank: 'T' }, { suit: 'H', rank: 'J' } ],
            [ { suit: 'S', rank: 'A' }, { suit: 'S', rank: '2' }, { suit: 'S', rank: '3' }, { suit: 'S', rank: '4' }, { suit: 'S', rank: '5' }, { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' }, { suit: 'S', rank: 'T' }, { suit: 'S', rank: 'J' } ],
        ],

        "23456789TJQ":[
            [ { suit: 'D', rank: '2' }, { suit: 'D', rank: '3' }, { suit: 'D', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' }, { suit: 'D', rank: 'T' }, { suit: 'D', rank: 'J' }, { suit: 'D', rank: 'Q' } ],
            [ { suit: 'C', rank: '2' }, { suit: 'C', rank: '3' }, { suit: 'C', rank: '4' }, { suit: 'C', rank: '5' }, { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' }, { suit: 'C', rank: 'T' }, { suit: 'C', rank: 'J' }, { suit: 'C', rank: 'Q' } ],
            [ { suit: 'H', rank: '2' }, { suit: 'H', rank: '3' }, { suit: 'H', rank: '4' }, { suit: 'H', rank: '5' }, { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' }, { suit: 'H', rank: 'T' }, { suit: 'H', rank: 'J' }, { suit: 'H', rank: 'Q' } ],
            [ { suit: 'S', rank: '2' }, { suit: 'S', rank: '3' }, { suit: 'S', rank: '4' }, { suit: 'S', rank: '5' }, { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' }, { suit: 'S', rank: 'T' }, { suit: 'S', rank: 'J' }, { suit: 'S', rank: 'Q' } ],
        ],

        "3456789TJQK":[
            [ { suit: 'D', rank: '3' }, { suit: 'D', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' }, { suit: 'D', rank: 'T' }, { suit: 'D', rank: 'J' }, { suit: 'D', rank: 'Q' }, { suit: 'D', rank: 'K' } ],
            [ { suit: 'C', rank: '3' }, { suit: 'C', rank: '4' }, { suit: 'C', rank: '5' }, { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' }, { suit: 'C', rank: 'T' }, { suit: 'C', rank: 'J' }, { suit: 'C', rank: 'Q' }, { suit: 'C', rank: 'K' } ],
            [ { suit: 'H', rank: '3' }, { suit: 'H', rank: '4' }, { suit: 'H', rank: '5' }, { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' }, { suit: 'H', rank: 'T' }, { suit: 'H', rank: 'J' }, { suit: 'H', rank: 'Q' }, { suit: 'H', rank: 'K' } ],
            [ { suit: 'S', rank: '3' }, { suit: 'S', rank: '4' }, { suit: 'S', rank: '5' }, { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' }, { suit: 'S', rank: 'T' }, { suit: 'S', rank: 'J' }, { suit: 'S', rank: 'Q' }, { suit: 'S', rank: 'K' } ],
        ],

        "456789TJQKA":[
            [ { suit: 'D', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' }, { suit: 'D', rank: 'T' }, { suit: 'D', rank: 'J' }, { suit: 'D', rank: 'Q' }, { suit: 'D', rank: 'K' }, { suit: 'D', rank: 'A' } ],
            [ { suit: 'C', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' }, { suit: 'C', rank: 'T' }, { suit: 'C', rank: 'J' }, { suit: 'C', rank: 'Q' }, { suit: 'C', rank: 'K' }, { suit: 'C', rank: 'A' } ],
            [ { suit: 'H', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' }, { suit: 'H', rank: 'T' }, { suit: 'H', rank: 'J' }, { suit: 'H', rank: 'Q' }, { suit: 'H', rank: 'K' }, { suit: 'H', rank: 'A' } ],
            [ { suit: 'S', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' }, { suit: 'S', rank: 'T' }, { suit: 'S', rank: 'J' }, { suit: 'S', rank: 'Q' }, { suit: 'S', rank: 'K' }, { suit: 'S', rank: 'A' } ],
        ],
    },

    12:{
        "A23456789TJQ":[
            [ { suit: 'D', rank: 'A' }, { suit: 'D', rank: '2' }, { suit: 'D', rank: '3' }, { suit: 'D', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' }, { suit: 'D', rank: 'T' }, { suit: 'D', rank: 'J' }, { suit: 'D', rank: 'Q' } ],
            [ { suit: 'C', rank: 'A' }, { suit: 'C', rank: '2' }, { suit: 'C', rank: '3' }, { suit: 'C', rank: '4' }, { suit: 'C', rank: '5' }, { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' }, { suit: 'C', rank: 'T' }, { suit: 'C', rank: 'J' }, { suit: 'C', rank: 'Q' } ],
            [ { suit: 'H', rank: 'A' }, { suit: 'H', rank: '2' }, { suit: 'H', rank: '3' }, { suit: 'H', rank: '4' }, { suit: 'H', rank: '5' }, { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' }, { suit: 'H', rank: 'T' }, { suit: 'H', rank: 'J' }, { suit: 'H', rank: 'Q' } ],
            [ { suit: 'S', rank: 'A' }, { suit: 'S', rank: '2' }, { suit: 'S', rank: '3' }, { suit: 'S', rank: '4' }, { suit: 'S', rank: '5' }, { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' }, { suit: 'S', rank: 'T' }, { suit: 'S', rank: 'J' }, { suit: 'S', rank: 'Q' } ],
        ],

        "23456789TJQK":[
            [ { suit: 'D', rank: '2' }, { suit: 'D', rank: '3' }, { suit: 'D', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' }, { suit: 'D', rank: 'T' }, { suit: 'D', rank: 'J' }, { suit: 'D', rank: 'Q' }, { suit: 'D', rank: 'K' } ],
            [ { suit: 'C', rank: '2' }, { suit: 'C', rank: '3' }, { suit: 'C', rank: '4' }, { suit: 'C', rank: '5' }, { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' }, { suit: 'C', rank: 'T' }, { suit: 'C', rank: 'J' }, { suit: 'C', rank: 'Q' }, { suit: 'C', rank: 'K' } ],
            [ { suit: 'H', rank: '2' }, { suit: 'H', rank: '3' }, { suit: 'H', rank: '4' }, { suit: 'H', rank: '5' }, { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' }, { suit: 'H', rank: 'T' }, { suit: 'H', rank: 'J' }, { suit: 'H', rank: 'Q' }, { suit: 'H', rank: 'K' } ],
            [ { suit: 'S', rank: '2' }, { suit: 'S', rank: '3' }, { suit: 'S', rank: '4' }, { suit: 'S', rank: '5' }, { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' }, { suit: 'S', rank: 'T' }, { suit: 'S', rank: 'J' }, { suit: 'S', rank: 'Q' }, { suit: 'S', rank: 'K' } ],
        ],

        "3456789TJQKA":[
            [ { suit: 'D', rank: '3' }, { suit: 'D', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' }, { suit: 'D', rank: 'T' }, { suit: 'D', rank: 'J' }, { suit: 'D', rank: 'Q' }, { suit: 'D', rank: 'K' }, { suit: 'D', rank: 'A' } ],
            [ { suit: 'C', rank: '3' }, { suit: 'C', rank: '4' }, { suit: 'C', rank: '5' }, { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' }, { suit: 'C', rank: 'T' }, { suit: 'C', rank: 'J' }, { suit: 'C', rank: 'Q' }, { suit: 'C', rank: 'K' }, { suit: 'C', rank: 'A' } ],
            [ { suit: 'H', rank: '3' }, { suit: 'H', rank: '4' }, { suit: 'H', rank: '5' }, { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' }, { suit: 'H', rank: 'T' }, { suit: 'H', rank: 'J' }, { suit: 'H', rank: 'Q' }, { suit: 'H', rank: 'K' }, { suit: 'H', rank: 'A' } ],
            [ { suit: 'S', rank: '3' }, { suit: 'S', rank: '4' }, { suit: 'S', rank: '5' }, { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' }, { suit: 'S', rank: 'T' }, { suit: 'S', rank: 'J' }, { suit: 'S', rank: 'Q' }, { suit: 'S', rank: 'K' }, { suit: 'S', rank: 'A' } ],
        ]
    },

    13:{
        "23456789TJQKA":[
            [ { suit: 'D', rank: '2' }, { suit: 'D', rank: '3' }, { suit: 'D', rank: '4' }, { suit: 'D', rank: '5' }, { suit: 'D', rank: '6' }, { suit: 'D', rank: '7' }, { suit: 'D', rank: '8' }, { suit: 'D', rank: '9' }, { suit: 'D', rank: 'T' }, { suit: 'D', rank: 'J' }, { suit: 'D', rank: 'Q' }, { suit: 'D', rank: 'K' }, { suit: 'D', rank: 'A' } ],
            [ { suit: 'C', rank: '2' }, { suit: 'C', rank: '3' }, { suit: 'C', rank: '4' }, { suit: 'C', rank: '5' }, { suit: 'C', rank: '6' }, { suit: 'C', rank: '7' }, { suit: 'C', rank: '8' }, { suit: 'C', rank: '9' }, { suit: 'C', rank: 'T' }, { suit: 'C', rank: 'J' }, { suit: 'C', rank: 'Q' }, { suit: 'C', rank: 'K' }, { suit: 'C', rank: 'A' } ],
            [ { suit: 'H', rank: '2' }, { suit: 'H', rank: '3' }, { suit: 'H', rank: '4' }, { suit: 'H', rank: '5' }, { suit: 'H', rank: '6' }, { suit: 'H', rank: '7' }, { suit: 'H', rank: '8' }, { suit: 'H', rank: '9' }, { suit: 'H', rank: 'T' }, { suit: 'H', rank: 'J' }, { suit: 'H', rank: 'Q' }, { suit: 'H', rank: 'K' }, { suit: 'H', rank: 'A' } ],
            [ { suit: 'S', rank: '2' }, { suit: 'S', rank: '3' }, { suit: 'S', rank: '4' }, { suit: 'S', rank: '5' }, { suit: 'S', rank: '6' }, { suit: 'S', rank: '7' }, { suit: 'S', rank: '8' }, { suit: 'S', rank: '9' }, { suit: 'S', rank: 'T' }, { suit: 'S', rank: 'J' }, { suit: 'S', rank: 'Q' }, { suit: 'S', rank: 'K' }, { suit: 'S', rank: 'A' } ],
        ]
    },
}