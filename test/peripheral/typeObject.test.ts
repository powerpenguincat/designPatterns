import { Dragon, Troll } from "../../src/designPattern/peripheral/typeObject";

describe("種族などを表現する", ()=> {
    it("is if you summon a dragon.", () => {
        const dragon = new Dragon();
        expect(dragon.getAttack()).toBe("The dragon breathes fire!");
    });
    it("is if you summon a troll.", () => {
        const troll = new Troll();
        expect(troll.getAttack()).toBe("The troll clubs you!");
    })
});