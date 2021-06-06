import { Component } from "./Component";

export class TextField extends Component {
    private columns: number;
    private t: string;

    constructor(columns: number) {
        super();
        this.columns = columns;
    }

    setText = (t: string): void => {
        this.t = t;
    }
}

export class TextFieldWithText extends Component {
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