import { getAnimal } from "../../src/peripheral/nullObject";

describe('nullObject test', ()=> {
    it('is a success case that animals sounds.', () => {
        const dogSound = getAnimal("dog").sound();
        expect(dogSound).toBe('bark');
    });
    it('is not a success case that animals sounds.', () => {
        const catSound = getAnimal("cat").sound();
        expect(catSound).toBe(null);
    });
    it('is a error case that animals doesnt sound.', () => {
        const nullSound = getAnimal(null).sound();
        expect(nullSound).toBe(null);
    });
});