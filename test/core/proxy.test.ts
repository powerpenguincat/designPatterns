import { PrinterProxy, Printable } from "../../src/designPattern/core/proxy";

describe("必要になってから作る", ()=> {
    it("is if you make it that you need.", () => {
        const p: Printable = new PrinterProxy("Alice");
        console.log(`名前は現在${p.getPrinterName()}です。`);
        p.setPrinterName("Bob");
        console.log(`名前は現在${p.getPrinterName()}です。`);
        p.print("Hello, world.");
    });
});