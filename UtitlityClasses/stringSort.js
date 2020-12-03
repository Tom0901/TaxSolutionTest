const { type } = require("os");

module.exports = class StringSorter {
  catString = (arr) => {
    //loop over input array and check for keywords
    let sortedStrs = {
      importOnly: [],
      salesOnly: [],
      importAndSales: [],
      noTax: [],
    };

    const excluded = /\b(?:book|chocolate|chocolates|pills)\b/gi;
    const imports = /\b(?:imported)\b/gi;

    for (const str of arr) {
      let ex = excluded.test(str);
      let imp = imports.test(str);

      if (ex && imp) {
        sortedStrs.importOnly.push(str);
      } else if (!ex && !imp) {
        sortedStrs.salesOnly.push(str);
      } else if (!ex && imp) {
        sortedStrs.importAndSales.push(str);
      } else {
        sortedStrs.noTax.push(str);
      }
    }
    return sortedStrs;
  };

  getPrice = (arr) => {
    //additional DS because arrays are reference type =(
    let priceArr = [];
    arr.forEach((item, i) => {
      priceArr[i] = item.split("£")[1];
    });
    return priceArr;
  };

  applyTax = (arr, prop) => {
    let taxArr = [];
    arr.forEach((no, ind) => {
      let fl = parseFloat(no);
      switch (prop) {
        case "importOnly":
          taxArr[ind] = parseFloat((fl / 100) * 5 + fl).toFixed(2);
          break;
        case "salesOnly":
          taxArr[ind] = parseFloat(fl / 10 + fl).toFixed(2);
          break;
        case "importAndSales":
          taxArr[ind] = parseFloat((fl / 100) * 10 + fl).toFixed(2);
          break;
      }
    });
    return taxArr;
  };

  applyNewPrice = (arr, newVal) => {
    arr.forEach((item, ind) => {
      arr[ind] = `${item.split("£")[0]}£${newVal[ind]}`;
    });
    //return for test
    return arr;
  };

  constructOutput = (original, prices, totals) => {};
};
