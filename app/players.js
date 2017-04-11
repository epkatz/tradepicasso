exports.isValidTrade = function(player1, player2) {

    if (player1.salary === player2.salary) {
        return true;
    }


    return false;
}