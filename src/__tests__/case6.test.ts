/*
 * @Date: 2021/03/04
 * @LastEditors: YanShen
 */
import { getUnUsedKeys } from '../case6';

describe('getUnUsedKeys function', () => {
  const case6 = {
    allKeys: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    usedKeys: [2, 3, 4],
    resultKeys: [0, 1, 5, 6, 7, 8, 9]
  };

  // Assert sortExtensionsByName result
  it('Question 6: We want to get an array which contains all the unused keys', () => {
    expect(getUnUsedKeys(case6.allKeys, case6.usedKeys)).toStrictEqual(case6.resultKeys);
  });
});
