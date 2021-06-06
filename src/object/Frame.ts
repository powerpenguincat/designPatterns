import { Color } from "./Color";
import { BorderLayout } from "./BorderLayout";
import { Component } from "./Component";

export class Frame extends Component {
    private title: string;
    private bgColor: Color;
    private mgr: BorderLayout;
    private northCompList: Component[] = [];
    private centerCompList: Component[] = [];
    private southCompList: Component[] = [];

    constructor(title: string) {
        super();
        this.title = title;
    }

    setBackground = (bgColor: Color): void => {
        this.bgColor = bgColor;
    }

    setLayout = (mgr: BorderLayout): void => {
        this.mgr = mgr;
    }

    addNorth = (comp: Component): void => {
        this.northCompList.push(comp);
    }

    addCenter = (comp: Component): void => {
        this.centerCompList.push(comp);
    }

    addSouth = (comp: Component): void => {
        this.southCompList.push(comp);
    }
}