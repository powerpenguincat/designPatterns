import { PageMaker } from "../../src/designPattern/core/facade";

describe('インターフェースを少なくする', ()=> {
    it('is if you make a wellcome page.', () => {
        PageMaker.makeWelcomePage("hyuki(a)hyuki.com", "welcom.html");
    });
});