const engineer = require("../lib/engineer");

describe("Engineer", () => {
    describe("Initialization", () => {
        test("Can initialize an engineer object", () => {
            const e = new engineer();
            expect(typeof e).toBe("object");
        });

        test("Can set name attribute with constructor", () => {
            const name = "Mark";
            const e = new engineer(name)

            expect(e.name).toBe(name);
        });
        
        test("Can set id attribute", () => {
            const id = 77;
            const e = new Engineer("Steph", id);

            expect(e.id).toBe(id);
        });
        test("Can set email attribute", () => {
            const email = "mcolumbusua21@gmail.com";
            const e = new Engineer("Nick", 77, email);

            expect(e.email).toBe(email);
        });
        test("Can set GitHub username attribute", () => {
            const github = "mcolumbusua21";
            const e = new Engineer("Nick", 77, github);

            expect(e.github).toBe(github);
        });
});
});

describe("getters", () => {
    test("Can get name via getRole () method", () => {
        const role = "Engineer";
        const e = new Engineer("Mark", 77, "mcolumbusua21", role);

        expect(e.getRole()).toBe(role);
    });
    

});