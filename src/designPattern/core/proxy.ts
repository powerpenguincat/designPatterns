export class Printer implements Printable {
    private name: string;

    constructor(name: string) {
        this.name = name;
        this.heavyJob(`Printerのインスタンス（${name}）を生成中`);
    }

    setPrinterName = (name: string): void => {
        this.name = name;
    }

    getPrinterName = (): string => this.name;

    print = (string: string): void => {
        console.log(`=== ${this.name} ===`);
        console.log(string);
    }

    heavyJob = (msg: string): void => {
        console.log(msg);
        [...Array(5)].forEach(x => console.log("."));
        console.log("完了。");
    }
}

export interface Printable {
    setPrinterName(name: string): void;
    getPrinterName(): string;
    print(string: string): void;
}

export class PrinterProxy implements Printable {
    private name: string;
    private real: Printer;

    constructor(name: string) {
        this.name = name;
    }

    setPrinterName = (name: string): void => {
        if (this.real != null) {
            this.real.setPrinterName(name);
        }
        this.name = name;
    }

    getPrinterName = (): string => this.name;

    print = (string: string): void => {
        this.realize();
        this.real.print(string);
    }

    private realize = (): void => {
        if (this.real == null) {
            this.real = new Printer(this.name);
        }
    }
}