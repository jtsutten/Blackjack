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

function sumHand(hand) {
    let mySum = 0;
    let numAces = 0;
    for (let i = 0; i < hand.length; i++) {
        if (hand[i].value === 'ace') {
            numAces++;
            mySum += 11;
        }
        else {
            mySum += hand[i].value;
        }
    }
    while (mySum > 21 && numAces > 0) {
        mySum -= 10;
        numAces--;
    }
    return mySum
}

function hit(players, card, currentPlayer, setCurrentPlayer) {
    let newPlayers = [...players];
    let hand = getCurrentHand(newPlayers[currentPlayer]);
    hand.push(card);
    let mySum = sumHand(hand);
    if (mySum >= 21) { //TODO: separate this to 2 ifs so i know if it's a win or not prob
        return incrementAll(newPlayers, currentPlayer, setCurrentPlayer);
    }
    return newPlayers;
}

//I don't love how I pass players and currentPlayer instead of just player, but I want it to return players so i think this is gucci brev
function split(players, currentPlayer) {
    let newPlayers = [...players];
    let hand = getCurrentHand(newPlayers[currentPlayer]);
    const card = hand.pop();
    newPlayers[currentPlayer].hands.push([card]);
    newPlayers[currentPlayer].numHands++;
    return newPlayers;
}
//TODO: call incrementAll, and just have other shit call to stand instead of duping logic
function stand(players, currentPlayer, setCurrentPlayer) {
    let newPlayers = [...players];
    setCurrentPlayer(incrementPlayerTurn(currentPlayer));
    console.log('old ');
    console.log(newPlayers);
    if (incrementPlayerTurn(currentPlayer) === 0) { // clear the board
        return new Array(window.numPlayers).fill(null).map(() => new Player());
    }
    return newPlayers;
}

function incrementAll(players, currentPlayer, setCurrentPlayer) {
    let newPlayers = [...players];
    let newCurrentHand = incrementCurrentHand(newPlayers[currentPlayer]);
    newPlayers[currentPlayer].currentHand = newCurrentHand;
    console.log('current hand');
    console.log(newCurrentHand);
    if (newCurrentHand === 0) { // 0 means you finished your last hand and turn should change.
        setCurrentPlayer(incrementPlayerTurn(currentPlayer));
    }
    return newPlayers;
}

function incrementCurrentHand(player) {
    if (player.currentHand + 1 === player.numHands) {
        return 0;
    }
    else {
        return player.currentHand + 1;
    }
}
function incrementPlayerTurn(currentPlayer) {
    if (currentPlayer + 1 === window.numPlayers) {
        return 0;
    }
    else {
        return currentPlayer + 1;
    }
}
export {Player, hit, split, stand, sumHand};