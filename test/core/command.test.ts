import { MacroCommand, DrawCanvas, DrawCommand, Command } from "../../src/designPattern/core/command";
import { JFrame } from "../../src/object/JFrame";
import { JButton } from "../../src/object/JButton";
import { Box } from "../../src/object/Box";
import { ActionEvent, MouseEvent, WindowEvent } from "../../src/object/Events";

describe('１個の「もの」として表現する', ()=> {
    class Main extends JFrame {
        private history: MacroCommand = new MacroCommand();
        private canvas: DrawCanvas = new DrawCanvas(400, 400, this.history);
        private clearButton: JButton = new JButton("clear");

        constructor(title: string) {
            super(title);
            this.addWindowListener(this);
            this.canvas.addMouseMotionListener(this);

            const buttonBox: Box = new Box("X_AXIS");
            buttonBox.add(this.clearButton);
            const mainBox: Box = new Box("Y_AXIS");
            mainBox.add(buttonBox);
            mainBox.add(this.canvas);
            this.getContentPane().add(mainBox);
        
            this.pack();
            this.show();
        }

        actionPerformed = (e: ActionEvent): void => {
            if (e.getSource as unknown as JButton == this.clearButton) {
                this.history.clear();
                this.canvas.repaint();
            }
        }

        mouseDragged = (e: MouseEvent): void => {
            const cmd: Command = new DrawCommand(this.canvas, e.getPoint());
            this.history.append(cmd);
            cmd.execute();
        }

        windowClosing = (e: WindowEvent): void => {
            console.log(`System exit.`);
        }
    }

    it("is if you show the frame.", () => {
        new Main("Command Pattern Sample");
    });
});
