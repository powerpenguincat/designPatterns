import { Component } from "./Component";
import { BoxLayout } from "./BoxLayout";

export class Box extends Component {
    private axis: BoxLayout;

    constructor(axis: BoxLayout) {
        super();
        this.axis = axis;
    }
}