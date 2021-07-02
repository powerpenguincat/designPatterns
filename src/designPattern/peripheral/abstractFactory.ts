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

interface Constructable<T> extends Function {
    new (...args: any[]): T;
}
export abstract class Factory {
    static getFactory = (classname: string): Factory => {
        const factories: Constructable<Factory>[] = [];
        factories.push(ListFactory, TableFactory);
        const factory = factories.find((e) => e.name === classname);
        if (factory) {
            return new factory();
        } else {
            throw new Error();
        }
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

    makeHTML = (): string => `<li><a href="${this.url}">${this.captioin}</a></li>`;
}

export class ListTray extends Tray {
    constructor(caption: string) {
        super(caption);
    }

    makeHTML = (): string => {
        const sum = (x: string, y: string): string => x + y;
        let result: string = "";
        result += `<li>`;
        result += `${this.captioin}`;
        result += `<ul>`;
        result += this.tray.map(x => x.makeHTML()).reduce(sum);
        result += `</ul>`;
        result += `<li>`;
        return result;
    };
}

export class ListPage extends Page {
    constructor(title: string, author: string) {
        super(title, author);
    }

    makeHTML = (): string => {
        const sum = (x: string, y: string): string => x + y;
        let result = "";
        result += `<html><head><title>${this.title}</title></head>`;
        result += `<body>`;
        result += `<h1>${this.title}</h1>`;
        result += `<ul>`;
        result += this.content.map(x => x.makeHTML()).reduce(sum);
        result += `</ul>`;
        result += `<hr><address>${this.author}</address>`;
        result += `</body></html>`;
        return result;
    }
}

export class TableFactory extends Factory {
    createLink = (caption: string, url: string): Link => new TableLink(caption, url);
    createTray = (caption: string): Tray => new TableTray(caption);
    createPage = (title: string, author: string): Page => new TablePage(title, author);
}

export class TableLink extends Link {
    constructor(caption: string, url: string) {
        super(caption, url);
    }

    makeHTML = (): string => `<td><a href="${this.url}">${this.captioin}</a></td>`;
}

export class TableTray extends Tray {
    constructor(caption: string) {
        super(caption);
    }

    makeHTML = (): string => {
        const sum = (x: string, y: string): string => x + y;
        let result: string = "";
        result += `<td>`;
        result += `<table width="100%" border="1"><tr>`;
        result += `<td bgcolor="#cccccc" align="center" colspan="${this.tray.length}"><b>${this.captioin}</b></td>`;
        result += `</tr>`;
        result += this.tray.map(x => x.makeHTML()).reduce(sum);
        result += `<tr>`;
        result += `</tr><table>`;
        result += `<td>`;
        return result;
    }
}

export class TablePage extends Page {
    constructor(title: string, author: string) {
        super(title, author);
    }

    makeHTML = (): string => {
        const sum = (x: string, y: string): string => x + y;
        let result: string = "";
        result += `<html><head><title>${this.title}</title></head>`;
        result += `<body>`;
        result += `<h1>${this.title}</h1>`;
        result += `<ul>`;
        result += this.content.map(x => x.makeHTML()).reduce(sum);
        result += `</ul>`;
        result += `<hr><address>${this.author}</address>`;
        result += `</body></html>`;
        return result;
    }
}
