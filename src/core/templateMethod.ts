export abstract class AbstractDisplay {
    abstract open(): void;
    abstract print(): void;
    abstract close(): void;
    readonly display = (): void => {
        this.open();
        [...Array(5)].forEach(x => this.print());
        this.close();
    }
}

export class CharDisplay extends AbstractDisplay {
    private ch: string;

    constructor(ch: string) {
        super();
        this.ch = ch;
    }

    open = (): void => {
        console.log("<<");
    }

    print = (): void => {
        console.log(this.ch);
    }

    close = (): void => {
        console.log(">>");
    }
}

export class StringDisplay extends AbstractDisplay {
    private string: string;
    private width: number;

    constructor(string: string) {
        super();
        this.string = string;
        this.width = string.length;
    }

    open = (): void => {
        this.printLine();
    }

    print = (): void => {
        console.log(`|${this.string}|`);
    }

    close = (): void => {
        this.printLine();
    }

    private printLine = (): void => {
        console.log("+");
        [...Array(this.width)].forEach(x => console.log("-"));
        console.log("+");
    }
}