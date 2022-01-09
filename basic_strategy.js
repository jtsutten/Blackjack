const length = 10;

const splits = {
    'ace': new Array(length).fill('y'),
    '8': new Array(length).fill('y'),
    '10': new Array(length).fill('n'),
    '5': new Array(length).fill('n'),
    '2': ['y/n', 'y/n', 'y', 'y', 'y', 'y', 'n', 'n', 'n', 'n'],
    '3': ['y/n', 'y/n', 'y', 'y', 'y', 'y', 'n', 'n', 'n', 'n'],
    '7': ['y', 'y', 'y', 'y', 'y', 'y', 'n', 'n', 'n', 'n'],
    '4': ['n', 'n', 'n', 'y', 'y', 'n', 'n', 'n', 'n', 'n'],
    '6': ['y/n', 'y', 'y', 'y', 'y', 'n', 'n', 'n', 'n', 'n'],
    '9': ['y', 'y', 'y', 'y', 'y', 'n ', 'n', 'n', 'n', 'n']
}

const hardTotals = {
    17: new Array(length).fill('s'),
    16: ['s', 's', 's', 's', 's', 'h', 'h', 'h', 'h', 'h'],
    15: ['s', 's', 's', 's', 's', 'h', 'h', 'h', 'h', 'h'],
    14: ['s', 's', 's', 's', 's', 'h', 'h', 'h', 'h', 'h'],
    13: ['s', 's', 's', 's', 's', 'h', 'h', 'h', 'h', 'h'],
    12: ['h', 'h', 's', 's', 's', 'h', 'h', 'h', 'h', 'h'],
    11: ['d', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'd'],
    10: ['d', 'd', 'd', 'd', 'd', 'd', 'd', 'd', 'h', 'h'],
    9:  ['h', 'd', 'd', 'd', 'd', 'h', 'h', 'h', 'h', 'h'],
    8:  ['h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h'],
    7:  ['h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h'],
    6:  ['h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h'],
    5:  ['h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h'],
}
//key is non ace card
const softTotals = {
    '2': ['h', 'h', 'h', 'd', 'd', 'h', 'h', 'h', 'h', 'h'],
    '3': ['h', 'h', 'h', 'd', 'd', 'h', 'h', 'h', 'h', 'h'],
    '4': ['h', 'h', 'd', 'd', 'd', 'h', 'h', 'h', 'h', 'h'],
    '5': ['h', 'h', 'd', 'd', 'd', 'h', 'h', 'h', 'h', 'h'],
    '6': ['h', 'd', 'd', 'd', 'd', 'h', 'h', 'h', 'h', 'h'],
    '7': ['ds', 'ds', 'ds', 'ds', 'ds', 's', 's', 'h', 'h', 'h'],
    '8': ['s', 's', 's', 's', 'ds', 's', 's', 's', 's', 's'],
    '9': ['s', 's', 's', 's', 's', 's', 's', 's', 's', 's'],
}

export {splits, hardTotals, softTotals};