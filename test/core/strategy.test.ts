import { Player, WinningStrategy, ProbStrategy, Hand } from "../../src/designPattern/core/strategy";

describe('', ()=> {
    it('is if Taro fight Hana in the game for ten times.', () => {
        const player1: Player = new Player("Taro", new WinningStrategy(0));
        const player2: Player = new Player("Hana", new ProbStrategy(0));

        const nuturalNum = (_: unknown, i: number): number => i;
        Array(10).fill(0).map(nuturalNum).forEach(x => {
            const nextHand1: Hand = player1.nextHand();
            const nextHand2: Hand = player2.nextHand();
            if (nextHand1.isStrongerThan(nextHand2)) {
                console.log(`Winner:${player1}`);
                player1.win();
                player2.lose();
            } else if (nextHand2.isStrongerThan(nextHand1)) {
                console.log(`Winner:${player2}`);
                player1.lose();
                player2.win();
            } else {
                console.log("Even...");
                player1.even();
                player2.even();
            }
        });
        console.log("Total result:");
        console.log(player1.toString());
        console.log(player2.toString());
    });
});