import { TextBuilder, Director, HTMLBuilder } from "../../src/designPattern/creational/builder";

describe("複雑なインスタンスを組み立てる", ()=> {
    it("is if you want to output a plain text.", () => {
        const textbuilder: TextBuilder = new TextBuilder();
        const director: Director = new Director(textbuilder);
        director.construct();
        const result: string = textbuilder.getResult();
        console.log(result);
    });
    it("is if you want to output a htmnl file.", () => {
        const htmlbuilder: HTMLBuilder = new HTMLBuilder();
        const director: Director = new Director(htmlbuilder);
        director.construct();
        const filename: string = htmlbuilder.getResult();
        console.log(`${filename}が作成されました。`);
    });
});