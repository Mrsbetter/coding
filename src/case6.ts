/*
 * @Date: 2021/03/04
 * @LastEditors: YanShen
 */
/**
    Question 6:
    AllKeys: 0-9;
    usedKeys: an array to store all used keys like [2,3,4];
    We want to get an array which contains all the unused keys,in this example it would be: [0,1,5,6,7,8,9]
**/

export const getUnUsedKeys = (allKeys, usedKeys) => {
  const temp = new Set(usedKeys);
  return allKeys.filter((key) => !temp.has(key));
};