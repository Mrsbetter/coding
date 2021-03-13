/*
 * @Date: 2021/03/04
 * @LastEditors: YanShen
 */
import { sortExtensionsByName, ExtType } from '../case1';

describe('sortExtensionsByName function', () => {
  const case1 = [
    { firstName: 'aa', lastName: '', ext: 'bb', extType: ExtType.DigitalUser },
    { firstName: 'aa', lastName: '', ext: '', extType: ExtType.VirtualUser },
    { firstName: 'aa', lastName: 'bb', ext: '', extType: ExtType.Dept },
    { firstName: 'xx', lastName: 'ss', ext: 'dd', extType: ExtType.FaxUser },
    { firstName: 'cc', lastName: 'ss', ext: 'aa', extType: ExtType.FaxUser },
    { firstName: 'dd', lastName: 'aa', ext: 'bb', extType: ExtType.Dept },
    { firstName: 'dd', lastName: '55', ext: 'bb', extType: ExtType.AO }
  ];
  const result1 = [
    { firstName: 'aa', lastName: '', ext: '', extType: ExtType.VirtualUser },
    { firstName: 'aa', lastName: '', ext: 'bb', extType: ExtType.DigitalUser },
    { firstName: 'aa', lastName: 'bb', ext: '', extType: ExtType.Dept },
    { firstName: 'cc', lastName: 'ss', ext: 'aa', extType: ExtType.FaxUser },
    { firstName: 'dd', lastName: '55', ext: 'bb', extType: ExtType.AO },
    { firstName: 'dd', lastName: 'aa', ext: 'bb', extType: ExtType.Dept },
    { firstName: 'xx', lastName: 'ss', ext: 'dd', extType: ExtType.FaxUser }
  ];

  // Assert sortExtensionsByName result
  it("Question 1: Sort extensions by 'firstName' + 'lastName' + 'ext' ASC", () => {
    expect(sortExtensionsByName(case1)).toStrictEqual(result1);
  });
});
