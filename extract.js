const fs = require("fs");
const readline = require("readline");

const processLine = async () => {
	const fileStream = fs.createReadStream("english.txt");
	const output = fs.createWriteStream("wordlist.txt");

	const rl = readline.createInterface({
		input: fileStream,
		crlfDelay: Infinity,
	});

	for await (const line of rl) {
		if (line.length === 5 && /^[A-Za-z]+$/.test(line)) {
			output.write(line + "\n");
		}
	}
};

processLine();
