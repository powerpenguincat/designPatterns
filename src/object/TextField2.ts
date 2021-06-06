import { Component } from "./Component";

export class TextField2 extends Component {
    private text: string;
    private columns: number;
    private t: string;
    private c: string;

    constructor(text: string, columns: number) {
        super();
        this.text = text;
        this.columns = columns;
    }

    setText = (t: string): void => {
        this.t = t;
    }

    getText = (): string => this.text;

    setEchoChar = (c: string): void => {
        this.c = c;
    }
}