import { Option, fromNullable } from "fp-ts/Option";
import { IO } from "fp-ts/IO";

const random: IO<number> = () => Math.random();
console.log(random());

function getItem(key: string): IO<Option<string>> {
  return () => fromNullable(localStorage.getItem(key));
}
console.log(getItem("user"));
