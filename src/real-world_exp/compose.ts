type Compose = <A, B, C>(f: (x: B) => C, g: (x: A) => B) => (x: A) => C;

export const compose: Compose = (f, g) => (x) => f(g(x));

type Increment = (x: number) => number;
export const increment: Increment = (x) => x + 1;

type ToString = (x: number) => string;
const toStr: ToString = (x) => `${x}`;

const incThenStr = compose(toStr, increment);
console.log(incThenStr(6));
