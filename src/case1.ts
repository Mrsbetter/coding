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
const getString = (arr: { firstName: string, lastName?: string | null, ext?: string | null }) => {
  return [arr.firstName, arr.lastName, arr.ext].filter(Boolean).join('');
};

export const sortExtensionsByName = (extensions: any) => {
  return extensions.sort((a, b) => {
    const pre = getString(a);
    const next = getString(b);
    return pre > next;
  });
};
