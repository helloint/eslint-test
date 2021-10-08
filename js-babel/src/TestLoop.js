/*
See more on: https://github.com/helloint/array-loop-test
 */
const dataArr = [1, 2, 3, 4, 5];

// eslint-disable-next-line no-restricted-syntax
for (const idx in dataArr) {
	console.log(dataArr[idx]);
}

// eslint-disable-next-line no-restricted-syntax
for (const val of dataArr) {
	console.log(val);
}
