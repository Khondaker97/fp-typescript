import { Option, None, none, isNone, Some, some } from "./options";
import { Either, Left, left, Right, right, isLeft } from "./either";
import { List, Nil, nil, Cons, cons, isNil } from "./list";
//pattern matching library
import { match } from "ts-pattern";
//option match
type MatchW = <A, B, C>(
  onNone: () => B,
  onSome: (a: A) => C
) => (x: Option<A>) => B | C;

const matchW: MatchW = (onNone, onSome) => (x) =>
  isNone(x) ? onNone() : onSome(x.value);

const mayBeNum: Option<number> = some(12);
const mayBeNum1: Option<number> = none;
const resultW = matchW(
  () => `num doesn't exist`,
  (a: number) => `num is ${a}`
)(mayBeNum1);
// console.log(resultW);

//Either match
type MatchE = <E, A, B>(
  onLeft: (e: E) => B,
  onRight: (a: A) => B
) => (x: Either<E, A>) => B;

const matchE: MatchE = (onLeft, onRight) => (x) =>
  isLeft(x) ? onLeft(x.left) : onRight(x.right);

const errOrNum: Either<string, number> = right(17);
const errOrNum1: Either<string, number> = left("Bad Input");

const resultE = matchE(
  (e: string) => `Error happened: ${e}`,
  (a: number) => `num is ${a}`
)(errOrNum1);

// console.log(resultE);

//Linked List
type MatchL = <A, B>(
  onNil: () => B,
  onCons: (head: A, tail: List<A>) => B
) => (xs: List<A>) => B;

const matchL: MatchL = (onNil, onCons) => (xs) =>
  isNil(xs) ? onNil() : onCons(xs.head, xs.tail);

const myList: List<number> = cons(3, cons(1, cons(2, nil)));
const myList1: List<number> = nil;
const resultL = matchL(
  () => "list is empty",
  (head: number, tail: List<number>) => `head is ${head}`
)(myList);
// console.log(resultL);

//ts-pattern

const resTp = match(myList1)
  .with({ _tag: "Nil" }, () => `list is empty`)
  .with({ _tag: "Cons" }, ({ head, tail }: Cons<number>) => `head is ${head}`)
  .exhaustive();
console.log(resTp);
