import { Factory, IDCardFactory, Product } from "../../src/designPattern/creational/factory";

describe("継承することで具体的なオブジェクトの関数での生成をサブクラスにまかせる", ()=> {
    it("is if you make many cards.", () => {
        const factory: Factory = new IDCardFactory();
        const card1: Product = factory.create("結城浩");
        const card2: Product = factory.create("とむら");
        const card3: Product = factory.create("佐藤花子");
        card1.use();
        card2.use();
        card3.use();
    });
});