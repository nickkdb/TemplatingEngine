const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

const data= {
  name: "Foo",
  id: 1,
  email: "test@test.com",
  office: 100
}

test("Can set office number via constructor argument", () => {
  const testValue = 100;
  const e = new Manager(data);
  expect(e.officeNumber).toBe(testValue);
});

test('getRole() should return "Manager"', () => {
  const testValue = "Manager";
  const e = new Manager(data);
  expect(e.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
  const testValue = 100;
  const e = new Manager(data);
  expect(e.getOfficeNumber()).toBe(testValue);
});
