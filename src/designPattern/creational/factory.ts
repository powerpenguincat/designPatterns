export abstract class Product {
    abstract use(): void;
}

export abstract class Factory {
    readonly create = (owner: string): Product => {
        const p: Product = this.createrProduct(owner);
        this.registerProduct(p);
        return p;
    }
    abstract createrProduct(owner: string): Product;
    abstract registerProduct(product: Product): void;
}

export class IDCard extends Product {
    private owner: string;

    constructor(owner: string) {
        super();
        console.log(`${owner}のカードを作ります。`);
        this.owner = owner;
    }

    use = (): void => {
        console.log(`${this.owner}のカードを使います。`);
    }

    getOwner = (): string => this.owner;
}

export class IDCardFactory extends Factory {
    private owners: string[] = [];

    createrProduct = (owner: string): Product => new IDCard(owner);

    registerProduct = (product: Product): void => {
        this.owners.push((product as IDCard).getOwner());
    }
}