export class Writer {
    write = (str: string): void => {
        console.log(str);
    }
    close = (): void => {
        console.log(`close`);
    }
}