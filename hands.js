import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { images } from './images.js';

function Hands(props) {
    console.log('props')
    console.log(props);
    // this needs to be in this func - and i couldn't access it from App.styles.cards. when I did, it double executed this func for some reason.
    const styles = StyleSheet.create({
        cards: {
            height: 100,
            width: 150,

        },
        hands: {
          flexDirection: 'row',
          marginBottom: 25
        //   allignSelf: 'center',
        //   justifyContent: 'center'
        }
      });
      console.log(props.players[0].hands)
      return (
        <View>
          {props.players.map((player, i) => 
            <View key={`player-${i}`} style={styles.hands}>
              {player.hands.map((hand, j) => 
                hand.map((card, k) =>
                  <Image style={createCardOverlap(k)}resizeMode={'contain'} key={`player-${i}-${j}`} source={displayCard(card)}/> 
                )
              )}
            </View>
          )}
        </View>
      );
}
const horizontalOffset = -140;
const verticalOffset = 12;
function createCardOverlap(offset) {
    let trueHorizontalOffset = offset * horizontalOffset;
    let trueVerticalOffset = offset * verticalOffset;
    const styles = StyleSheet.create({
        cards: {
            height: 100,
            width: 150,
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