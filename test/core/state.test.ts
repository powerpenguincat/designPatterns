import { SafeFrame } from "../../src/core/state";

describe('状態をクラスとして表現する', ()=> {
    it('is if you count up times.', () => {
        const frame: SafeFrame = new SafeFrame("State Sampel");
        const nuturalNum = (_: unknown, i: number): number => i;
        Array(24).fill(0).map(nuturalNum).forEach(async hour => {
            frame.setClock(hour);
            try {
                await new Promise(resolve => setTimeout(resolve, 1000));
            } catch (e) {
            }
        })
    });
});