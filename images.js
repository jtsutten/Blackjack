import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const images = {
    ace_of_clubs: {
        uri: require('./assets/ace_of_clubs.png')
    },
    ace_of_diamonds: {
        uri: require('./assets/ace_of_diamonds.png')
    },
    ace_of_hearts: {
        uri: require('./assets/ace_of_hearts.png')
    },
    ace_of_spades: {
        uri: require('./assets/ace_of_spades.png')
    },
    two_of_clubs: {
        uri: require('./assets/two_of_clubs.png')
    },
    two_of_diamonds: {
        uri: require('./assets/two_of_diamonds.png')
    },
    two_of_hearts: {
        uri: require('./assets/two_of_hearts.png')
    },
    two_of_spades: {
        uri: require('./assets/two_of_spades.png')
    },
    three_of_clubs: {
        uri: require('./assets/three_of_clubs.png')
    },
    three_of_diamonds: {
        uri: require('./assets/three_of_diamonds.png')
    },
    three_of_hearts: {
        uri: require('./assets/three_of_hearts.png')
    },
    three_of_spades: {
        uri: require('./assets/three_of_spades.png')
    },
    four_of_clubs: {
        uri: require('./assets/four_of_clubs.png')
    },
    four_of_diamonds: {
        uri: require('./assets/four_of_diamonds.png')
    },
    four_of_hearts: {
        uri: require('./assets/four_of_hearts.png')
    },
    four_of_spades: {
        uri: require('./assets/four_of_spades.png')
    },
    five_of_clubs: {
        uri: require('./assets/five_of_clubs.png')
    },
    five_of_diamonds: {
        uri: require('./assets/five_of_diamonds.png')
    },
    five_of_hearts: {
        uri: require('./assets/five_of_hearts.png')
    },
    five_of_spades: {
        uri: require('./assets/five_of_spades.png')
    },
    six_of_clubs: {
        uri: require('./assets/six_of_clubs.png')
    },
    six_of_diamonds: {
        uri: require('./assets/six_of_diamonds.png')
    },
    six_of_hearts: {
        uri: require('./assets/six_of_hearts.png')
    },
    six_of_spades: {
        uri: require('./assets/six_of_spades.png')
    },
    seven_of_clubs: {
        uri: require('./assets/seven_of_clubs.png')
    },
    seven_of_diamonds: {
        uri: require('./assets/seven_of_diamonds.png')
    },
    seven_of_hearts: {
        uri: require('./assets/seven_of_hearts.png')
    },
    seven_of_spades: {
        uri: require('./assets/seven_of_spades.png')
    },
    eight_of_clubs: {
        uri: require('./assets/eight_of_clubs.png')
    },
    eight_of_diamonds: {
        uri: require('./assets/eight_of_diamonds.png')
    },
    eight_of_hearts: {
        uri: require('./assets/eight_of_hearts.png')
    },
    eight_of_spades: {
        uri: require('./assets/eight_of_spades.png')
    },
    nine_of_clubs: {
        uri: require('./assets/nine_of_clubs.png')
    },
    nine_of_diamonds: {
        uri: require('./assets/nine_of_diamonds.png')
    },
    nine_of_hearts: {
        uri: require('./assets/nine_of_hearts.png')
    },
    nine_of_spades: {
        uri: require('./assets/nine_of_spades.png')
    },
    ten_of_clubs: {
        uri: require('./assets/ten_of_clubs.png')
    },
    ten_of_diamonds: {
        uri: require('./assets/ten_of_diamonds.png')
    },
    ten_of_hearts: {
        uri: require('./assets/ten_of_hearts.png')
    },
    ten_of_spades: {
        uri: require('./assets/ten_of_spades.png')
    },
    jack_of_clubs: {
        uri: require('./assets/jack_of_clubs.png')
    },
    jack_of_diamonds: {
        uri: require('./assets/jack_of_diamonds.png')
    },
    jack_of_hearts: {
        uri: require('./assets/jack_of_hearts.png')
    },
    jack_of_spades: {
        uri: require('./assets/jack_of_spades.png')
    },
    queen_of_clubs: {
        uri: require('./assets/queen_of_clubs.png')
    },
    queen_of_diamonds: {
        uri: require('./assets/queen_of_diamonds.png')
    },
    queen_of_hearts: {
        uri: require('./assets/queen_of_hearts.png')
    },
    queen_of_spades: {
        uri: require('./assets/queen_of_spades.png')
    },
    king_of_clubs: {
        uri: require('./assets/king_of_clubs.png')
    },
    king_of_diamonds: {
        uri: require('./assets/king_of_diamonds.png')
    },
    king_of_hearts: {
        uri: require('./assets/king_of_hearts.png')
    },
    king_of_spades: {
        uri: require('./assets/king_of_spades.png')
    },
}

export { images };