import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { styles } from './App.js';
import { images } from './images.js';

function Hands(props) {
  const {players, dealer} = props;
  // this needs to be in this func - and i couldn't access it from App.styles.cards. when I did, it double executed this func for some reason.
  const styles = StyleSheet.create({
      container: {
        display: 'flex',
        flex: '1',
        flexDirection: 'column',
        allignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: 'blue'
      },
      hand: {
        backgroundColor: 'green'
      },
      dealer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        // transform: [{translateX: '-50%'}],
        // allignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: 'orange'
        // flexDirection: 'row',

      },
      players: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignContent: 'center',
        flexWrap: 'wrap',
        margin: 100 //TODO: prob a better way to do this kek
      },
      hands: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 25,
        justifyContent: 'center',
        alignContent: 'center', 
        backgroundColor: 'red',
        margin: '15%',
        // gridTemplateColumns: 'repeat(12, 1fr)'
      }
    });


    return (
      <View style={styles.container}>
        {createDealer(dealer)}
        {createPlayers(players)}
      </View>
    );


  function createPlayers(players) {
    return (
      <View style={styles.players}>
        {players.map((player, i) => 
          <View key={`player-${i}`} style={styles.hands}>
            {player.hands.map((hand, j) => 
              <View key={`player-${i}-${j}`} style={{width: 150 + 25 * hand.length}}>
                {hand.map((card, k) =>
                  <Image key={`player-${i}-${j}-${k}`} style={createCardOverlap(k)} resizeMode={'contain'}  source={displayCard(card)}/> 
                )}
                </View> 
            )}
          </View>
        )}
      </View>
    );
  }

  function createDealer(dealer) {
    return (
      <View style={styles.dealer}>
        {dealer.hand.map((card, i) => 
          <Image key={`player-${i}`} style={createCardOverlap(i)} resizeMode={'contain'}  source={displayCard(card)}/>
        )}
      </View>
    )
  }
}



const horizontalOffset = 20;
const verticalOffset = 15;
function createCardOverlap(offset) {
  const trueHorizontalOffset = offset * horizontalOffset;
  const trueVerticalOffset = offset * verticalOffset;
  const styles = StyleSheet.create({
      cards: {
          position: offset === 0 ? 'relative' : 'absolute',
          height: 150,
          width: 100,
          transform: [{translateX: trueHorizontalOffset}, {translateY: trueVerticalOffset}]
      }
  });
  return styles.cards;
}

function displayCard(card) {
    const suit = card.suit.toLowerCase();
    const display = card.display.toLowerCase();
    return images[`${display}_of_${suit}`];
}

export { Hands, horizontalOffset, verticalOffset };