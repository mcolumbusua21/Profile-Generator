const { hasUncaughtExceptionCaptureCallback } = require("node:process");
const Employee = require("../lib/employee");

describe("Employee", () => {
    describe("Initialization", () => {
        test("Can initialize an employee object", () => {
            const e = new Employee();
            expect(typeof e).toBe("object");
        })

        test("Can set name attribute with constructor", () => {
            const name = "Mark";
            const e = new Employee(name)

            expect(e.name).toBe(name);
        })
        
        test("Can set id attribute with constructor", () => {
            const id = 77;
            const e = new Employee("Steph", id);

            expect(e.id).toBe(id);
        })
        test("Can set email attribute with constructor", () => {
            const email = "mcolumbusua21@gmail.com";
            const e = new Employee("Nick", 77, email);

            expect(e.email).toBe(email);
        });
});
});

describe("getters", () => {
    test("Can get name via getName () method", () => {
        const name = "Mark";
        const e = new Employee(name, 77, "mcolumbusua21@gmail.com");

        expect(e.getName()).toBe(name);
    });
    test("Can get id via getID () method", () => {
        const id = 77;
        const e = new Employee("Mark", id, "mcolumbusua21@gmail.com");

        expect(e.getId()).toBe(id);
    });
    test("Can get email via getEmail () method", () => {
        const email = "mcolumbusua21@gmail.com";
        const e = new Employee("Mark", 77, email);

        expect(e.getEmail()).toBe(email);
    });
    test("Can get role via getRole () method", () => {
        const e = new Employee("Mark", 77, "mcolumbusua21@gmail.com");

        expect(e.getRole()).toBe("Employee");
    });

})