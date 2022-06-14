const { expect } = require('chai');
const { addFive, subtractTen, sum } = require('./06.MathEnforcer');
const mathEnforcer = require('./06.MathEnforcer');

describe('Math Enforcer', () => {
    describe('Add Five', () => {
        it('Returns undefined with a string', () => {
            expect(mathEnforcer.addFive('NaN')).to.equal(undefined);
        });

        it('Returns undefined with an array', () => {
            expect(mathEnforcer.addFive([])).to.equal(undefined);
        });

        it('Returns undefined with an object', () => {
            expect(mathEnforcer.addFive({})).to.equal(undefined);
        });

        it('Returns undefined with undefined', () => {
            expect(mathEnforcer.addFive(null)).to.equal(undefined);
        });

        it('Returns positive int result', () => {
            expect(mathEnforcer.addFive(5)).to.equal(10);
        });

        it('Returns zero int result', () => {
            expect(mathEnforcer.addFive(-5)).to.equal(0);
        });

        it('Returns negative int result', () => {
            expect(mathEnforcer.addFive(-6)).to.equal(-1);
        });

        it('', () => {
            expect(mathEnforcer.addFive(5.5)).to.equal(10.5);
        });

        it('', () => {
            expect(mathEnforcer.addFive(-5.5)).to.equal(-0.5);
        });
    });

    //subtractTen

    it('', () => {
        expect(mathEnforcer.subtractTen('five')).to.equal(undefined);
    });

    it('', () => {
        expect(mathEnforcer.subtractTen([1])).to.equal(undefined);
    });

    it('', () => {
        expect(mathEnforcer.subtractTen(10)).to.equal(0);
    });

    it('', () => {
        expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
    });

    it('', () => {
        expect(mathEnforcer.subtractTen(20)).to.equal(10);
    });

    it('', () => {
        expect(mathEnforcer.subtractTen(20.5)).to.equal(10.5);
    });

    //sum(num1, num2) 
    it('', () => {
        expect(mathEnforcer.sum('string', 1)).to.equal(undefined);
    });

    it('', () => {
        expect(mathEnforcer.sum(1, 'string')).to.equal(undefined);
    });

    it('', () => {
        expect(mathEnforcer.sum(1, 1)).to.equal(2);
    });

    it('', () => {
        expect(mathEnforcer.sum(1.5, 2.5)).to.equal(4);
    });

    it('', () => {
        expect(mathEnforcer.sum(-1.5, 2)).to.equal(0.5);
    });
});