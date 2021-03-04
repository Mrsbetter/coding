/*
 * @Date: 2021/03/04
 * @LastEditors: YanShen
 */
/**
  saleItems is an Array has each item has such format:
  {
	month: n, //[1-12],
	date: n, //[1-31],
	transationId: "xxx",
	salePrice: number
  }
**/
/**
  Question 4: write a function to calculate and return a list of average sales for each quarter, expected result like:
  [
    {quarter: 1, averagePrices: xxx, transactionNums: n},
    {....}
  ]
**/

export const averageByQuarter = (saleItems) => {
  const res = [
    { quarter: 1, averagePrices: 0, transactionNums: 0 },
    { quarter: 2, averagePrices: 0, transactionNums: 0 },
    { quarter: 3, averagePrices: 0, transactionNums: 0 },
    { quarter: 4, averagePrices: 0, transactionNums: 0 },
  ];
  const { ceil } = Math;

  saleItems.forEach((item) => {
    const { month, salePrice } = item;
    const quarter = ceil(month / 3);
    const { averagePrices, transactionNums } = res[quarter - 1];
    const tNums = transactionNums + 1;
    res[quarter - 1].averagePrices += (salePrice - averagePrices) / tNums;
    res[quarter - 1].transactionNums = tNums;
  });
  return res;
};
