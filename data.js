module.exports = {
  case1: [
    { lastName: null, ext: 'aa', extType: 'DigitalUser' },
    { lastName: '', ext: 'aa', extType: 'DigitalUser' },
    { firstName: 'aa', lastName: '', ext: 'bb', extType: 'DigitalUser' },
    { firstName: 'aa', lastName: '', ext: '', extType: 'VirtualUser' },
    { firstName: '', lastName: 'ss', ext: 'dd', extType: 'FaxUser' },
    { firstName: 'cc', lastName: 'ss', ext: 'aa', extType: 'FaxUser' },
    { firstName: 'dd', lastName: 'aa', ext: 'bb', extType: 'Dept' },
    { firstName: 'dd', lastName: '55', ext: 'bb', extType: 'AO' },
    { ext: 'aa', extType: 'DigitalUser' },
    { lastName: '', ext: 'bb', extType: 'DigitalUser' }
  ],
  result1: [
    { ext: 'aa', extType: 'DigitalUser' },
    { lastName: null, ext: 'aa', extType: 'DigitalUser' },
    { lastName: '', ext: 'aa', extType: 'DigitalUser' },
    { lastName: '', ext: 'bb', extType: 'DigitalUser' },
    { firstName: '', lastName: 'ss', ext: 'dd', extType: 'FaxUser' },
    { firstName: 'aa', lastName: '', ext: '', extType: 'VirtualUser' },
    { firstName: 'aa', lastName: '', ext: 'bb', extType: 'DigitalUser' },
    { firstName: 'cc', lastName: 'ss', ext: 'aa', extType: 'FaxUser' },
    { firstName: 'dd', lastName: '55', ext: 'bb', extType: 'AO' },
    { firstName: 'dd', lastName: 'aa', ext: 'bb', extType: 'Dept' }
  ],
  case2: [
    { firstName: 'aa', lastName: '', ext: 'bb', extType: 'DigitalUser' },
    { firstName: 'aa', lastName: '', ext: '', extType: 'VirtualUser' },
    { firstName: '', lastName: 'ss', ext: 'dd', extType: 'FaxUser' },
    { firstName: 'cc', lastName: 'ss', ext: 'aa', extType: 'FaxUser' },
    { firstName: 'dd', lastName: 'aa', ext: 'bb', extType: 'Dept' },
    { firstName: 'dd', lastName: '55', ext: 'bb', extType: 'AO' }
  ],
  result2: [
    { firstName: 'aa', lastName: '', ext: 'bb', extType: 'DigitalUser' },
    { firstName: 'aa', lastName: '', ext: '', extType: 'VirtualUser' },
    { firstName: '', lastName: 'ss', ext: 'dd', extType: 'FaxUser' },
    { firstName: 'cc', lastName: 'ss', ext: 'aa', extType: 'FaxUser' },
    { firstName: 'dd', lastName: '55', ext: 'bb', extType: 'AO' },
    { firstName: 'dd', lastName: 'aa', ext: 'bb', extType: 'Dept' }
  ],
  case3: [
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
  ],
  result3: [
    { quarter: 1, totalPrices: 64, transactionNums: 4 },
    { quarter: 2, totalPrices: 0, transactionNums: 0 },
    { quarter: 3, totalPrices: 33, transactionNums: 4 },
    { quarter: 4, totalPrices: 105, transactionNums: 3 }
  ],
  case4: [
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
  ],
  result4: [
    { quarter: 1, averagePrices: 16, transactionNums: 4 },
    { quarter: 2, averagePrices: 0, transactionNums: 0 },
    { quarter: 3, averagePrices: 8.25, transactionNums: 4 },
    { quarter: 4, averagePrices: 35, transactionNums: 3 } 
  ],
  case6: {
    allKeys: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    usedKeys: [2,3,4]
  },
  result6: [0,1,5,6,7,8,9]
}