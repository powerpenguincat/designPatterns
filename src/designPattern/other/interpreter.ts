export abstract class Node {
    abstract parse(context: Context): void;
}

export class ProgramNode extends Node {
    private commandListNode: Node = new ProgramNode();

    parse = (context: Context): void => {
        context.skipToken("program");
        this.commandListNode = new CommandListNode();
        this.commandListNode.parse(context);
    }

    toString = (): string => `[program${this.commandListNode}]`;
}

export class CommandListNode extends Node {
    private list: Node[] = [];

    parse = (context: Context): void => {
        while (true) {
            if (context.currentToken() == null) {
                throw new Error("Missing 'end");
            } else if (context.currentToken() === "end") {
                context.skipToken("end");
                break;
            } else {
                const commandNode: Node = new CommandNode();
                commandNode.parse(context);
                this.list.push(commandNode);
            }
        }
    }
}

export class CommandNode extends Node {
    private node: Node = new CommandNode();

    parse = (context: Context): void => {
        if (context.currentToken() === "repeat") {
            this.node = new RepeatCommandNode();
            this.node.parse(context);
        } else {
            this.node = new PrimitiveCommandNode();
            this.node.parse(context);
        }
    }

    toString = (): string => this.node.toString();
}

export class RepeatCommandNode extends Node {
    private number: number = 0;
    private commandListNode: Node = new RepeatCommandNode();

    parse = (context: Context): void => {
        context.skipToken("repeat");
        this.number = context.currentNumber();
        context.nextToken();
        this.commandListNode = new CommandListNode();
        this.commandListNode.parse(context);
    }

    toString = (): string => `[repeat${this.number} commandListNode]`;
}

export class PrimitiveCommandNode extends Node {
    private name: string = "";

    parse = (context: Context): void => {
        this.name = context.currentToken();
        context.skipToken(this.name);
        if (!(this.name === "go") && !(this.name === "right") && !(this.name === "left")) {
            throw new Error(`${this.name} is undefined.`)
        }
    }
}

export class Context {
    private tokenizer: string;
    private _currentToken: string = "0";

    constructor(text: string) {
        this.tokenizer = text;
        this.nextToken();
    }

    nextToken = (): string => {
        if (this.tokenizer) {
            this._currentToken = this.tokenizer;
        } else {
            this._currentToken = "";
        }
        return this._currentToken;
    }

    currentToken = (): string => this._currentToken;

    skipToken = (token: string) => {
        if (!(token === this._currentToken)) {
            throw new Error(`Warning: ${token} is expected, but ${this._currentToken} is found.`);
        }
        this.nextToken();
    }

    currentNumber = (): number => {
        let number = 0;
        try {
            number = Number(this._currentToken);
        } catch (e) {
            throw new Error(`Warning: ${e}`);
        }
        return number;
    }
}