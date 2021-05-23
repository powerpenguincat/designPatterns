import { MacroCommand, DrawCanvas } from "../../src/core/command";
import { JFrame } from "../../src/core/command/JFrame";
import { JButton } from "../../src/core/command/JButton";
import { Box } from "../../src/core/command/Box";

describe('', ()=> {
    it('shoud do this thing', () => {
        const frame: JFrame = new JFrame("title");
        const history: MacroCommand = new MacroCommand();
        const canvas: DrawCanvas = new DrawCanvas(400, 400, history);
        const clearButton: JButton = new JButton("clear");

        frame.addWindowListener(frame);
        canvas.addMouseMotionListener(frame);

        const buttonBox: Box = new Box("X_AXIS");
        buttonBox.add(clearButton);
        const mainBox: Box = new Box("Y_AXIS");
        mainBox.add(buttonBox);
        mainBox.add(canvas);
        frame.getContentPane().add(mainBox);

        frame.pack();
        frame.show();
    });
});
