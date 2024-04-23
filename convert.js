const fs = require("fs");

var obj = { words: [] };

const data = fs.readFileSync("./wordlist.txt").toString().split("\n");

data.forEach((el) => obj.words.push({ word: el }));

console.log(obj);
fs.writeFileSync("wordlist.json", JSON.stringify(obj), (err) => {
	if (err) throw err;
});
