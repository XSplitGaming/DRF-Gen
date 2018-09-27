if(process.argv.length < 3){
	console.log("Usage: node " + process.argv[1] + " FILENAME");
	process.exit(1);
};

function generate(account){
	return account[~~(account.length * Math.random())];
}

var fs = require("fs");
var filename = process.argv[2];

fs.readFile(filename, "utf8", function(err, data){
	if(err) throw err;

	const splitData = data.split("\n");
	const randomNum = Math.floor(Math.random() * splitData.length);
	const line = splitData.splice(randomNum, 1);

	console.log("OK: " + filename);
	console.log("Random account : " + generate(line));
});
