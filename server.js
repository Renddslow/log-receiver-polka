const fs = require('fs');
const path = require('path');

const pathname = path.join(__dirname, 'data.csv');

module.exports = (req, res) => {
	const log = req.query;

	fs.readFile(pathname, (err, data) => {
		const logs = data.toString();
		const newLog = Object.keys(log)
			.map((k) => `${k},${log[k]}`)
			.join('\n');

		fs.writeFile(
			pathname,
			logs ?
				logs + '\n' + newLog :
				'Timestamp,Title,URL,Data\n' + newLog,
			() => {},
		);
	});

	res.end();
};