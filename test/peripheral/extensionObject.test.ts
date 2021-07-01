import { Subject, ConcreteSubject, Extension } from "../../src/designPattern/peripheral/extensionObject";

describe("デコレーターとは別の拡張法", ()=> {
    it("is if you extend functions.", () => {
        const subject: Subject = new ConcreteSubject();
        const extension: Extension = subject.getExteinsion("some type");
        extension.doSomething();
    });
});