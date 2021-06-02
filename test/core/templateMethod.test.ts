import { AbstractDisplay, CharDisplay, StringDisplay } from "../../src/designPattern/core/templateMethod";

describe('継承することで具体的な処理をサブクラスにまかせる', ()=> {
    it('is if you display Hello, world.', () => {
        const d1: AbstractDisplay = new CharDisplay("H");
        const d2: AbstractDisplay = new StringDisplay("Hello, world.");
        const d3: AbstractDisplay = new StringDisplay("こんにちは。");

        d1.display();
        d2.display();
        d3.display();
    });
});