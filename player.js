class Player {
    constructor() {
        this.hands = [[]];
        this.currentHand = 0; // for splits
        this.numHands = 1;
        this.double = false;
    }
    
}
function getCurrentHand(player) {
    console.log(player);
    return player.hands[player.currentHand];
}

//return players or player?
function hit(players, card, currentPlayer, setCurrentPlayer) {
    let newPlayers = {...players};
    let hand = getCurrentHand(players[currentPlayer]);
    hand.push(card);
    return newPlayers;
}

export {Player, hit};