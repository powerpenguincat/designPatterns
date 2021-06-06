import { Color } from "./Color";
import { Graphics } from "./Graphics";

export class Component {
    private _width: number;
    private _height: number;
    private _backC: Color;
    private _graphics: Graphics = new Graphics();
    private _components: Component[] = [];
    private _texts: Component[] = [];
    private _items: Component[] = [];
    private _mouseMotions: Component[] = [];
    private _windows: Component[] = [];
    private _editable: boolean;
    private _enable: boolean;

    setSize = (width: number, height: number): void => {
        this._width = width;
        this._height = height;
    };

    setBackground = (c: Color): void => {
        this._backC = c;
    };

    setEditable = (b: boolean): void => {
        this._editable = b;
    }

    setEnabled = (b: boolean): void => {
        this._enable = b;
    }

    getGraphics = (): Graphics => this._graphics;

    add = (comp: Component): void => {
        this._components.push(comp);
    }

    addTextListener = (l: Component): void => {
        this._texts.push(l);
    }

    addItemListener = (l: Component): void => {
        this._items.push(l);
    }

    addMouseMotionListener = (l: Component): void => {
        this._mouseMotions.push(l);
    }

    addWindowListener = (l: Component): void => {
        this._windows.push(l);
    }

    pack = (): void => {
        console.log(`Pack it.`);
    }

    show = (): void => {
        console.log(`Show it.`)
        console.log(`
        --
            size: (width: ${this._width}, height: ${this._height})
            background color: ${this._backC}
            components:
              ${this._components}
            mouseMotions:
              ${this._mouseMotions}
            windows:
              ${this._windows}
        --`);
    }

    repaint = (): void => {
        console.log(`Repaint it.`);
    }

    toString = (): string => {
        return `{
                size: (width: ${this._width}, height: ${this._height})
                background color: ${this._backC}
              }`;
    }
}