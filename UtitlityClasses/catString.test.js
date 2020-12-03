const func = require("./stringSort");
const inputs = require("../index");
const inv = new func();
test("test sorted arrays", () => {
  expect(inv.catString(inputs)).toStrictEqual({
    importOnly: [],
    salesOnly: ["1 music CD at £14.99"],
    importAndSales: [],
    noTax: ["1 book at £12.49", "1 chocolate bar at £0.85"],
  });
});
