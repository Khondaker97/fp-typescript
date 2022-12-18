import { flow, pipe } from "fp-ts/function";
//pure function
// function add1(num1: number) {
//   const add = num1 + 1;
//   return (num2: number) => {
//     return add * num2;
//   };
// }

// const multiplyTo = add1(Math.random());
// console.log(multiplyTo(5));
// console.log(multiplyTo(5));
// console.log(multiplyTo(5));
// console.log(multiplyTo(5));

const add1 = (num1: number): number => {
  return num1 + 1;
};
const multiply2 = (num2: number): number => {
  return 2 * num2;
};

// const result = pipe(3, add1, multiply2);
// console.log(result);
const toLower = (s: string) => s.toLowerCase();
const suffix = (suffix: string) => (s: string) => suffix + s;

const result = pipe("AweSome", toLower, suffix("Hello"), suffix("ktm"));
console.log(result);
const result1 = flow(add1, multiply2)(3);
console.log(result1);
