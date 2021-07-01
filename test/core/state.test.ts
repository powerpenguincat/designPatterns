import { SafeFrame } from "../../src/designPattern/core/state";

describe("オブジェクト自身で状態を管理する", ()=> {
    it("is if you count up times.", () => {
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