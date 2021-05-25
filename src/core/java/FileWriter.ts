import { Writer } from "./Writer";

export class FileWriter extends Writer {
    private fileName: string;

    constructor(fileName: string) {
        super();
        this.fileName = fileName;
    }
}