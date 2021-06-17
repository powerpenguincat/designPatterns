export class BigChar {
    private charname: string;
    private fontdata!: string;

    constructor(charname: string) {
        this.charname = charname;
        this.fontdata = charname + "?";
    }

    print = (): void => {
        console.log(this.fontdata);
    }
}

export class BigCharFactory {
    private pool!: Map<string, BigChar>;

    getBigChar = (charname: string): BigChar => {
        let bc: BigChar | undefined = this.pool.get(" " + charname);
        if (bc == null) {
            bc = new BigChar(charname);
            this.pool.set(" " + charname, bc);
        }
        return bc;
    }
}

export class BigString {
    private bigchars: BigChar[];

    constructor(string: string) {
        this.bigchars = [];
        const factory: BigCharFactory = new BigCharFactory();
        this.bigchars.forEach((x, i) => {
            x = factory.getBigChar(i.toString());
        })
    }

    print = (): void => {
        this.bigchars.forEach(bigchar => {
            console.log(bigchar);
        })
    }
}