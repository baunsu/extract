const fs = require("fs");

let obj = {
	solutions: [],
};

fs.readFile("test.txt", (err, data) => {
	if (err) throw err;

	var words = data.toString();
	words = words.split("\r\n");

	let i = 1;
	words = words.map((el) => {
		if (el.length === 5 && /^[A-Za-z]+$/.test(el)) {
			obj.solutions.push({ key: i++, word: el });
		}
	});

	fs.writeFile("wordlist.json", JSON.stringify(obj), (err) => {
		if (err) throw err;
	});
});
