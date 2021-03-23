const { hasUncaughtExceptionCaptureCallback } = require("node:process");
const Employee = require("../lib/employee");

describe("Employee", () => {
    describe("Initialization", () => {
        test("Can initialize an employee object", () => {
            const e = new Employee();
            expect(typeof e).toBe("object");
        })

        test("Can set name attribut with constructor", () => {
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

