/*
 * @Date: 2021/03/04
 * @LastEditors: YanShen
 */
import { sortExtensionsByExtType } from '../case2';

describe('sortExtensionsByExtType function', () => {
  const case2 = [
    { firstName: 'aa', lastName: '', ext: 'bb', extType: 'DigitalUser' },
    { firstName: 'aa', lastName: '', ext: '', extType: 'VirtualUser' },
    { firstName: '', lastName: 'ss', ext: 'dd', extType: 'FaxUser' },
    { firstName: 'cc', lastName: 'ss', ext: 'aa', extType: 'FaxUser' },
    { firstName: 'dd', lastName: 'aa', ext: 'bb', extType: 'Dept' },
    { firstName: 'dd', lastName: '55', ext: 'bb', extType: 'AO' },
  ];
  const result2 = [
    { firstName: 'aa', lastName: '', ext: 'bb', extType: 'DigitalUser' },
    { firstName: 'aa', lastName: '', ext: '', extType: 'VirtualUser' },
    { firstName: '', lastName: 'ss', ext: 'dd', extType: 'FaxUser' },
    { firstName: 'cc', lastName: 'ss', ext: 'aa', extType: 'FaxUser' },
    { firstName: 'dd', lastName: '55', ext: 'bb', extType: 'AO' },
    { firstName: 'dd', lastName: 'aa', ext: 'bb', extType: 'Dept' },
  ];

  // Assert sortExtensionsByExtType result
  it('Question 2: Sort extensions by extType follow these orders ASC', () => {
    expect(sortExtensionsByExtType(case2)).toStrictEqual(result2);
  });
});
