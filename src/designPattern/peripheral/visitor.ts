import { Iterator } from '../core/iterator';

export class EntryIterator implements Iterator {
    private strs: Entry[];
    private index: number;

    constructor(strs: Entry[]) {
        this.strs = strs;
        this.index = 0;
    }

    hasNext = (): boolean => this.index < this.strs.length;

    next = (): Object  => {
        const str: Entry = this.strs[this.index];
        this.index++;
        return str;
    }
}

export abstract class Visitor {
    abstract visit1(file: File): void;
    abstract visit2(directory: Directory): void;
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
    iterator = (): EntryIterator => {
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
        v.visit1(this);
    }
}

export class Directory extends Entry {
    private name: string;
    private dir: any[] = [];

    constructor(name: string) {
        super();
        this.name = name;
    }

    getName = (): string => this.name;

    getSize = (): number => {
        let size: number = 0;
        let it: EntryIterator = this.dir.iterator();
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

    iterator = (): EntryIterator => this.dir.iterator();

    accept = (v: Visitor): void => {
        v.visit2(this);
    }
}

export class ListVisitor extends Visitor {
    private currentdir: string = "";

    visit1 = (file: File): void => {
        console.log(`${this.currentdir}/${file}`);
    }
    visit2 = (directory: Directory): void => {
        console.log(`${this.currentdir}/${directory}`);
        const savedir: string = this.currentdir;
        this.currentdir = `${this.currentdir}/${directory.getName()}`
        const it: EntryIterator = directory.iterator();
        while (it.hasNext()) {
            const entry: Entry = it.next() as Entry;
            entry.accept(this);
        }
        this.currentdir = savedir;
    };
}
