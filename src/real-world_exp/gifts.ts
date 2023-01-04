import { Either, Left, left, right } from "fp-ts/Either";
interface Kid {
  name: string;
  age: number;
  isWellBehaved: boolean;
  wishList: string[];
}
const Kid_Bing: Kid = {
  name: "Bing",
  age: 4,
  isWellBehaved: true,
  wishList: ["book", "candy", "ice skates"],
};

const ifGetGift = (isWellBehaved: boolean) => {
  return isWellBehaved;
};
const getGiftNumber = (age: number): Either<string, number> => {
  if (age > 0 && age < 13) {
    return right(Math.round(12 / age));
  } else {
    return left("Age is invalid");
  }
};

const decideGifts = (numberOfGifts: number, wishList: string[]) => {
  if (wishList.includes("diamond")) {
    return left(new Error("Shouldn't ask for diamond."));
  } else {
    return right(
      numberOfGifts < wishList.length
        ? wishList.slice(wishList.length - numberOfGifts)
        : [
            ...wishList,
            ...new Array(numberOfGifts - wishList.length).fill("video games"),
          ]
    );
  }
};

const isLeft = <E, A>(x: Either<E, A>): x is Left<E> => x._tag === "Left";

const getGifts = (kid: Kid) => {
  if (ifGetGift(kid.isWellBehaved)) {
    if (kid.age < 13 && kid.age > 0) {
      const x = getGiftNumber(kid.age);
      const giftNumber = isLeft(x) ? x : x.right;
      return decideGifts(giftNumber as number, kid.wishList);
    } else {
      throw Error("Age not valid. No gifts.");
    }
  } else {
    throw Error("Not well-behaved. No gifts.");
  }
};

console.log(getGifts(Kid_Bing));
