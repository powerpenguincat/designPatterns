import { Component } from "./Component";
import { ActionListener } from "./ActionListener";

export class Button extends Component {
    private label: string;

    constructor(label: string) {
        super();
        this.label = label;
    }

    addActionListener = (l: ActionListener): void => {
        console.log(`${l}`);
    }
}