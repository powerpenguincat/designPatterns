import { Color } from "./Color";

export class Graphics {
    private c: Color;

    setColor = (c: Color): void => {
        this.c = c;
    }

    fillOval(x: number, y: number, width: number, height: number): void {
        console.log(`Fills the ellipse (width: ${x} to ${x + width}, height: ${y} to ${y - height}) within the specified rectangle with ${this.c}.`);
    }
}
