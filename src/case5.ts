/*
 * @Date: 2021/03/04
 * @LastEditors: YanShen
 */
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
let _value:number = 0;

class Sequence {
  seq: number;
  next() {
    return ++this.seq;
  };
};

Object.defineProperty(Sequence.prototype, 'seq', {
  get() {
    return _value;
  },
  set(val: number) {
    _value = val;
  }
});

export const generateSequence = () => {
  return new Sequence();
};
