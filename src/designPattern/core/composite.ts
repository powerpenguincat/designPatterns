abstract class Entry {
    abstract getName(): string;
    abstract getSize(): number;
    add = (entry: Entry): Entry => {
        throw new Error("FileTreatmentException");
    };
    // FIXME: to change protected function.
    abstract printListBy(prefix: string): void;

    printList = (): void => this.printListBy("");

    // これによりクラス自体をconsole出力することができる
    toString = (): string => `${this.getName()} (${this.getSize()})`;
}

export class FileEntry extends Entry {
    private name: string;
    private size: number;

    constructor(name: string, size: number) {
        super();
        this.name = name;
        this.size = size;
    }

    getName = (): string => this.name;

    getSize = (): number => this.size;

    printListBy = (prefix: string): void => console.log(`${prefix}/${this}`);
}

export class DirectoryEntry extends Entry {
    private name: string;
    private directory: Entry[] = [];

    constructor(name: string) {
        super();
        this.name = name;
    }

    getName = (): string => this.name;

    getSize = (): number => {
        const addition = (sum: number, value: number): number => sum + value;
        return this.directory.map((it: Entry) => it.getSize()).reduce(addition, 0);
    }

    add = (entry: Entry): Entry => {
        this.directory.push(entry);
        return this;
    }

    printListBy = (prefix: string): void => {
        console.log(`${prefix}/${this}`);
        this.directory.forEach((it: Entry) => it.printListBy(`${prefix}/${this.name}`));
    }
}