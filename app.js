const addon = require("bindings")("addon");

console.log(`native addon whoami: ${addon.WhoAmI()}`);

for (let i = 0; i < 3; i++) {
  console.log(`native addon increment: ${addon.Increment(i)}`);
}

const number = 654188429;
const NATIVE = "c++";
const JS = "js";

console.time(NATIVE);
console.log(
  `${NATIVE}: checking whether ${number} is prime... ${addon.IsPrime(number)}`
);
console.timeEnd(NATIVE);
console.log("");

const isPrime = require("./isPrime");
console.time(JS);
console.log(`${JS}: checking whether ${number} is prime... ${isPrime(number)}`);
console.timeEnd(JS);
