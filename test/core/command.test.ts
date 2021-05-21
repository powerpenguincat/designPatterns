import { DirectoryEntry, FileEntry } from "../../src/core/command";


describe('', ()=> {
    it('shoud do this thing', () => {
        const workspaceDir: DirectoryEntry = new DirectoryEntry("workspace");
        const compositeDir: DirectoryEntry = new DirectoryEntry("composite");
        const testDir1: DirectoryEntry = new DirectoryEntry("test1");
        const testDir2: DirectoryEntry = new DirectoryEntry("test2");
        workspaceDir.add(compositeDir);
        workspaceDir.add(testDir1);
        workspaceDir.add(testDir2);

        const directory: FileEntry = new FileEntry("Directory.ts");
        const entity: FileEntry = new FileEntry("Entity.ts");
        const file: FileEntry = new FileEntry("File.ts");
        const main: FileEntry = new FileEntry("main.ts");
        compositeDir.add(directory);
        compositeDir.add(entity);
        compositeDir.add(file);
        compositeDir.add(main);
        workspaceDir.printList();
    });
});