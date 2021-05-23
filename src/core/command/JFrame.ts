import { Component } from "./Component";
import { ContentPane } from "./ContentPane";

export class JFrame extends Component {
    private title: string;
    private contentPane: ContentPane = new ContentPane();

    constructor(title: string) {
        super();
        this.title = title;
    }

    getContentPane = (): ContentPane => this.contentPane;
}