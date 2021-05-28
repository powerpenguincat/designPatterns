import { AbstractDisplay, CharDisplay, StringDisplay } from "../../src/core/templateMethod";

describe('', ()=> {
    it('shoud do this thing', () => {
        const d1: AbstractDisplay = new CharDisplay("H");
        const d2: AbstractDisplay = new StringDisplay("Hello, world.");
        const d3: AbstractDisplay = new StringDisplay("こんにちは。");

        d1.display();
        d2.display();
        d3.display();
    });
});