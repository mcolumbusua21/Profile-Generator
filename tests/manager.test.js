const manager = require("../lib/manager");

describe("Manager", () => {
    describe("Initialization", () => {
        test("Can initialize an manager object", () => {
            const e = new manager();
            expect(typeof e).toBe("object");
        });

        test("Can set name attribute with constructor", () => {
            const name = "Mark";
            const e = new manager(name)

            expect(e.name).toBe(name);
        });
        
        test("Can set id attribute", () => {
            const id = 77;
            const e = new manager("Steph", id);

            expect(e.id).toBe(id);
        });
        test("Can set email attribute", () => {
            const email = "mcolumbusua21@gmail.com";
            const e = new manager("Nick", 77, email);

            expect(e.email).toBe(email);
        });
        test("Can set office number attribute", () => {
            const officeNumber = "101";
            const e = new manager("Nick", 77, officeNumber);

            expect(e.officeNumber).toBe(officeNumber);
        });
});
});

describe("getters", () => {
    test("Can get name via getRole () method", () => {
        const role = "manager";
        const e = new manager("Mark", 77, "mcolumbusua21", role);

        expect(e.getRole()).toBe(role);
    });
    

});