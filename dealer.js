import {sumHand} from './player.js';

class Dealer {
    constructor() {
        this.hand = [];
    }
}

//returns [dealer obj, boolean] where true means the dealer busted.
function hit(dealer, card) {
    let newDealer = [...dealer];
    newDealer.hand.push(card);
    let mySum = sumHand(newDealer.hand);
    if (mySum > 21) {
        return [newDealer, true]; //TODO: change players to do this shit, less stateful...
    }
    else {
        return [newDealer, false];
    }
}

export {hit, Dealer};

