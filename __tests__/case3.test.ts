/*
 * @Date: 2021/03/04
 * @LastEditors: YanShen
 */
import { sumByQuarter } from '../src/case3';

describe('sumByQuarter function', () => {
  // Read more about fake timers
  // http://facebook.github.io/jest/docs/en/timer-mocks.html#content
  jest.useFakeTimers();

  const case3 = [
    { month: 1, date: 2, transationId: 'a', salePrice: 5 },
    { month: 1, date: 3, transationId: 'b', salePrice: 4 },
    { month: 2, date: 2, transationId: 'c', salePrice: 33 },
    { month: 2, date: 12, transationId: 'e', salePrice: 22 },
    { month: 11, date: 20, transationId: 'sd', salePrice: 22 },
    { month: 11, date: 22, transationId: 'dd', salePrice: 22 },
    { month: 7, date: 2, transationId: 'bb', salePrice: 6 },
    { month: 7, date: 2, transationId: 'tr', salePrice: 8 },
    { month: 8, date: 2, transationId: 'bx', salePrice: 9 },
    { month: 9, date: 2, transationId: 'ws', salePrice: 10 },
    { month: 10, date: 2, transationId: 'bd', salePrice: 61 },
  ];
  const result3 = [
    { quarter: 1, totalPrices: 64, transactionNums: 4 },
    { quarter: 2, totalPrices: 0, transactionNums: 0 },
    { quarter: 3, totalPrices: 33, transactionNums: 4 },
    { quarter: 4, totalPrices: 105, transactionNums: 3 },
  ];

  // Assert sortExtensionsByName result
  it('Question 3: Write a function to calculate and return a list of total sales (sum) for each quarter', () => {
    expect(sumByQuarter(case3)).toStrictEqual(result3);
  });
});
