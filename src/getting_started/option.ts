import { Option, fromNullable } from "fp-ts/Option";

function find<A>(arr: Array<A>, predicate: (a: A) => boolean): Option<A> {
  return fromNullable(arr.find(predicate));
}
console.log(find([2, 3, 4], (a) => a === 4));
console.log(find([2, 3, 4], (a) => a === 5));
console.log(find(["Abul", "Morris", "Babul"], (a) => a === "Harris"));
console.log(
  find(
    [
      { id: 1, name: "Abul" },
      { id: 2, name: "Morris" },
      { id: 3, name: "Babul" },
    ],
    (a) => a.id === 2
  )
);
