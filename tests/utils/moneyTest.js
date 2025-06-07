import { formatCurrency } from "../../scripts/utils/money.js";
describe('test suit : formatCurrency',() => {
    it('converts cent into dollars',() =>{
       expect(formatCurrency(2050)).toEqual('20.50');
    });
    it('work with 0',() =>{
     expect(formatCurrency(0)).toEqual('0.00');
    });
    it( 'round upto to the nearest cent ',() =>{
     expect(formatCurrency(2000.5)).toEqual('20.01');
    });

});