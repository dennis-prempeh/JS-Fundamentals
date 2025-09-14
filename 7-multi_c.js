// Print 'C is fun' x times, where x is the first argument
const x = Number(process.argv[2]);

if (isNaN(x)) {
  console.log("Missing number of occurrences");
} else {
  let output = "";
  for (let i = 0; i < x; i++) {
    output += "C is fun\n";
  }
  console.log(output);
}
