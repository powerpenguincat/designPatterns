import { Component } from "./Component";

export class TextArea extends Component {
    private rows: number;
    private columns: number;
    private textList: string[];

    constructor(rows: number, columns: number) {
        super();
        this.rows = rows;
        this.columns = columns;
    }

    append = (str: string) => {
        this.textList.push(str);
    }
}