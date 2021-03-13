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
  Question 1: sort extensions by "firstName" + "lastName" + "ext" ASC
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

const getString = (arr: ExtensionType) => {
  return [arr.firstName, arr.lastName, arr.ext]
  .filter(Boolean)
  .join('');
};

const sortExtensionsByName: SortFuction = (extensions: ExtensionType[]) => {
  return extensions.sort((a: ExtensionType, b: ExtensionType) => {
    const pre = getString(a);
    const next = getString(b);
    return pre.localeCompare(next);
  });
}

export {
  ExtType,
  sortExtensionsByName
};
