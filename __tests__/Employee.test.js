const Employee = require("../lib/Employee");

describe("Employee", () => {
    it(" Employee test", () => {
        const b = new Employee();
        expect(typeof(b)).toBe("object");
    });

    it("Can set the name by constructor arguments", () => {
        const name = "Bob";
        const b = new Employee(name);
        expect(b.name).toBe(name);
    });

    it("Can set id via constructor argument", () => {
        const testValue = 10;
        const b = new Employee("Dude", testValue);
        expect(b.id).toBe(testValue);
    });

    it("Can set email via constructor argument", () => {
        const testValue = "test@test.com";
        const b= new Employee("Dude", 1, testValue);
        expect(b.email).toBe(testValue);
    });

    describe("getName", () => {
        it("Can get name via getName()", () => {
            const testValue = "Bob";
            const b = new Employee(testValue);
            expect(b.getName()).toBe(testValue);
        });
    });
        
    describe("getId", () => {
        it("Can get id via getId()", () => {
            const testValue = 100;
            const b = new Employee("Dude", testValue);
            expect(b.getId()).toBe(testValue);
        });
    });
        
    describe("getEmail", () => {
        it("Can get email via getEmail()", () => {
            const testValue = "test@test.com";
            const b = new Employee("Dude", 1, testValue);
            expect(b.getEmail()).toBe(testValue);
        });
    });
        
    describe("getRole", () => {
        it("getRole() should return \"Employee\"", () => {
            const testValue = "Employee";
            const b = new Employee("Bob", 2, "test@test.com");
            expect(b.getRole()).toBe(testValue);
        });
    });
    
});