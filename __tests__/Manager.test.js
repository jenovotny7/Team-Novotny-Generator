const Manager = require("../lib/Manager");

test("Office Constructor", () => {
  const testValue = 10;
  const b = new Manager("Dude", 1, "test@test.com", testValue);
  expect(b.officeNumber).toBe(testValue);
});

test("getRole() gives you \"Manager\"", () => {
  const testValue = "Manager";
  const b = new Manager("Dude", 1, "test@test.com", 10);
  expect(b.getRole()).toBe(testValue);
});

test("getOffice()", () => {
  const testValue = 10;
  const b = new Manager("Dude", 1, "test@test.com", testValue);
  expect(b.getOfficeNumber()).toBe(testValue);
});