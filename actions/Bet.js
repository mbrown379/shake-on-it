import status from "../utils/status";

function createBet(name, amount, users) {
    firestore().collection('bets')
        .add({
            amount: amount,
            users: users,
            name: name,
            winner: null,
            loser: null,
            acknowledged: false,
            status: status.PENDING
        })
        .catch(error => {
            console.log('Something went wrong when creating bet ', error);
        });
};

function cancelBet(betId) {
    firestore().collection('bets')
        .doc(betId)
        .update({
            status: status.CANCELLED
        })
        .catch(error => {
            console.log('Something went wrong when canceling bet ', error);
        });
};

function acknowledgeBet(betId, winner, loser) {
    firestore().collection('bets')
        .doc(betId)
        .update({
            winner: winner,
            loser: loser,
            acknowledged: true
        })
        .catch(error => {
            console.log('Something went wrong when acknowledging bet ', error);
        });
};

function completeBet(betId) {
    const bet = firestore().collection('bets')
        .doc(betId)

    if (bet.acknowledged) {
        bet.update({
            status: status.COMPLETED
        })
        .catch(error => {
            console.log('Something went wrong when completing bet ', error);
        });
    } else {
        console.log('Bet not acknowledged');
    }
};