import { Ord, fromCompare, contramap, reverse } from "fp-ts/Ord";

const ordNumber: Ord<number> = fromCompare((x, y) =>
  x < y ? -1 : x > y ? 1 : 0
);
//func return <A>(O: Ord<A>): (x: A, y: A)
type Order = <A>(O: Ord<A>) => (x: A, y: A) => A;

const min: Order = (O) => (x, y) => O.compare(x, y) === 1 ? y : x;
const max: Order = (O) => min(reverse(O));

min(ordNumber)(2, 1); // 1

type User = {
  name: string;
  age: number;
};
const byAge: Ord<User> = fromCompare((x, y) => ordNumber.compare(x.age, y.age));
//combinator
const byAge2: Ord<User> = contramap((user: User) => user.age)(ordNumber);

const user1 = { name: "Guido", age: 48 };
const user2 = { name: "Giulio", age: 45 };
const getYounger = min(byAge);
getYounger(user1, user2); // { name: 'Giulio', age: 45 }

const getOlder = max(byAge2);
getOlder(user1, user2); // { name: 'Guido', age: 48 }
