import { TextField } from "../../object/TextField";
import { TextArea } from "../../object/TextArea";
import { Frame } from "../../object/Frame";
import { Button } from "../../object/Button";
import { ActionEvent } from "../../object/Events";
import { BorderLayout } from "../../object/BorderLayout";
import { Panel } from "../../object/Panel";
import { ActionListener } from "../../object/ActionListener";

export interface State {
    doClock(context: Context, hour: number): void;
    doUse(context: Context): void;
    doAlarm(context: Context): void;
    doPhone(context: Context): void;
}

export class DayState implements State {
    private constructor() {
    }

    static getInstance = (): State => new DayState();

    doClock = (context: Context, hour: number): void => {
        if (hour < 9 || 17 <= hour) {
            context.changeState(NightState.getInstance());
        }
    }

    doUse = (context: Context): void =>  {
        context.recordLog("金庫使用（昼間）");
    }

    doAlarm = (context: Context): void => {
        context.callSecurityCenter("非常ベル（昼間）");
    }

    doPhone = (context: Context): void => {
        context.callSecurityCenter("通常の通話（昼間）");
    }

    toString = (): string => "［昼間］";
}

export class NightState implements State {
    private constructor() {
    }

    static getInstance = (): State => new NightState();

    doClock = (context: Context, hour: number): void => {
        if (9 <= hour && hour < 17) {
            context.changeState(DayState.getInstance());
        }
    }

    doUse = (context: Context): void => {
        context.recordLog("非常：夜間の金庫使用");
    }

    doAlarm = (context: Context): void => {
        context.callSecurityCenter("非常ベル（夜間）");
    }

    doPhone = (context: Context): void => {
        context.callSecurityCenter("通常の通話録音");
    }

    toString = (): string => "［夜間］";
}

export interface Context {
    setClock(hour: number): void;
    changeState(state: State): void;
    callSecurityCenter(msg: string): void;
    recordLog(msg: string): void;
}

export class SafeFrame extends Frame implements ActionListener, Context {
    private textClock: TextField = new TextField(60);
    private textScreen: TextArea = new TextArea(10, 60);
    private buttonUse: Button = new Button("金庫使用");
    private buttonAlarm: Button = new Button("非常ベル");
    private buttonPhone: Button = new Button("通常通話");
    private buttonExit: Button = new Button("終了");
    private state: State = DayState.getInstance();

    constructor(title: string) {
        super(title);
        this.setBackground('lightGray');
        this.setLayout(new BorderLayout());
        this.addNorth(this.textClock);
        this.textClock.setEditable(false);
        this.addCenter(this.textScreen);
        this.textScreen.setEditable(false);
        const panel: Panel = new Panel();
        panel.add(this.buttonUse);
        panel.add(this.buttonAlarm);
        panel.add(this.buttonPhone);
        panel.add(this.buttonExit);
        this.addSouth(panel);
        this.pack();
        this.show();
        this.buttonUse.addActionListener(this);
        this.buttonAlarm.addActionListener(this);
        this.buttonPhone.addActionListener(this);
        this.buttonExit.addActionListener(this);
    }

    actionPerformed = (e: ActionEvent): void => {
        console.log(e.toString());
        if (e.getSource() === this.buttonUse) {
            this.state.doUse(this);
        } else if (e.getSource() === this.buttonAlarm) {
            this.state.doAlarm(this);
        } else if (e.getSource() === this.buttonPhone) {
            this.state.doPhone(this);
        } else if (e.getSource() === this.buttonExit) {
            console.log("0");
        } else {
            console.log("?");
        }
    }

    setClock = (hour: number): void => {
        let clockstring: string = "";
        if (hour < 10) {
            clockstring += `0${hour}:00`;
        } else {
            clockstring += `${hour}:00`;
        }
        console.log(clockstring);
        this.textClock.setText(clockstring);
        this.state.doClock(this, hour);
    }

    changeState = (state: State): void => {
        console.log(`${this.state}から${state}へ状態が変化しました。`);
        this.state = state;
    }

    callSecurityCenter = (msg: string): void => {
        this.textScreen.append(`call! ${msg}¥n`)
    }

    recordLog = (msg: string): void => {
        this.textScreen.append(`record ... ${msg}¥n`)
    }
}