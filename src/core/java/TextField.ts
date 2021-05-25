import { Component } from "./Component";

export class TextField extends Component {
    private columns: number;
    private t: string;

    constructor(columns: number) {
        super();
        this.columns = columns;
    }

    setText = (t: string) => {
        this.t = t;
    }
}