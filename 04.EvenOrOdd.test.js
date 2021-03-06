const { expect } = require('chai');
const isOddOrEven = require('./04.EvenOrOdd.js');


describe('Even or Odd', () => {
    it('returns undefined if the input type is object', () => {
        expect(isOddOrEven({})).to.equal(undefined);
    });

    it('returns even, if the given word is with even length', () => {
        expect(isOddOrEven('even')).to.equal('even');
    });

    it('returns odd, if the given word is with odd length', () => {
        expect(isOddOrEven('odd')).to.equal('odd');
    });
});