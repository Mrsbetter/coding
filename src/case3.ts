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
  Question 3: write a function to calculate and return a list of total sales (sum) for each quarter, expected result like:
  [
  	{quarter: 1, totalPrices: xxx, transactionNums: n},
  	{....}
  ]
**/
type SaleItemsType = {
  month: number,
  date: number,
  transationId?: string,
  salePrice: number
}

type SaleTotalType = {
  quarter: number,
  totalPrices?: number,
  transactionNums?: number
}

type SortFuction = (e: SaleItemsType[]) => SaleTotalType[];

export const sumByQuarter: SortFuction = (saleItems: SaleItemsType[]) => {
  const res: SaleTotalType[] = [
    { quarter: 1, totalPrices: 0, transactionNums: 0 },
    { quarter: 2, totalPrices: 0, transactionNums: 0 },
    { quarter: 3, totalPrices: 0, transactionNums: 0 },
    { quarter: 4, totalPrices: 0, transactionNums: 0 },
  ];

  const { ceil } = Math;

  saleItems.forEach((item: SaleItemsType) => {
    const { month, salePrice } = item;
    const quarter = ceil(month / 3);
    res[quarter - 1].totalPrices += salePrice;
    res[quarter - 1].transactionNums++;
  });

  return res;
};
