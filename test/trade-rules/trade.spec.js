const expect = require('chai').expect
const playersModule = require('../app/trade.js')

describe('Trade module', () => {
    it('should invalidate trade if trade object is undefined', () => {
        let aTrade = undefined

        const result = playersModule.isValidTrade(aTrade)

        expect(result).to.be.false
    });
    
    it('should invalidate trade if numOfTeams is undefined', () => {
        aTrade = {}

        const result = playersModule.isValidTrade(aTrade)

        expect(result).to.be.false
    });

    it('should validate trade if numOfTeams is greater than 0', () => {
        aTrade = {
            numOfTeams: 2
        }

        const result = playersModule.isValidTrade(aTrade)

        expect(result).to.be.true
    });
});