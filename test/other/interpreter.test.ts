import { ProgramNode, Context, Node } from "../../src/designPattern/other/interpreter";

describe('インタプリタ', ()=> {
    it('is if you parse a text.', () => {
        try {
            const text: string = "hoge";
            console.log(`text = "${text}"`);
            const node: Node = new ProgramNode();
            node.parse(new Context(text));
            console.log(`node = ${node}`)
        } catch (e) {
        }
    });
});