// import sortExtensionsByName from './rc'
const  { case1, result1, case2, result2, case3, result3, case4, result4, case6, result6,} = require('./data');
const  { sortExtensionsByName, sortExtensionsByExtType, sumByQuarter, averageByQuarter, getUnUsedKeys } = require('./index');

const caseResult1 = sortExtensionsByName(case1)
it('Question 1: sort extensions by "firstName" + "lastName" + "ext" ASC' + JSON.stringify(caseResult1), () => {
  // const caseResult = sortExtensionsByName(case1)
  // console.log(caseResult)
  expect(caseResult1).toStrictEqual(result1);
})

const caseResult2 = sortExtensionsByExtType(case2)
it('Question 2: sort extensions by extType follow these orders ASC', () => {
  expect(caseResult2).toStrictEqual(result2);
})

it('Question 3: write a function to calculate and return a list of total sales (sum) for each quarter', () => {
  expect(sumByQuarter(case3)).toStrictEqual(result3);
})

it('Question 4: write a function to calculate and return a list of average sales for each quarter', () => {
  expect(averageByQuarter(case4)).toStrictEqual(result4);
})

it('Question 6', () => {
  expect(getUnUsedKeys(case6.allKeys, case6.usedKeys)).toStrictEqual(result6);
})