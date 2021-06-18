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
        const length: number = s.length;
        [...Array(length + 4)].forEach(x => console.log(this.decochar));
        console.log("");
    }

    createClone = (): Product => {
        let p: Product = null;
        try {
            p = null as Product;
        } catch (e) {
            console.log(e);
        }

        return p;
    }
}

export class UnderlinePen implements Product {
    private ulchar: string;

    constructor(ulchar: string) {
        this.ulchar = ulchar;
    }

    use = (s: string): void => {
        const length: number = s.length;
        console.log(`¥${s}¥`);
        console.log("");
        [...Array(length)].forEach(x => console.log(this.ulchar));
        console.log("")
    }

    createClone = (): Product => {
        let p: Product = null;
        try {
            p = null as Product;
        } catch (e) {
            console.log(e);
        }
        return p;
    }    
}