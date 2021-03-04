/*
 * @Date: 2021/03/04
 * @LastEditors: YanShen
 */
import { sortExtensionsByName } from '../src/case1';

describe('sortExtensionsByName function', () => {
  // Read more about fake timers
  // http://facebook.github.io/jest/docs/en/timer-mocks.html#content
  jest.useFakeTimers();

  const case1 = [
    { firstName: 'aa', lastName: '', ext: 'bb', extType: 'DigitalUser' },
    { firstName: 'aa', lastName: '', ext: '', extType: 'VirtualUser' },
    { firstName: 'xx', lastName: 'ss', ext: 'dd', extType: 'FaxUser' },
    { firstName: 'cc', lastName: 'ss', ext: 'aa', extType: 'FaxUser' },
    { firstName: 'dd', lastName: 'aa', ext: 'bb', extType: 'Dept' },
    { firstName: 'dd', lastName: '55', ext: 'bb', extType: 'AO' },
  ];
  const result1 = [
    { firstName: 'aa', lastName: '', ext: '', extType: 'VirtualUser' },
    { firstName: 'aa', lastName: '', ext: 'bb', extType: 'DigitalUser' },
    { firstName: 'cc', lastName: 'ss', ext: 'aa', extType: 'FaxUser' },
    { firstName: 'dd', lastName: '55', ext: 'bb', extType: 'AO' },
    { firstName: 'dd', lastName: 'aa', ext: 'bb', extType: 'Dept' },
    { firstName: 'xx', lastName: 'ss', ext: 'dd', extType: 'FaxUser' },
  ];

  // Assert sortExtensionsByName result
  it("Question 1: Sort extensions by 'firstName' + 'lastName' + 'ext' ASC", () => {
    expect(sortExtensionsByName(case1)).toStrictEqual(result1);
  });
});
