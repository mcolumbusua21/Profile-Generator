const intern = require("../lib/intern");

describe("intern", () => {
    describe("Initialization", () => {
        test("Can initialize an intern object", () => {
            const e = new intern();
            expect(typeof e).toBe("object");
        });

        test("Can set name attribute with constructor", () => {
            const name = "Mark";
            const e = new intern(name)

            expect(e.name).toBe(name);
        });
        
        test("Can set id attribute", () => {
            const id = 77;
            const e = new intern("Steph", id);

            expect(e.id).toBe(id);
        });
        test("Can set email attribute", () => {
            const email = "mcolumbusua21@gmail.com";
            const e = new intern("Nick", 77, email);

            expect(e.email).toBe(email);
        });
        test("Can set school name attribute", () => {
            const schoolName = "Trilogy";
            const e = new intern("Nick", 77, github);

            expect(e.intern).toBe(intern);
        });
});
});

describe("getters", () => {
    test("Can get name via getRole () method", () => {
        const role = "intern";
        const e = new intern("Mark", 77, "mcolumbusua21", role);

        expect(e.getRole()).toBe(role);
    });
    

});