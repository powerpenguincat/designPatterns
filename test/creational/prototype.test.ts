import { Manager, UnderlinePen, MessageBox, Product } from "../../src/designPattern/creational/prototype";

describe("すでにある複雑な状態をコピーする", ()=> {
    it("is if you want easy to create.", () => {
        const manager: Manager = new Manager();
        const upen: UnderlinePen = new UnderlinePen("~");
        const mbox: MessageBox = new MessageBox("*");
        const sbox: MessageBox = new MessageBox("/");
        manager.register("strong message", upen);
        manager.register("warning box", mbox);
        manager.register("slash box", sbox);

        const p1: Product = manager.create("strong message");
        p1.use("Hello, world.");
        const p2: Product = manager.create("warning box");
        p2.use("Hello, world.");
        const p3: Product = manager.create("slash box");
        p3.use("Hello, world.");
    });
});