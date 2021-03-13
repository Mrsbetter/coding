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

/**
 * Returns a Promise<string>.
 *
 * @param {object} arr - A obj.
 * @returns {Promise<string>}
 */
enum ExtType {
  DigitalUser = 'DigitalUser',
  VirtualUser = 'VirtualUser',
  FaxUser = 'FaxUser',
  Dept = 'Dept',
  AO = 'AO'
}

type ExtensionType = {
  firstName: string,
  lastName?: string,
  ext?: string,
  extType: ExtType
}

type SortFuction = (e: ExtensionType[]) => ExtensionType[];

const sortExtensionsByExtType: SortFuction = (extensions: ExtensionType[]) => {
  const sortMap = new Map([
    [ExtType.DigitalUser, 1],
    [ExtType.VirtualUser, 2],
    [ExtType.FaxUser, 3],
    [ExtType.AO, 4],
    [ExtType.Dept, 5],
  ]);
  return extensions.sort((a: ExtensionType, b: ExtensionType) => {
    return sortMap.get(a.extType) - sortMap.get(b.extType);
  });
};

export {
  ExtType,
  sortExtensionsByExtType
};
