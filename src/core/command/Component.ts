import { Color } from "./Color";
import { Graphics } from "./Graphics";

export class Component {
    private _width: number;
    private _height: number;
    private _backC: Color;
    private _grahics: Graphics = new Graphics();

    setSize = (width: number, height: number): void => {
        this._width = width;
        this._height = height;
    };

    setBackground = (c: Color): void => {
        this._backC = c;
    };

    getGraphics = (): Graphics => this._grahics;

    add = (comp: Component): void => {
        console.log(`Add a component.`);
    }

    addMouseMotionListener = (l: Component): void => {
        console.log(`Add a mouse motion.`);
    }

    addWindowListener = (l: Component): void => {
        console.log(`Add a window.`);
    }

    pack = (): void => {
        console.log(`Pack it.`);
    }

    show = (): void => {
        console.log(`Show it.`);
    }
}