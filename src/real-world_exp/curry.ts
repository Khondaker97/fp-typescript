type Sum = (a: number) => (b: number) => number;
const sum: Sum = (a) => (b) => a + b;

console.log(sum(1)(6));

type Increment1 = (x: number) => number;
const increment1: Increment1 = sum(1);

type Decrement = (x: number) => number;
const decrement1: Decrement = sum(-1);

console.log(increment1(6));
console.log(decrement1(7));

function normalSum(a: number, b: number): number {
  return a + b;
}

type Curry2 = <A, B, Z>(f: (a: A, b: B) => Z) => (a: A) => (b: B) => Z;
const curry2: Curry2 = (f) => (a) => (b) => f(a, b);

const sum2 = curry2(normalSum);
console.log(sum2(3)(5));
