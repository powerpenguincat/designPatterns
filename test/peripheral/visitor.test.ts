import { Directory, File, ListVisitor } from "../../src/designPattern/peripheral/visitor";

describe('', ()=> {
    it('shoud do this thing', () => {
        console.log("Making root entries...");
        const rootdir: Directory = new Directory("root");
        const bindir: Directory = new Directory("bin");
        const tmpdir: Directory = new Directory("tmp");
        const usrdir: Directory = new Directory("usr");
        rootdir.add(bindir);
        rootdir.add(tmpdir);
        rootdir.add(usrdir);
        bindir.add(new File("vi", 10000));
        bindir.add(new File("latex", 20000));
        rootdir.accept2(new ListVisitor());

        console.log("");
        console.log("Making user entries...");
        const yuki: Directory = new Directory("yuki");
        const hanako: Directory = new Directory("hanako");
        const tomura: Directory = new Directory("tomura");
        usrdir.add(yuki);
        usrdir.add(hanako);
        usrdir.add(tomura);
        yuki.add(new File("diary.html", 100));
        yuki.add(new File("Composite.java", 200));
        hanako.add(new File("memo.tex", 300));
        tomura.add(new File("game.doc", 400));
        tomura.add(new File("junk.mail", 500));
        rootdir.accept2(new ListVisitor());
        
    });
});