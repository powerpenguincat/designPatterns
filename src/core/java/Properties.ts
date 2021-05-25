import { FileInputStream } from "./FileInputStream";

export class Properties {
    private properties: {[key: string]: string};

    load = (isStream: FileInputStream): void => {
        this.properties = isStream.load();
    }

    getPropety = (key: string): string => this.properties[key];
}