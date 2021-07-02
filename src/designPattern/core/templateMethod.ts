export abstract class AbstractDisplay {
    abstract open(): string;
    abstract print(): string;
    abstract close(): string;
    readonly display = (): void => {
        console.log(this.open());
        [...Array(5)].forEach(x => console.log(this.print()));
        console.log(this.close());
    }
}

export class CharDisplay extends AbstractDisplay {
    private ch: string;

    constructor(ch: string) {
        super();
        this.ch = ch;
    }

    open = (): string => "<<";

    print = (): string => this.ch;

    close = (): string => ">>";
}

export class StringDisplay extends AbstractDisplay {
    private string: string;
    private width: number;

    constructor(string: string) {
        super();
        this.string = string;
        this.width = string.length;
    }

    open = (): string => this.printLine();

    print = (): string => `|${this.string}|`;

    close = (): string => this.printLine();

    private printLine = (): string => {
        const sum = (x: string, y: string) => x + y;
        let result: string = "";
        result += "+";
        result += [...Array(this.width)].map(x => "-").reduce(sum);
        result += "+";
        return result;
    }
}