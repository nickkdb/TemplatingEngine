const Intern = require("../lib/Intern");

const data= {
  name: "Foo",
  id: 1,
  email: "test@test.com",
  school: "UCLA"
}

test("Can set school via constructor", () => {
  const testValue = "UCLA";
  const e = new Intern(data);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern(data);
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "UCLA";
  const e = new Intern(data);
  expect(e.getSchool()).toBe(testValue);
});
