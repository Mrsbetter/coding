/*
 * @Date: 2021/03/04
 * @LastEditors: YanShen
 */
/**
  extensions is an Array and each item has such format:
  {firstName: 'xxx', lastName: 'xxx', ext: 'xxx', extType: 'xxx'}
  lastName, ext can be empty, extType can only has "DigitalUser", "VirtualUser","FaxUser","Dept","AO".
**/
/**
  Question 2: sort extensions by extType follow these orders ASC
  DigitalUser < VirtualUser < FaxUser < AO < Dept.
**/

export const sortExtensionsByExtType = (extensions) => {
  const sortMap = new Map([
    ['DigitalUser', 1],
    ['VirtualUser', 2],
    ['FaxUser', 3],
    ['AO', 4],
    ['Dept', 5],
  ]);
  return extensions.sort((a, b) => {
    return sortMap.get(a.extType) - sortMap.get(b.extType);
  });
};
