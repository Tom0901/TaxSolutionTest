module.exports = class StringSorter {
  catString = (arr) => {
    const excluded = /\b(?:book|chocolate|chocolates|pills)\b/gi,
      imports = /\b(?:imported)\b/gi;
    let prices = this.getPrice(arr),
      taxArr = [],
      total = 0,
      tTotal = 0;
    arr.forEach((str, ind) => {
      let ex = excluded.test(str),
        imp = imports.test(str),
        fl = parseFloat(prices[ind]);
      console.log(ex, imp);
      //calculate tax and categorise str
      if (ex && imp) {
        taxArr[ind] = parseFloat((fl / 100) * 5 + fl).toFixed(2);
      } else if (!ex && !imp) {
        taxArr[ind] = parseFloat((fl / 100) * 15 + fl).toFixed(2);
      } else if (!ex && imp) {
        taxArr[ind] = parseFloat(fl / 10 + fl).toFixed(2);
      } else {
        taxArr[ind] = fl;
      }
      //apply prices
      arr = this.applyNewPrice(arr, taxArr);
      let tFloat = parseFloat(taxArr[ind]);
      //get totals
      if (total === 0) total = tFloat;
      else total += tFloat;

      if (fl !== tFloat) {
        tTotal += tFloat - fl;
      }
    });
    return [
      arr,
      `Sales Taxes: £${tTotal.toFixed(2)}`,
      `Total: £${total.toFixed(2)}`,
    ];
  };

  getPrice = (arr) => {
    let priceArr = [];
    arr.forEach((item, i) => {
      priceArr[i] = item.split("£")[1];
    });
    return priceArr;
  };

  applyNewPrice = (arr, newVal) => {
    arr.forEach((item, ind) => {
      arr[ind] = `${item.split("£")[0]}£${newVal[ind]}`;
    });
    //return for test
    return arr;
  };
};
