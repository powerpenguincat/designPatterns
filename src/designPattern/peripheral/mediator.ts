import { Button } from "../../object/Button";
import { TextListener } from "../../object/TextListener";
import { TextFieldWithText } from "../../object/TextField";
import { Checkbox } from "../../object/Checkbox";
import { ItemListener } from "../../object/ItemListener";
import { CheckboxGroup } from "../../object/CheckboxGroup";
import { ActionListener } from "../../object/ActionListener";
import { Frame } from "../../object/Frame";
import { ActionEvent, ItemEvent } from "../../object/Events";
import { GridLayout } from "../../object/GridLayout";

export interface Mediator {
    createColleagues(): void;
    colleagueChanged(): void;
}

export interface Colleague {
    setMediator(mediator: Mediator): void;
    setColleagueEnabled(enabled: boolean): void;
}

export class ColleagueButton extends Button implements Colleague {
    private mediator: Mediator;

    constructor(caption: string) {
        super(caption);
    }
 
    setMediator = (mediator: Mediator): void => {
        this.mediator = mediator;
    }

    setColleagueEnabled = (enabled: boolean): void => {
        this.setEnabled(enabled);
    }
}

export class ColleagueTextFeild extends TextFieldWithText implements TextListener, Colleague {
    private mediator: Mediator;

    constructor(text: string, columns: number) {
        super(text, columns);
    }

    setMediator = (mediator: Mediator): void => {
        this.mediator = mediator;
    }

    setColleagueEnabled = (enabled: boolean): void => {
        this.setEnabled(enabled);
        this.setBackground(enabled ? 'white' : 'lightGray');
    }

    textValueChanged = (e: TextEvent): void => {
        this.mediator.colleagueChanged();
    }
}

export class ColleagueCheckbox extends Checkbox implements ItemListener, Colleague {
    private mediator: Mediator;

    constructor(caption: string, group: CheckboxGroup, state: boolean) {
        super(caption, group, state);
    }

    setMediator = (mediator: Mediator): void => {
        this.mediator = mediator;
    }

    setColleagueEnabled = (enabled: boolean): void => {
        this.setEnabled(enabled);
    }

    itemStateChanged(e: ItemEvent) {
        this.mediator.colleagueChanged();
    }
}

export class LoginFrame extends Frame implements ActionListener, Mediator {
    private checkGuest: ColleagueCheckbox;
    private checkLogin: ColleagueCheckbox;
    private textUser: ColleagueTextFeild;
    private textPass: ColleagueTextFeild;
    private buttonOk: ColleagueButton;
    private buttonCancel: ColleagueButton;

    constructor(title: string) {
        super(title);
        this.setBackground('lightGray');
        this.setLayout(new GridLayout(4, 2));
        this.createColleagues();
        this.add(this.checkGuest);
        this.add(this.checkLogin);
        this.add(this.textPass);
        this.add(this.textUser);
        this.add(this.buttonCancel);
        this.colleagueChanged();
        this.pack();
        this.show();
    }

    createColleagues = (): void => {
        const g: CheckboxGroup = new CheckboxGroup();
        this.checkGuest = new ColleagueCheckbox("Guest", g, true);
        this.checkLogin = new ColleagueCheckbox("Login", g, false);
        this.textUser = new ColleagueTextFeild("", 10);
        this.textPass = new ColleagueTextFeild("", 10);
        this.textPass.setEchoChar("*");
        this.buttonOk = new ColleagueButton("OK");
        this.buttonCancel = new ColleagueButton("Cancel");
        this.checkGuest.setMediator(this);
        this.checkLogin.setMediator(this);
        this.textUser.setMediator(this);
        this.textPass.setMediator(this);
        this.buttonOk.setMediator(this);
        this.buttonCancel.setMediator(this);
        this.checkGuest.addItemListener(this.checkGuest);
        this.checkLogin.addItemListener(this.checkLogin);
        this.textUser.addTextListener(this.textUser);
        this.textPass.addTextListener(this.textPass);
        this.buttonOk.addActionListener(this);
        this.buttonCancel.addActionListener(this);
    }

    colleagueChanged = (): void => {
        if (this.checkGuest.getState()) {
            this.textUser.setColleagueEnabled(false);
            this.textPass.setColleagueEnabled(false);
            this.buttonOk.setColleagueEnabled(true);
        } else {
            this.textUser.setColleagueEnabled(true);
            this.userpassChanged();
        }
    }

    private userpassChanged = (): void => {
        if (this.textUser.getText().length > 0) {
            this.textPass.setColleagueEnabled(true);
            this.buttonOk.setColleagueEnabled(this.textPass.getText.length > 0);
        } else {
            this.textPass.setColleagueEnabled(false);
            this.buttonOk.setColleagueEnabled(false);
        }
    }

    actionPerformed = (e: ActionEvent): void => {
        console.log(e.toString());

    }
}