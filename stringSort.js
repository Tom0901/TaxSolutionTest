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
      console.log(str, excluded.test(str), imports.test(str));

      if (excluded.test(str) && imports.test(str)) {
        sortedStrs.importOnly.push(str);
      } else if (!excluded.test(str) && !imports.test(str)) {
        sortedStrs.salesOnly.push(str);
      } else if (!excluded.test(str) && imports.test(str)) {
        sortedStrs.importAndSales.push(str);
      } else {
        sortedStrs.noTax.push(str);
      }
    }
    return sortedStrs;
  };

  getPrice = () => {};
};
