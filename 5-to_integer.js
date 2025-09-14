// Print My number: <first argument as integer> or 'Not a number'
const arg = process.argv[2];
const num = Number(arg);
if (!isNaN(num) && arg !== undefined && arg.trim() !== "") {
	console.log(`My number: ${parseInt(arg, 10)}`);
} else {
	console.log("Not a number");
}
