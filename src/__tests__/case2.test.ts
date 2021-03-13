/*
 * @Date: 2021/03/04
 * @LastEditors: YanShen
 */
import { sortExtensionsByExtType, ExtType } from '../case2';

describe('sortExtensionsByExtType function', () => {
  const case2 = [
    { firstName: 'aa', lastName: '', ext: 'bb', extType: ExtType.DigitalUser },
    { firstName: 'aa', lastName: '', ext: '', extType: ExtType.VirtualUser },
    { firstName: '', lastName: 'ss', ext: 'dd', extType: ExtType.FaxUser },
    { firstName: 'cc', lastName: 'ss', ext: 'aa', extType: ExtType.FaxUser },
    { firstName: 'dd', lastName: 'aa', ext: 'bb', extType: ExtType.Dept },
    { firstName: 'dd', lastName: '55', ext: 'bb', extType: ExtType.AO }
  ];
  const result2 = [
    { firstName: 'aa', lastName: '', ext: 'bb', extType: ExtType.DigitalUser },
    { firstName: 'aa', lastName: '', ext: '', extType: ExtType.VirtualUser },
    { firstName: '', lastName: 'ss', ext: 'dd', extType: ExtType.FaxUser },
    { firstName: 'cc', lastName: 'ss', ext: 'aa', extType: ExtType.FaxUser },
    { firstName: 'dd', lastName: '55', ext: 'bb', extType: ExtType.AO },
    { firstName: 'dd', lastName: 'aa', ext: 'bb', extType: ExtType.Dept }
  ];

  // Assert sortExtensionsByExtType result
  it('Question 2: Sort extensions by extType follow these orders ASC', () => {
    expect(sortExtensionsByExtType(case2)).toStrictEqual(result2);
  });
});
