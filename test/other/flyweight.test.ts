import { BigString } from "../../src/designPattern/other/flyweight";

describe('同じものを共有して無駄をなくす', ()=> {
    it('is if you show the word.', () => {
        const bs: BigString = new BigString("hoge");
        bs.print();
    });
});