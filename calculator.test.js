const test = require("node:test");
const assert = require("node:assert");
const { add, subtract, multiply, divide } = require("./calculator");

test("add", () => {
  assert.strictEqual(add(2, 3), 5);
});

test("subtract", () => {
  assert.strictEqual(subtract(10, 4), 6);
});

test("multiply", () => {
  assert.strictEqual(multiply(6, 7), 42);
});

test("divide", () => {
  assert.strictEqual(divide(20, 4), 5);
});

test("divide by zero throws an error", () => {
  assert.throws(() => divide(5, 0), /Cannot divide by zero/);
});
