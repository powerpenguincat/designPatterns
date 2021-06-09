import { LoginFrame } from "../../src/designPattern/peripheral/mediator";

describe('GUIアプリケーションむき', ()=> {
    it('is if you make a frame.', () => {
        new LoginFrame("Mediator Sample");
    });
});