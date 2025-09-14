// Print 'C is fun' x times, where x is the first argument
const x = Number(process.argv[2]);

if (!Number.isInteger(x)) {
  console.log("Missing number of occurrences");
} else if (x > 0) {
  let output = "";
  for (let i = 0; i < x; i++) {
    output += "C is fun";
    if (i < x - 1) output += "\n"; // avoid trailing newline
  }
  console.log(output);
}

