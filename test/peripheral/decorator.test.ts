import { Display, SideBorder, FullBorder, StringDisplay } from "../../src/designPattern/peripheral/decorator";

describe('飾り枠と中身を同一視する', ()=> {
    it('is if you decorate a comment', () => {
        const b1: Display = new StringDisplay("Hello, world.");
        const b2: Display = new SideBorder(b1, "#");
        const b3: Display = new FullBorder(b2);
        b1.show();
        b2.show();
        b3.show();
        const b4: Display = new SideBorder(
            new FullBorder(
                new FullBorder(
                    new SideBorder(
                        new FullBorder(
                            new StringDisplay("こんにちは。")
                        ),
                        "*"
                    )
                )
            ),
            "/"
        );
        b4.show();
    });
});