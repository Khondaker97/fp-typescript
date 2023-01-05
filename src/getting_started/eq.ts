import { Eq, struct, contramap } from "fp-ts/lib/Eq";
/**
 * equals follows
 * 1. Reflexivity
 * 2. Symmetry
 * 3. Transitivity
 */
// classic func <A>(E: Eq<A>): (a: A, as: Array<A>) => boolean
type Elements = <A>(E: Eq<A>) => (a: A, as: Array<A>) => boolean;
const elem: Elements = (E) => (a, as) => as.some((item) => E.equals(item, a));

const eqNumber: Eq<number> = {
  equals: (p1, p2) => p1 === p2,
};

elem(eqNumber)(1, [1, 2, 3]); // true
elem(eqNumber)(4, [1, 2, 3]); // false

interface Point {
  x: number;
  y: number;
}

// const eqPoint: Eq<Point> = {
//     equals: (p1, p2) => p1 === p2 || (p1.x === p2.x && p1.y === p2.y)
// }
const eqPoint: Eq<Point> = struct({
  x: eqNumber,
  y: eqNumber,
});

interface Vector {
  from: Point;
  to: Point;
}

const eqVector: Eq<Vector> = struct({
  from: eqPoint,
  to: eqPoint,
});

interface User {
  userId: number;
  name: string;
}

/** two users are equal if their `userId` field is equal */
const eqUser = contramap((user: User) => user.userId)(eqNumber);

eqUser.equals(
  { userId: 1, name: "Giulio" },
  { userId: 1, name: "Giulio Canti" }
); // true
eqUser.equals({ userId: 1, name: "Giulio" }, { userId: 2, name: "Giulio" }); // false
