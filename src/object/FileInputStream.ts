export class FileInputStream {
    private db: {[key: string]: string};

    constructor(db: {[key: string]: string}) {
        this.db = db;
    }

    load = (): {[key: string]: string} => this.db;
}