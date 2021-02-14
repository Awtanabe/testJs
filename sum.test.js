const { exportAllDeclaration } = require("@babel/types");
const sum = require("./sum");

test('add a + 2 ', () => {
  expect(sum(1,2)).toBe(3);
})