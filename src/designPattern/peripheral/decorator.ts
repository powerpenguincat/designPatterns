export abstract class Display {
    abstract getColumns(): number;
    abstract getRows(): number;
    abstract getRowText(row: number): string;
    readonly show = (): void => {
        const naturalNum = (_: unknown, i: number): number => i;
        Array(this.getRows()).fill(0).map(naturalNum).forEach(x => console.log(this.getRowText(x)))
    }
}

export class StringDisplay extends Display {
    private string: string;

    constructor(string: string) {
        super();
        this.string = string;
    }

    getColumns = (): number => this.string.length;

    getRows = (): number => 1;

    getRowText = (row: number): string => row === 0 ? this.string : null;
}

export abstract class Border extends Display {
    display: Display;

    constructor(display: Display) {
        super();
        this.display = display;
    }
}

export class SideBorder extends Border {
    private borderChar: string;

    constructor(display: Display, ch: string) {
        super(display);
        this.borderChar = ch;
    }

    getColumns = (): number => 1 + this.display.getColumns() + 1;

    getRows = (): number => this.display.getRows();

    getRowText = (row: number): string => this.borderChar + this.display.getRowText(row) + this.borderChar;    
}

export class FullBorder extends Border {
    constructor(display: Display) {
        super(display);
    }

    getColumns = (): number => 1 + this.display.getColumns() + 1;

    getRows = (): number => 1 + this.display.getRows() + 1;

    getRowText = (row: number): string => {
        if (row === 0) {
            return `+${this.makeLine("-", this.display.getColumns())}+`;
        } else if (row === this.display.getRows() + 1) {
            return `+${this.makeLine("-", this.display.getColumns())}+`
        } else {
            return `|${this.display.getRowText(row - 1)}|`
        }
    }
    
    private makeLine = (ch: string, count: number) => Array(count).fill(ch);
}