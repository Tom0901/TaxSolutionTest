const StringSorter = require("./stringSort");

let inputs = [
  "1 book at £12.49",
  "1 music CD at £14.99",
  "1 chocolate bar at £0.85",
];

const app = (inputs) => {
  const st = new StringSorter();
  return st.catString(inputs);
};

console.log(app(inputs));
