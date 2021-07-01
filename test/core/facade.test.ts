import { PageMaker } from "../../src/designPattern/core/facade";

describe("インターフェースを少なくすることで接地面積を減らす", ()=> {
    it("is if you make a wellcome page.", () => {
        PageMaker.makeWelcomePage("hyuki(a)hyuki.com", "welcom.html");
    });
});