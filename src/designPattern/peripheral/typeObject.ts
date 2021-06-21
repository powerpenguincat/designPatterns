export class Monster {
    private health: number;

    constructor(startingHealth: number) {
        this.health = startingHealth;
    }

    getAttack = (): string => "";
}

export class Dragon extends Monster {   

    constructor() {
        super(230)
    }

    getAttack = (): string => "The dragon breathes fire!";
}

export class Troll extends Monster {

    constructor() {
        super(48)
    }

    getAttack = (): string => "The troll clubs you!";
}