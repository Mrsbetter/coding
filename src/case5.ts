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
let index: number = 1;

function* gen() {
  while (true) {
    yield index++;
  }
}
export class Sequence {
  private _impl: Generator<number, void, unknown>;

  constructor() {
    this._impl = gen();
  }

  next() {
    return this._impl.next().value;
  }
}
