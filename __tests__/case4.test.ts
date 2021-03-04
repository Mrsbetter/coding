/*
 * @Date: 2021/03/04
 * @LastEditors: YanShen
 */
import { averageByQuarter } from '../src/case4';

describe('averageByQuarter function', () => {
  // Read more about fake timers
  // http://facebook.github.io/jest/docs/en/timer-mocks.html#content
  jest.useFakeTimers();

  const case4 = [
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
  const result4 = [
    { quarter: 1, averagePrices: 16, transactionNums: 4 },
    { quarter: 2, averagePrices: 0, transactionNums: 0 },
    { quarter: 3, averagePrices: 8.25, transactionNums: 4 },
    { quarter: 4, averagePrices: 35, transactionNums: 3 },
  ];

  // Assert sortExtensionsByName result
  it('Question 4: Write a function to calculate and return a list of average sales for each quarter', () => {
    expect(averageByQuarter(case4)).toStrictEqual(result4);
  });
});
