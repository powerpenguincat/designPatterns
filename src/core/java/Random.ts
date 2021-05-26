export class Random {
    private seed: number;

    constructor(seed: number) {
        this.seed = seed;
    }

    nextInt = (bound: number): number => Math.floor(Math.random() * bound);
}