export class BigChar {
    private charname: string;
    private fontdata!: string;

    constructor(charname: string) {
        this.charname = charname;
    }

    print = (): void => {
        console.log(this.fontdata);
    }
}

export class BigCharFactory {
    private constructor() {
    }
}

export class BigString {
    private bigchars: BigChar[];

    constructor(string: string) {
    }

    print = (): void => {
        this.bigchars.forEach(bigchar => {
            console.log(bigchar);
        })
    }
}