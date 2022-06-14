const { assert, expect } = require('chai');
const lookupChar = require('./05.CharLookup.js');


describe('Look Up Char', () => {
    it('returns char at index', () => {
        assert(lookupChar('free', 2) === 'e');
    });

    it('returns incorrect bigger index', ()=>{
        expect(lookupChar('free',10)).to.equal('Incorrect index');
    });

    it('returns incorrect lower index', ()=>{
        expect(lookupChar('free',-10)).to.equal('Incorrect index');
    });

    it('returns undefined if the first parameter is not a string', ()=>{
        expect(lookupChar(2,2)).to.equal(undefined);
    })

    it('returns undefined if the second parameter is not a number', ()=>{
        expect(lookupChar('free','wrong')).to.equal(undefined);
    })

    it('returns undefined if the second parameter is decimal', ()=>{
        expect(lookupChar('free',2.5)).to.equal(undefined);
    })
});