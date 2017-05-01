// @flow
type TradeDto = {
    numOfTeams: number
};

exports.isValidTrade = function(tradeDto: TradeDto): boolean {

    if (!validateTradeObj(tradeDto))
    {
        return false;
    }

    return true;
}

var validateTradeObj = function(tradeDto: TradeDto): boolean {
    if (!tradeDto || tradeDto.numOfTeams <= 0) {
        return false;
    }

    return true;
}