import { Properties } from "./java/Properties";
import { FileInputStream } from "./java/FileInputStream";
import { Writer } from "./java/Writer";
import { FileWriter } from "./java/FileWriter";

export class Database {
    private constructor() {
    }

    static getProperties = (db: {[key: string]: string}): Properties => {
        const prop: Properties = new Properties();
        try {
            prop.load(new FileInputStream(db));
        } catch (e) {
            console.log(`Warning: data is not found.`);
        }
        return prop;
    }
}

export const maildata: {[key: string]: string} = {
    "hyuki(a)hyuki.com": "Hiroshi Yuki",
    "hanako(a)hyuki.com": "Hanako Sato",
    "tomura(a)hyuki.com": "Tomura",
    "mamoru(a)hyuki.com": "Mamoru Takahashi"
};

export class HtmlWriter {
    private writer: Writer;

    constructor(writer: Writer) {
        this.writer = writer;
    }

    title = (title: string): void => {
        this.writer.write(`<html>`);
        this.writer.write(`<head>`);
        this.writer.write(`<title>${title}</title>`);
        this.writer.write(`</head>`);
        this.writer.write(`<body>¥n`);
        this.writer.write(`<h1>${title}</h1>¥n`);
    }

    paragraph = (msg: string): void => {
        this.writer.write(`<p>${msg}</p>¥n`);
    }

    link = (href: string, caption: string): void => {
        this.paragraph(`<a href=${href}>${caption}</a>`);
    }

    mailto = (mailaddr: string, username: string): void => {
        this.link(`mailto:${mailaddr}`, username);
    }

    close = (): void => {
        this.writer.write(`</body>`);
        this.writer.write(`</html>¥n`);
        this.writer.close();
    }
}

export class PageMaker {
    private constructor() {
    }

    static makeWelcomePage = (mailaddr: string, filename: string): void => {
        try {
            const mailprop: Properties = Database.getProperties(maildata);
            const username: string = mailprop.getPropety(mailaddr);
            const writer: HtmlWriter = new HtmlWriter(new FileWriter(filename));
            writer.title(`Welcome to ${username}'s page!`)
            writer.paragraph(`${username}のページへようこそ。`);
            writer.paragraph(`メールまっていますね。`);
            writer.mailto(mailaddr, username);
            writer.close();
            console.log(`${filename} is created for ${mailaddr} (${username})`);
        } catch (e) {
        }
    }
}