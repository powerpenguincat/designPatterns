import { Point } from "./Point";

export class ActionEvent {
    private source: unknown;

    getSource = (): unknown => this.source;
}

export class MouseEvent {
    private point: Point;

    getPoint = (): Point => this.point;
}

export class WindowEvent {
}

export class ItemEvent {
}