const func = require("./stringSort");
const inv = new func();
test("test sorted arrays", () => {
  expect(inv.applyTax(["14.99"], "salesOnly")).toStrictEqual(["16.49"]);
});
