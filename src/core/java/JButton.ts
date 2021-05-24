import { Component } from "./Component";

export class JButton extends Component {
    private text: string;

    constructor(text: string) {
        super();
        this.text = text;
    }
}