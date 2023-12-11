const fs = require('fs');
const MAX_LENGTH = 7
// 10-100
function minMax(min, max) {
	const result = []
	for (let step = min; step <= max; step++) {
		const subResult = []
		let value = min
		subResult.push(value)

		while (subResult.length < 8) {
			value = value + step

			subResult.push(value)
		}
		if (subResult[4] < max && subResult[subResult.length - 1] >= max) {
			result.push(subResult)
		}

	}


	return result
}
function appendToFile(min, max, data) {
	const formattedArray = data.map(subResult => `[${subResult.join(', ')}]`).join('\n');
	const outputContent = `Max: ${max}\n${formattedArray}\n\n`;
	fs.appendFileSync('output.txt', outputContent, 'utf-8');
}
const result = minMax(0, 31);
appendToFile(0, 31, result);
