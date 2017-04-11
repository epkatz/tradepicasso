const expect = require('chai').expect
const playersModule = require('../app/trade.js')

describe('Player module', () => {
    it('should validate trade if salaries are equal', () => {
        
        var player1 = {
            'salary': 1000
        }

        var player2 = {
            'salary': 1000
        }

        const result = playersModule.isValidTrade(player1, player2)

        expect(result).to.be.true

    });
});