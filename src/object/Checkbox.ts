import { CheckboxGroup } from "./CheckboxGroup";
import { Component } from "./Component";
import { ItemListener } from "./ItemListener";
import { TextListener } from "./TextListener";

export class Checkbox extends Component {
    private label: string;
    private group: CheckboxGroup;
    private state: boolean;

    constructor(label: string, group: CheckboxGroup, state: boolean) {
        super();
        this.label = label;
        this.group = group;
        this.state = state;
    }

    getState = (): boolean => this.state;
}