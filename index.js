const StringSorter = require("./UtitlityClasses/stringSort");

let inputs = [
  "1 book at £12.49",
  "1 music CD at £14.99",
  "1 chocolate bar at £0.85",
];

module.exports = inputs;

const app = (inputs) => {
  const st = new StringSorter();
  let sortedStr = st.catString(inputs),
    taxTotal = 0,
    total = 0;

  for (prop in sortedStr) {
    if (sortedStr[prop].length !== 0) {
      let price = st.getPrice(sortedStr[prop]);
      let taxApplied = st.applyTax(price, prop);
      sortedStr[prop];
      //add new value to og value
      if (taxApplied.length !== 0)
        st.applyNewPrice(sortedStr[prop], taxApplied);
      //construct output
      //1. tax total
      //potential edge case here as we are only dealing with one taxable item.
      if (taxApplied[0] !== undefined) {
        taxTotal += taxApplied - price;
        //2. total
        total += taxApplied;
      }

      //3. manipulated input str
    }
  }
};

app(inputs);
