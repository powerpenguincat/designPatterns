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

    setBackground = (bgColor: Color) => {
        this.bgColor = bgColor;
    }

    setLayout = (mgr: BorderLayout) => {
        this.mgr = mgr;
    }

    addNorth = (comp: Component) => {
        this.northCompList.push(comp);
    }

    addCenter = (comp: Component) => {
        this.centerCompList.push(comp);
    }

    addSouth = (comp: Component) => {
        this.southCompList.push(comp);
    }
}