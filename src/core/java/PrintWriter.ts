import { Writer } from "./Writer";

export class PrintWriter extends Writer {
    private out: Writer;

    constructor(out: Writer) {
        super();
        this.out = out;
    }

    println = (x: string): void => {
        console.log(x);
    }
}