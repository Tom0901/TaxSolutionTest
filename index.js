const StringSorter = require("./UtitlityClasses/stringSort");

let inputs = [
  "1 book at £12.49",
  "1 music CD at £14.99",
  "1 chocolate bar at £0.85",
];

module.exports = inputs;

const app = (inputs) => {
  const st = new StringSorter();
  let sortedStr = st.catString(inputs);

  for (prop in sortedStr) {
    if (sortedStr[prop].length !== 0) {
      let price = st.getPrice(sortedStr[prop]);
      st.applyTax(price, prop);
    }
  }
};

app(inputs);
