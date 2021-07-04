import { Cloneable } from "../../object/Cloneable";

export interface Product extends Cloneable {
    use(s: string): void;
    createClone(): Product;
}

export class Manager {
    private showcase: Map<string, Product> = new Map();

    register = (name: string, proto: Product): void => {
        this.showcase.set(name, proto);
    }

    create = (protoname: string): Product => {
        const p: Product = this.showcase.get(protoname) as Product;
        return p.createClone();
    }
}

export class MessageBox implements Product {
    private decochar: string;

    constructor(decochar: string) {
        this.decochar = decochar;
    }

    use = (s: string): void => {
        const sum = (x: string, y: string): string => x + y;
        const length: number = s.length;
        console.log([...Array(length + 4)].map(x => this.decochar).reduce(sum));
        console.log("");
    }

    createClone = (): Product => {
        return new MessageBox(this.decochar);
    }
}

export class UnderlinePen implements Product {
    private ulchar: string;

    constructor(ulchar: string) {
        this.ulchar = ulchar;
    }

    use = (s: string): void => {
        const sum = (x: string, y: string): string => x + y;
        const length: number = s.length;
        console.log(`¥${s}¥`);
        console.log("");
        console.log([...Array(length)].map(x => this.ulchar).reduce(sum));
        console.log("");
    }

    createClone = (): Product => {
        return new UnderlinePen(this.ulchar);
    }
}