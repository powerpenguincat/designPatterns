interface Command {
    execute(): void;
}

export class MacroCommand implements Command {
    private commands: Command[] = [];

    execute = (): void => this.commands.forEach((it: Command) => it.execute());

    append = (cmd: Command): void => {
        if (cmd != this) {
            this.commands.push(cmd);
        }
    };

    undo = (): void => {
        if (!this.commands) {
            this.commands.pop();
        }
    };

    clear = (): void => {
        this.commands = [];
    };
}

export class DrawCommand implements Command {
    protected drawable: Drawable;
    private position: Point;

    constructor(drawable: Drawable, position: Point) {
        this.drawable = drawable;
        this.position = position;
    }

    execute = (): void => this.drawable.draw(this.position.x, this.position.y);
}

interface Drawable {
    draw(x:number, y:number): void;
}

export class DrawCanvas extends Canvas implements Drawable {
    private color: Color = 'red';
    private radius: number = 6;
    private history: MacroCommand;

    constructor(width: number, height: number, history: MacroCommand) {
        super();
        this.setSize(width, height);
        this.setBackground('white');
        this.history = history;
    }

    paint(g: Graphics): void {
        this.history.execute();
    };

    draw(x: number, y: number): void {
        const g: Graphics = this.getGraphics();
        g.setColor(this.color);
        g.fillOval(x - this.radius, y - this.radius, this.radius * 2, this.radius * 2);
    };
}
