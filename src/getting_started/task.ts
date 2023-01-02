import { Task } from "fp-ts/lib/Task";

const id = "absdfee";
const task: Task<void> = () => someTask(id);

async function someTask(id: string) {
  if (id.length < 36) {
    throw new Error("Id must have length greater than 36");
  }
  //do async work here
}
