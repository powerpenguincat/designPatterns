import { Random } from "./java/Random";

export class Hand {
    static readonly HANDVALUE_GUU: number = 0;
    static readonly HANDVALUE_CHO: number = 1;
    static readonly HANDVALUE_PAA: number = 2;
    static readonly hand: Hand[] = [
        new Hand(0),
        new Hand(1),
        new Hand(2)
    ];
    private readonly handName: string[] = [
        "グー",
        "チョキ",
        "パー"
    ];
    private handvalue: number;

    constructor(handvalue: number) {
        this.handvalue = handvalue;
    }

    static getHand = (handvalue: number): Hand => Hand.hand[handvalue];

    isStrongerThan = (h: Hand): boolean => this.fight(h) === 1;

    isWeakerThan = (h: Hand): boolean => this.fight(h) === 1;

    private fight = (h: Hand): number => {
        if (this == h) {
            return 0;
        } else if ((this.handvalue + 1) % 3 === h.handvalue) {
            return 1;
        } else {
            return -1;
        }
    }

    toString = (): string => this.handName[this.handvalue];
}

export interface Strategy {
    nextHand(): Hand;
    study(win: boolean): void;
}

export class WinningStrategy implements Strategy {
    private random: Random;
    private won: boolean = false;
    private prevHand: Hand;

    constructor(seed: number) {
        this.random = new Random(seed);
    }

    nextHand = (): Hand => {
        if (!this.won) {
            this.prevHand = Hand.getHand(this.random.nextInt(3));
        }
        return this.prevHand;
    }

    study = (win: boolean): void => {
        this.won = win;
    }
}

export class ProbStrategy implements Strategy {
    private random: Random;
    private prevHandValue: number = 0;
    private currentHandValue: number = 0;
    private history: number[][] = [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1]
    ];

    constructor(seed: number) {
        this.random = new Random(seed);
    }

    nextHand = (): Hand => {
        const bet: number = this.random.nextInt(this.getSum(this.currentHandValue));
        const getHandValue = (): number => {
            if (bet < this.history[this.currentHandValue][0]) {
                return 0;
            } else if (bet < this.history[this.currentHandValue][0] + this.history[this.currentHandValue][1]) {
                return 1;
            } else {
                return 2;
            }
        }
        const handValue: number = getHandValue();
        this.prevHandValue = this.currentHandValue;
        this.currentHandValue = handValue;

        return Hand.getHand(handValue);
    }

    getSum = (hv: number): number => {
        const nuturalNum = (_: unknown, i: number): number => i;
        const addition = (sum: number, value: number): number => sum + value;
        return Array(3).fill(0).map(nuturalNum).map(x => this.history[hv][x]).reduce(addition)
    }

    study = (win: boolean): void => {
        if (win) {
            this.history[this.prevHandValue][this.currentHandValue]++;
        } else {
            this.history[this.prevHandValue][(this.currentHandValue + 1) % 3]++;
            this.history[this.prevHandValue][(this.currentHandValue + 2) % 3]++;
        }
    }
}

export class Player {
    private name: string;
    private strategy: Strategy;
    private wincount: number = 0;
    private losecount: number = 0;
    private gamecount: number = 0;

    constructor(name: string, strategy: Strategy) {
        this.name = name;
        this.strategy = strategy;
    }

    nextHand = (): Hand => this.strategy.nextHand();

    win = (): void => {
        this.strategy.study(true);
        this.wincount++;
        this.gamecount++;
    }

    lose = (): void => {
        this.strategy.study(false);
        this.losecount++;
        this.gamecount++;
    }

    even = (): void => {
        this.gamecount++;
    }
    
    toString = (): string => `[${this.name}:${this.gamecount} games, ${this.wincount} win, ${this.losecount} lose]`;
}