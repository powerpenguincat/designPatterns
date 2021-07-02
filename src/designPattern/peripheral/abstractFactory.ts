import { Writer } from "../../object/Writer";
import { FileWriter } from "../../object/FileWriter";

export abstract class Item {
    captioin: string;

    constructor(caption: string) {
        this.captioin = caption;
    }

    abstract makeHTML(): string;
}

export abstract class Link extends Item {
    url: string;

    constructor(caption: string, url: string) {
        super(caption);
        this.url = url;
    }
}

export abstract class Tray extends Item {
    tray: Item[] = [];
    
    constructor(caption: string) {
        super(caption);
    }

    add = (item: Item) => {
        this.tray.push(item);
    }
}

export abstract class Page {
    title: string;
    author: string;
    content: Item[] = [];

    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
    }

    add = (item: Item): void => {
        this.content.push(item);
    }

    output = (): void => {
        try {
            const filename: string = `${this.title}.html`;
            const writer: Writer = new FileWriter(filename);
            writer.close();
            console.log(`${filename} を作成しました。`);
        } catch (e) {
        }
    }
    
    abstract makeHTML(): string;
}

export abstract class Factory {
    static getFactory = (classname: string): Factory => {
        const factory = new Factory();
        return factory;
    }

    abstract createLink(caption: string, url: string): Link;
    abstract createTray(caption: string): Tray;
    abstract createPage(title: string, author: string): Page;
}

export class ListFactory extends Factory {
    createLink = (caption: string, url: string): Link => new ListLink(caption, url);
    createTray = (caption: string): Tray => new ListTray(caption);
    createPage = (title: string, author: string): Page => new ListPage(title, author);
}

export class ListLink extends Link {
    constructor(caption: string, url: string) {
        super(caption, url);
    }

    makeHTML = (): string => `  <li><a href=${this.url}>${this.captioin}</a></li>`;
}

export class ListTray extends Tray {
    constructor(caption: string) {
        super(caption);
    }

    makeHTML = (): string => `<li>${this.captioin}<ul></ul><li>`
}
