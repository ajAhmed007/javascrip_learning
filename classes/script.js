/**
 * creating a class for Backpack object type
 * @link https://developer.mozilla.org/en-us/doc/web/JavaScript/Reference/Classes
 */

import Backpack from "./Backpack.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  16,
  33,
  33,
  false
);

console.log("The everydayPack object: ", everydayPack);
console.log("The pocketNum value: ", everydayPack.pocketNum);
