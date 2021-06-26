import { Subject, ConcreteSubject, Extension } from "../../src/designPattern/peripheral/extensionObject";

describe('', ()=> {
    it('shoud do this thing', () => {
        const subject: Subject = new ConcreteSubject();
        const extension: Extension = subject.getExteinsion("some type");
        extension.doSomething();
    });
});