import { Factory, Link, Tray, Page } from "../../src/designPattern/peripheral/abstractFactory";

describe("抽象的な部品を組み合わせて抽象的な製品を作る", ()=> {
    it("is if you make the HTML file.", () => {
        const args: string = "ListFactory";
        const factory: Factory = Factory.getFactory(args);
        const maiasa: Link = factory.createLink("毎朝新聞", "https://maiasa.co.jp/");
        const sandoku: Link = factory.createLink("産読新聞", "https://sandoku.co.jp/")
        
        const us_hoge: Link = factory.createLink("Hoge", "https://hoge.com/");
        const jp_hoge: Link = factory.createLink("Hoge Japan", "https://hoge.co.jp/");
        const fuga: Link = factory.createLink("Fuga", "https://fuga.com/");
        const piyo: Link = factory.createLink("Piyo", "https://piyo.com/");

        const traynews: Tray = factory.createTray("新聞");
        traynews.add(maiasa);
        traynews.add(sandoku);

        const trayhoge: Tray = factory.createTray("Hoge");
        trayhoge.add(us_hoge);
        trayhoge.add(jp_hoge);

        const traysearch: Tray = factory.createTray("サーチエンジン");
        traysearch.add(trayhoge);
        traysearch.add(fuga);
        traysearch.add(piyo);

        const page: Page = factory.createPage("LinkPage", "");
        page.add(traynews);
        page.add(traysearch);
        page.output();
    });
});