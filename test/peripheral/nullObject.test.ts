import { getAnimal } from "../../src/designPattern/peripheral/nullObject";

describe("未知の選択が行われても同じように動かす", ()=> {
    it("is if you choose an animal that is on the list.", () => {
        const dogSound: string | null = getAnimal("dog").sound();
        expect(dogSound).toBe('bark');
    });
    it("is if you choose an animal that is not on the list.", () => {
        const catSound: string | null = getAnimal("cat").sound();
        expect(catSound).toBe(null);
    });
    it("is if you have not chosen an animal.", () => {
        const nullSound: string | null = getAnimal(null).sound();
        expect(nullSound).toBe(null);
    });
});