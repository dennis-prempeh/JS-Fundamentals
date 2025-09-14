// Print a square of size x using 'X', or 'Missing size' if invalid
const size = Number(process.argv[2]);
if (isNaN(size) || process.argv[2] === undefined) {
	console.log("Missing size");
} else {
	for (let i = 0; i < size; i++) {
		console.log("X".repeat(size));
	}
}
