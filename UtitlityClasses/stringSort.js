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
    arr.forEach((item, i) => {
      arr[i] = item.split("£")[1];
    });
    console.log(arr);
    return arr;
  };
};
