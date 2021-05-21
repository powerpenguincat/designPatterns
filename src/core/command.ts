abstract class Entry {
    abstract getName(): string;
    // FIXME: to change protected function.
    abstract printListBy(prefix: string);

    printList = (): string => this.printListBy("");
}

export class FileEntry extends Entry {
    private name: string;

    constructor(name: string) {
        super();
        this.name = name;
    }

    getName = (): string => this.name;

    printListBy = (prefix: string) => console.log(`${prefix}/${this.name}`);
}

export class DirectoryEntry extends Entry {
    private name: string;
    private directory: Entry[] = [];

    constructor(name: string) {
        super();
        this.name = name;
    }

    getName = (): string => this.name;

    add = (entry: Entry): Entry => {
        this.directory.push(entry);
        return this;
    }

    printListBy = (prefix: string) => {
        console.log(`${prefix}/${this.name}`);
        for (const it of this.directory) {
            const entry: Entry = it;
            entry.printListBy(`${prefix}/${this.name}`);
        }
    }
}