type SumAll = (xs: number[]) => number;
const sumAll: SumAll = (xs) => {
  if (xs.length === 0) return 0;
  const [head, ...rest] = xs;
  return head + sumAll(rest);
};
console.log(sumAll([1, 2, 3, 4]));

const sumAll2: SumAll = (xs) =>
  xs.length === 0 ? 0 : xs[0] + sumAll2(xs.slice(1));

const nums = [12, 34, 5, 6];
console.log(sumAll2(nums));
console.log(nums);
