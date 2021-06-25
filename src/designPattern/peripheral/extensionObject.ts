export abstract class Subject {
    abstract operation1(): void;
    abstract getExteinsion(extensionType: string): Extension;
}

export abstract class Extension {
    protected owner: Subject;

    constructor(owner: Subject) {
        this.owner = owner;
    }

    abstract doSomething(): void;
}

export abstract class AbstractExtension extends Extension {
    constructor(owner: Subject) {
        super(owner);
    }
}

export class ConcreteExtension extends AbstractExtension {
    constructor(owner: Subject) {
        super(owner);
    }

    doSomething = (): void => {
        this.owner.operation1();
    }
}


export class ConcreteSubject extends Subject {
    private extension: ConcreteExtension;

    constructor() {
        super();
        this.extension = new ConcreteExtension(this);
    }

    operation1 = (): void => {
        // do something
    }

    getExteinsion = (extensionType: string): Extension => {
        if (extensionType === "some type") {
            return this.extension;
        }

        // null
        return new ConcreteExtension(new ConcreteSubject());
    }
}