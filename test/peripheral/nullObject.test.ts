import { getAnimal } from "../../src/peripheral/nullObject";

describe("未知の選択が行われても同じように動かす", ()=> {
    it("is if you choose an animal that is on the list.", () => {
        const dogSound: string = getAnimal("dog").sound();
        expect(dogSound).toBe('bark');
    });
    it("is if you choose an animal that is not on the list.", () => {
        const catSound: string = getAnimal("cat").sound();
        expect(catSound).toBe(null);
    });
    it("is if you have not chosen an animal.", () => {
        const nullSound: string = getAnimal(null).sound();
        expect(nullSound).toBe(null);
    });
});