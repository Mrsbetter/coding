/*
 * @Date: 2021/03/04
 * @LastEditors: YanShen
 */
import { getUnUsedKeys } from '../src/case6';

describe('getUnUsedKeys function', () => {
  // Read more about fake timers
  // http://facebook.github.io/jest/docs/en/timer-mocks.html#content
  jest.useFakeTimers();

  const case6 = {
    allKeys: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    usedKeys: [2, 3, 4],
  };
  const result6 = [0, 1, 5, 6, 7, 8, 9];

  // Assert sortExtensionsByName result
  it('Question 6: We want to get an array which contains all the unused keys', () => {
    expect(getUnUsedKeys(case6.allKeys, case6.usedKeys)).toStrictEqual(result6);
  });
});
