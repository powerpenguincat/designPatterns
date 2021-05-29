import { FileWriter } from "../core/java/FileWriter";
import { writer } from "repl";
import { PrintWriter } from "../core/java/PrintWriter";

export abstract class Builder {
    abstract makeTitle(title: string): void;
    abstract makeString(str: string): void;
    abstract makeItems(items: string[]): void;
    abstract close(): void;
}

export class Director {
    private builder: Builder;

    constructor(builder: Builder) {
        this.builder = builder;
    }

    construct = (): void => {
        this.builder.makeTitle("Greeting");
        this.builder.makeString("朝から昼かけて");
        this.builder.makeItems(["", ""]);
        this.builder.makeString("");
        this.builder.makeItems(["", "", "", ""]);
        this.builder.close();
    }
}

export class TextBuilder extends Builder {
    private buffer: string[] = [];

    makeTitle = (title: string): void => {
        this.buffer.push("==========================¥n");
        this.buffer.push(`『${title}』`)
        this.buffer.push("¥n");
    }

    makeString = (str: string): void => {
        this.buffer.push(`■${str}¥n`);
        this.buffer.push("¥n");
    }

    makeItems = (items: string[]): void => {
        items.forEach(x => this.buffer.push(`　・${x}¥n`));
    }

    close = (): void => {
        this.buffer.push("==========================¥n");
    }

    getResult = (): string => this.buffer.toString();
}

export class HTMLBuilder extends Builder {
    private filename: string;
    private writer: PrintWriter;

    makeTitle = (title: string): void => {
        this.filename = title + ".html";
        try {
            this.writer = new PrintWriter(new FileWriter(this.filename));
        } catch (e) {
        }
        this.writer.println(`<htmnl><head><title>${title}</title></head><body>`);
        this.writer.println(`<h1>${title}</h1>`);
    }

    makeString = (str: string): void => {
        this.writer.println(`<p>${str}</p>`);
    }

    makeItems = (items: string[]): void => {
        this.writer.println("<ul>");
        items.forEach(x => this.writer.println(`<li>${x}</li>`));
        this.writer.println("</ul>");
    }

    close = (): void => {
        this.writer.println("</body></html>");
        this.writer.close();
    }

    getResult = (): string => this.filename;
}