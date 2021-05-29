import { DirectoryEntry, FileEntry } from "../../src/designPattern/core/composite";

describe("容器と中身を同一視し、再起的な構造を作る", ()=> {
    it("is if you add directories and files.", () => {
        console.log("Making root entries...");
        const rootDir: DirectoryEntry = new DirectoryEntry("root");
        const bindDir: DirectoryEntry = new DirectoryEntry("bin");
        const tmpDir: DirectoryEntry = new DirectoryEntry("tmp");
        const usrDir: DirectoryEntry = new DirectoryEntry("usr");
        rootDir.add(bindDir);
        rootDir.add(tmpDir);
        rootDir.add(usrDir);
        bindDir.add(new FileEntry("vi", 10000));
        bindDir.add(new FileEntry("latex", 20000));
        rootDir.printList();

        console.log("");
        console.log("Making user entries...");
        const yuki: DirectoryEntry = new DirectoryEntry("yuki");
        const hanako: DirectoryEntry = new DirectoryEntry("hanako");
        const tomura: DirectoryEntry = new DirectoryEntry("tomura");
        usrDir.add(yuki);
        usrDir.add(hanako);
        usrDir.add(tomura);
        yuki.add(new FileEntry("diary.html", 100));
        yuki.add(new FileEntry("Composite.ts", 200));
        hanako.add(new FileEntry("memo.tex", 300));
        tomura.add(new FileEntry("game.doc", 400));
        tomura.add(new FileEntry("junk.mail", 500));
        rootDir.printList();
    });
    it("is if you add a file to a file", () => {
        const diary: FileEntry = new FileEntry("diary.html", 100);
        // 関数をそのまま呼び出すと評価（expect）前に例外となるため、単独のメソッドとして評価させる
        expect(() => diary.add(new FileEntry("Composite.ts", 200))).toThrow("FileTreatmentException");
    });
});