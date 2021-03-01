const Engineer = require("../lib/Engineer");

const data= {
  name: "Foo",
  id: 1,
  email: "test@test.com",
  github: "GitHubUser"
}

test("Can set GitHUb account via constructor", () => {
  const testValue = "GitHubUser";
  const e = new Engineer(data);
  expect(e.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer(data);
  expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = "GitHubUser";
  const e = new Engineer(data);
  expect(e.getGithub()).toBe(testValue);
});
