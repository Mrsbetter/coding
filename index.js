const comonFunc = {
  getString: () => {
    const str = Math.random().toString(36).slice(-6)
    return str
  },
  getNum: (len = 10, first = 0) => {
    return Math.floor(Math.random()*len + first)
  }
}
/**
  extensions is an Array and each item has such format:
  {firstName: 'xxx', lastName: 'xxx', ext: 'xxx', extType: 'xxx'}
  lastName, ext can be empty, extType can only has "DigitalUser", "VirtualUser","FaxUser","Dept","AO".
**/
const NameList = [
  { firstName: 'aa', lastName: '', ext: 'bb', extType: 'DigitalUser' },
  { firstName: 'aa', lastName: '', ext: '', extType: 'VirtualUser' },
  { firstName: '', lastName: 'ss', ext: 'dd', extType: 'FaxUser' },
  { firstName: 'cc', lastName: 'ss', ext: 'aa', extType: 'FaxUser' },
  { firstName: 'dd', lastName: 'aa', ext: 'bb', extType: 'Dept' },
  { firstName: 'dd', lastName: '55', ext: 'bb', extType: 'AO' }
]


/**
  Question 1: sort extensions by "firstName" + "lastName" + "ext" ASC
**/
function sortExtensionsByName(extensions) {
  if (extensions.length <= 1) {
    return extensions
  }
  const sortKeyList = ['firstName', 'lastName', 'ext']
  return extensions.sort((a, b) => {
    let sign = null
    sortKeyList.forEach(arr => {
      let valueN = a[arr]
      let valueM = b[arr]
      if (sign && sign !== 0) {
        return
      }
      if (valueN && valueM) {
        sign = valueN.localeCompare(valueM)
      } else if (valueN) {
        sign = 1
      } else if (valueM) {
        sign = -1
      } else {
        // 为空有undefined\null\''三种情况
        if (typeof(valueN) === typeof(valueM)) {
          sign = 0
        } else {
          if (typeof(valueN) === 'string' || (typeof(valueN) === 'object' && typeof(valueM) === 'undefined')) {
            sign = 1
          } else {
            sign = -1
          }
        }
      }
    })
    return sign
  })
}
// console.log(sortExtensionsByName(NameList))


/**
  Question 2: sort extensions by extType follow these orders ASC
  DigitalUser < VirtualUser < FaxUser < AO < Dept.
**/
function sortExtensionsByExtType(extensions) {
  const sortMap = new Map([
    ['DigitalUser', 1],
    ['VirtualUser', 2],
    ['FaxUser', 3],
    ['AO', 4],
    ['Dept', 5]
  ]);
  return extensions.sort((a, b) => {
    return sortMap.get(a.extType) - sortMap.get(b.extType);
  });
}
// console.log(sortExtensionsByExtType(NameList))



/**
  saleItems is an Array has each item has such format:
  {
	month: n, //[1-12],
	date: n, //[1-31],
	transationId: "xxx",
	salePrice: number
  }
**/
const saleItemsList = [
  { month: 1, date: 2, transationId: 'a', salePrice: 5 },
  { month: 1, date: 3, transationId: 'b', salePrice: 4 },
  { month: 2, date: 2, transationId: 'c', salePrice: 33 },
  { month: 2, date: 12, transationId: 'e', salePrice: 22 },
  { month: 11, date: 20, transationId: 'sd', salePrice: 22 },
  { month: 11, date: 22, transationId: 'dd', salePrice: 22 },
  { month: 7, date: 2, transationId: 'bb', salePrice: 6 },
  { month: 7, date: 2, transationId: 'tr', salePrice: 8 },
  { month: 8, date: 2, transationId: 'bx', salePrice: 9 },
  { month: 9, date: 2, transationId: 'ws', salePrice: 10 },
  { month: 10, date: 2, transationId: 'bd', salePrice: 61 },
]


/**
  Question 3: write a function to calculate and return a list of total sales (sum) for each quarter, expected result like:
  [
  	{quarter: 1, totalPrices: xxx, transactionNums: n},
  	{....}
  ]
**/
function sumByQuarter(saleItems) {
  const res = [
    { quarter: 1, totalPrices: 0, transactionNums: 0 },
    { quarter: 2, totalPrices: 0, transactionNums: 0 },
    { quarter: 3, totalPrices: 0, transactionNums: 0 },
    { quarter: 4, totalPrices: 0, transactionNums: 0 },
  ];
  const { ceil } = Math;
  saleItems.forEach((item) => {
    const { month, salePrice } = item
    const quarter = ceil(month / 3);
    res[quarter - 1].totalPrices += salePrice;
    res[quarter - 1].transactionNums ++;
  });

  return res;
}
// console.log(sumByQuarter(saleItemsList))


/**
  Question 4: write a function to calculate and return a list of average sales for each quarter, expected result like:
  [
    {quarter: 1, averagePrices: xxx, transactionNums: n},
    {....}
  ]
**/

function averageByQuarter(saleItems) {
  const res = [
    { quarter: 1, averagePrices: 0, transactionNums: 0 },
    { quarter: 2, averagePrices: 0, transactionNums: 0 },
    { quarter: 3, averagePrices: 0, transactionNums: 0 },
    { quarter: 4, averagePrices: 0, transactionNums: 0 },
  ];
  const { ceil } = Math;
  saleItems.forEach((item) => {
    const { month, salePrice } = item
    const quarter = ceil(month / 3);
    const { averagePrices, transactionNums } = res[quarter - 1];
    const tNums = transactionNums + 1;
    res[quarter - 1].averagePrices += ((salePrice - averagePrices) / tNums);
    res[quarter - 1].transactionNums = tNums;
  });
  return res;
}
// console.log(averageByQuarter(saleItemsList))



/**
  Question 5: please create a tool to generate Sequence
  Expected to be used like:
  var sequence1 = new Sequence();
  sequence1.next() --> return 1;
  sequence1.next() --> return 2;
  
  in another module:
  var sequence2 = new Sequence();
  sequence2.next() --> 3;
  sequence2.next() --> 4;
**/
let _value = 0;
class Sequence {
  next() {
    return this.seq;
  }
};
Object.defineProperty(Sequence.prototype, 'seq', {
  get() {
    _value += 1;
    return _value;
  }
})

/**
    Question 6:
    AllKeys: 0-9;
    usedKeys: an array to store all used keys like [2,3,4];
    We want to get an array which contains all the unused keys,in this example it would be: [0,1,5,6,7,8,9]
**/

function getUnUsedKeys(allKeys, usedKeys) {
  const temp = new Set(usedKeys);
  return allKeys.filter(key => !temp.has(key));
}

module.exports = {
  sortExtensionsByName,
  sortExtensionsByExtType,
  sumByQuarter,
  averageByQuarter,
  getUnUsedKeys
}