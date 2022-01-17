class Player {
    constructor() {
        this.hands = [[]];
        this.currentHand = 0; // for splits
        this.numHands = 1;
        this.double = false;
    }
    
}
function getCurrentHand(player) {
    return player.hands[player.currentHand];
}

function hit(players, card, currentPlayer, setCurrentPlayer) {
    let newPlayers = {...players};
    let hand = getCurrentHand(newPlayers[currentPlayer]);
    hand.push(card);
    setCurrentPlayer(incrementPlayerTurn(currentPlayer))
    return newPlayers;
}

function incrementPlayerTurn(currentPlayer) {
    if (currentPlayer + 1 === window.numPlayers) {
        return 0;
    }
    else {
        return currentPlayer + 1;
    }
}
export {Player, hit};