/*
 * @Date: 2021/03/04
 * @LastEditors: YanShen
 */
import { generateSequence } from '../../src/case5';

describe('generateSequence function', () => {
  // Assert sortExtensionsByName result
  it('Question 5: We want to get an array which contains all the unused keys', () => {
    const sequence1 = generateSequence();
    expect(sequence1.next()).toStrictEqual(1);
    expect(sequence1.next()).toStrictEqual(2);
    const sequence2 = generateSequence();
    expect(sequence2.next()).toStrictEqual(3);
    expect(sequence2.next()).toStrictEqual(4);
  });
});
