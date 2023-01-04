import { compose, increment } from "./compose";

type DivideByTwo = (x: number) => number;
const divideByTwo: DivideByTwo = (x) => 2 / x;

const composed = compose(increment, divideByTwo);
console.log(composed(8));
console.log(composed(0));

type Option<A> = Some<A> | None;
interface Some<A> {
  _tag: "Some";
  value: A;
}
interface None {
  _tag: "None";
}
const some = <A>(x: A): Option<A> => ({ _tag: "Some", value: x });
const none: Option<never> = { _tag: "None" };

const isNone = <A>(x: Option<A>): x is None => x._tag === "None";

type DivideBy2 = (x: number) => Option<number>;
const divideBy2: DivideBy2 = (x) => (x === 0 ? none : some(2 / x));

const composed2 = compose(
  (x: Option<number>) => (isNone(x) ? none : some(increment(x.value))),
  divideBy2
);
console.log(composed2(8));
console.log(composed2(0));
