const _ = require('lodash')

exports.isValidTrade = function(aTrade) {

    if (!validateTradeObj(aTrade))
    {
        return false;
    }


    return true;
}

var validateTradeObj = function(aTrade) {
    if (!aTrade || !aTrade.numOfTeams || aTrade.numOfTeams <= 0) {
        return false;
    }

    return true;
}