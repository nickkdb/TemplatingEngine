const Employee = require("../lib/Employee");

const data = {
name: "Alice",
id: 100,
email: "test@test.com"
}

test("Can instantiate Employee instance", () => {
  const e = new Employee(data);
  expect(typeof(e)).toBe("object");
});

test("Can set name via constructor arguments", () => {
  const e = new Employee(data);
  expect(e.name).toBe("Alice");
});

test("Can set id via constructor argument", () => {
  const testValue = 100;
  const e = new Employee(data);
  expect(e.id).toBe(testValue);
});

test("Can set email via constructor argument", () => {
  const testValue = "test@test.com";
  const e = new Employee(data);
  expect(e.email).toBe(testValue);
});

test("Can get name via getName()", () => {
  const testValue = "Alice";
  const e = new Employee(data);
  expect(e.getName()).toBe(testValue);
});

test("Can get id via getId()", () => {
  const testValue = 100;
  const e = new Employee(data);
  expect(e.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
  const testValue = "test@test.com";
  const e = new Employee(data);
  expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const e = new Employee(data);
  expect(e.getRole()).toBe(testValue);
});
