const Benchmark = require("benchmark");
const addon = require("bindings")("addon");
const jsPrime = require("./isPrime");

console.log(`native addon whoami: ${addon.WhoAmI()}`);

const number = 8250293;
var suite = new Benchmark.Suite();

suite
  .add("JavaScript isPrime", function() {
    jsPrime(number);
  })
  .add("C++ isPrime", function() {
    addon.IsPrime(number);
  })
  .on("cycle", cycle)
  .on("complete", complete)
  .run({ async: true });

function cycle(event) {
  console.log(String(event.target));
}

function complete(a, b) {
  console.log("Fastest: " + this.filter("fastest").map("name"));
  console.log("Slowest: " + this.filter("slowest").map("name"));
}
