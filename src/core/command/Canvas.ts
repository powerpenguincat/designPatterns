class Canvas {
    private _width: number;
    private _height: number;
    private _c: Color;

    setSize = (width: number, height: number): void => {
        this._width = width;
        this._height = height;
    };

    setBackground = (c: Color): void => {
        this._c = c;
    };

    getGraphics = (): Graphics => new Graphics();
}
