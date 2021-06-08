export abstract class Visitor {
    abstract visit(file: File): void;
    abstract visit(directory: Directory): void;
}

export interface Element {
    accept(v: Visitor): void;
}

export abstract class Entry implements Element {
    abstract getName(): string;
    abstract getSize(): number;
    add = (entry: Entry): Entry => {
        throw new Error("FileTreatmentException");
    }
    iterator = (): Iterator => {
        throw new Error("FileTreatmentException")
    }
    accept(v: Visitor): void {
        throw new Error("Method not implemented.");
    }
}

export class File extends Entry {
    private name: string;
    private size: number;

    constructor(name: string, size: number) {
        super();
        this.name = name;
        this.size = size;
    }

    getName = (): string => this.name;

    getSize = (): number => this.size;

    accept = (v: Visitor): void => {
        v.visit(this);
    }
}

export class Directory extends Entry {
    private name: string;
    private dir: Entry[] = [];

    constructor(name: string) {
        super();
        this.name = name;
    }

    getName = (): string => this.name;

    getSize = (): number => {
        let size: number = 0;
        it: Iterator = this.dir.iterator();
        while (it.hasNext()) {
            const entry: Entry = it.next() as Entry;
            size += entry.getSize();
        }
        return size;
    }

    add = (entry: Entry): Entry => {
        this.dir.push(entry);
        return this;
    }

    iterator = (): Iterator => this.dir.iterator();

    accept = (v: Visitor): void => {
        v.visit(this);
    }
}

export class ListVisitor extends Visitor {
    private currentdir: string = "";

    visit = (file: File): void => {
        console.log(`${this.currentdir}/${file}`);
    }
    visit = (directory: Directory): void => {
        console.log(`${this.currentdir}/${directory}`);
        const savedir: string = this.currentdir;
        this.currentdir = `${this.currentdir}/${directory.getName()}`
        const it: Iterator = directory.iterator();
        while (it.hasNext()) {
            const entry: Entry = it.next() as Entry;
            entry.accept(this);
        }
        this.currentdir = savedir;
    };
}
