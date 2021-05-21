abstract class Entry {
    abstract getName(): string;
    abstract printListBy(prefix: string);

    printList = (): string => this.printListBy("");
}

class FileEntry extends Entry {
    private name: string;

    constructor(name: string) {
        super();
        this.name = name;
    }

    getName = (): string => this.name;

    printListBy = (prefix: string) => console.log(`${prefix}/${this.name}`);
}

class DirectoryEntry extends Entry {
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
        for(const it of this.directory) {
            const entry: Entry = it as Entry;
            entry.printListBy(`${prefix}/${this.name}`);
        }
    }
}