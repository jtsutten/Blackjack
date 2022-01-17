import first from 'ee-first';
// import { x } from 'joi';
import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Text, View, Button, Pressable, SafeAreaView } from 'react-native';
import tailwind from 'tailwind-rn';
import { images } from './images.js';
import { splits, hardTotals, softTotals } from './basic_strategy.js'
import { Hands, horizontalOffset, verticalOffset} from './hands.js'
import * as Player from './player.js';

window.numPlayers = 2;

let suits = {
  clubs: 0,
  diamonds: 1,
  hearts: 2,
  spades: 3
};
//TODO: maybe call this displays becauase there is no 'value' of j q or k
let values = {
  two: 0,
  three: 1,
  four: 2,
  five: 3,
  six: 4,
  seven: 5,
  eight: 6,
  nine: 7,
  ten: 8,
  jack: 9,
  queen: 10,
  king: 11,
  ace: 12
};

let suitKeys = Object.keys(suits).reduce(function (acc, key) {
  return acc[suits[key]] = key, acc;
}, {});

let valueKeys = Object.keys(values).reduce(function (acc, key) {
  return acc[values[key]] = key, acc;
}, {});

function initPlayers() {
  return new Array(numPlayers).fill(new Player.Player());
}

export default function App() {
  const [deck, setDeck] = useState(initDeck());
  const [players, setPlayers] = useState(initPlayers());
  const [count, setCount] = useState(0);
  const [currentPlayer, setCurrentPlayer] = useState(0);

  useEffect(() => {
    deal(deck, count, setCount, players, setPlayers, currentPlayer, setCurrentPlayer);
  }, []);

  // useEffect(() => { console.log('count in count useEffect: ' + count) }, [count]);

  useEffect(() => {
    console.log('players: ');
    console.log(players);
  }, [players])

  return (
    <View style={styles.container}>
      <View source={styles.container} style={styles.logo}>
        <Hands players={players}/>
      </View>
      <View style={styles.actionBar}>
        <CustomButton style={styles.buttons} title='hit' onPress={() => hit(deck, count, setCount, players, setPlayers, currentPlayer, setCurrentPlayer)}></CustomButton>
        <CustomButton style={styles.buttons} title='stand' onPress={() => hit(deck, count, setCount, players, setPlayers)}></CustomButton>
        <CustomButton style={styles.buttons} title='double down' onPress={() => hit(deck, count, setCount, players, setPlayers)}></CustomButton>
        <CustomButton style={styles.buttons} title='split' onPress={() => hit(deck, count, setCount, players, setPlayers)}></CustomButton>
        <CustomButton style={styles.buttons} title='deal' onPress={() => hit(deck, count, setCount, players, setPlayers)}></CustomButton>
        <CustomButton style={styles.buttons} title='surrender' onPress={() => hit(deck, count, setCount, players, setPlayers)}></CustomButton>
        <View style={styles.count}>
          <Text style={styles.count}>{count}</Text>
        </View>
      </View>
      
    </View>
  );
}

function CustomButton(props) {
  const { onPress, title } = props;
  return (
    <Pressable style={styles.buttons} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

function hit(deck, count, setCount, players, setPlayers, currentPlayer, setCurrentPlayer) {
  const card = deck.pop();
  setCount(incrementCardCount(card, count));
  const newPlayers = Player.hit(players, card, currentPlayer, setCurrentPlayer);
  setPlayers(newPlayers);
  return newPlayers;
}

function deal(deck, count, setCount, players, setPlayers, currentPlayer, setCurrentPlayer) {
  let newPlayers = {...players};
  for (let i = 0; i < window.numPlayers; i++) {
    newPlayers = hit(deck, count, setCount, newPlayers, setPlayers, currentPlayer, setCurrentPlayer);
  }
  for (let i = 0; i < window.numPlayers; i++) {
    newPlayers = hit(deck, count, setCount, newPlayers, setPlayers, currentPlayer, setCurrentPlayer);
  }
  setPlayers(newPlayers);
  return newPlayers;
}

function incrementCardCount(card, count) {
  if (card.value === 'ace') {
    return count - 1;
  }
  let intValue = parseInt(card.value);
  if (intValue >= 2 && intValue <= 6) {
    return count + 1;

  }
  else if (intValue == 10) {
    return count - 1;
  }
  return count;
}


function initDeck() {

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  let deck = [];
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 13; j++) {
      let value = valueKeys[j];
      value = (value === 'jack' || value === 'queen' || value === 'king') ? '10' : values[`${value}`] + 2; // this is literally disgusting + 2 cause we start at 0... srsly fix this josh i'm gonna vom
      if (value === 14) value = 'ace' //hardcode fix - don't want to turn ace into value 12 + 2 = 14.
      let suit = suitKeys[i];
      let display = valueKeys[j];
      let card = { value: value, suit: suit, display: display };
      deck.push(card);
    }
  }
  // return deck;
  return shuffleArray(deck)
}

function getNumPlayers() {
  return numPlayers;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cards: {
    height: 100,
    width: 150
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 10,
  },
  hands: {
    flexDirection: 'row',
  },
  count: {
    float: 'left',
    bottom: '10%',
    fontSize: 16,
    float: 'left'
  },
  actionBar: {
    position: 'absolute',
    bottom: '10%',
    left: '50%',
    flexDirection: 'row',
    flexWrap: 'wrap'
    
    // display: 'grid'
  },
  buttons: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "black",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "48%",
    textAlign: "center", 
  },
  // buttons: {
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   paddingVertical: 12,
  //   paddingHorizontal: 32,
  //   borderRadius: 4,
  //   elevation: 3,
  //   backgroundColor: 'black',
  // },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  }
});

export { styles, getNumPlayers}