const Intern = require("../lib/Intern");

test("University constructor", () => {
  const testValue = "Intern";
  const b = new Intern("Dude", 1, "test@test.com", testValue);
  expect(b.school).toBe(testValue);
});

test("getRole() should give you \"Intern\"", () => {
  const testValue = "Intern";
  const b = new Intern("Dude", 1, "test@test.com", "Vandy");
  expect(b.getRole()).toBe(testValue);
});

test("The schoole getSchool()", () => {
  const testValue = "Vandy";
  const b = new Intern("Dude", 1, "test@test.com", testValue);
  expect(b.getSchool()).toBe(testValue);
});