const Engineer = require("../lib/Engineer");

test("GitHUb constructor", () => {
  const testValue = "GitHubUser";
  const b= new Engineer("Dude", 1, "test@test.com", testValue);
  expect(b.github).toBe(testValue);
});

test("getRole() function should give you \"Engineer\"", () => {
  const testValue = "Engineer";
  const b = new Engineer("Dude", 1, "test@test.com", "GitHubUser");
  expect(b.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = "GitHubUser";
  const b = new Engineer("Dude", 1, "test@test.com", testValue);
  expect(b.getGithub()).toBe(testValue);
});