/* eslint-disable no-constant-condition */
const dataArr = [1, 2, 3, 4, 5];
let dataArrResult = null;
const dataObj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
let dataObjResult = null;
const dataMap = new Map([
	['a', 1],
	['b', 2],
	['c', 3],
	['d', 4],
	['e', 5],
]);
let dataMapResult = null;
let result = null;

const processItem = (item, index) => {
	// Do some process
	console.log(`item: ${item}, index: ${index}`);
	return item * 2;
};

const dataArrSnapShot = JSON.stringify(dataArr);
const dataObjSnapShot = JSON.stringify(dataObj);
const dataMapSnapShot = JSON.stringify(Array.from(dataMap.entries()));

const separator = '----------------------------------------------';
let testPrepare = [separator];
testPrepare.push('Initial Data:');
testPrepare.push(`dataArr: ${dataArrSnapShot}`);
testPrepare.push(`dataObj: ${dataObjSnapShot}`);
testPrepare.push(`dataMap: ${dataMapSnapShot}`);
testPrepare.push(separator);
console.log(testPrepare.join('\r\n'));

/*
	Use Case: Execute something on every element, create a new element, and function chain is supported
	Best Choice: Array.prototype.map()
 */
// (1) loop
if (false) {
	for (let i = 0; i < dataArr.length; i++) {
		dataArr[i] = processItem(dataArr[i]);
	}
}

if (false) {
	dataArr.forEach((item, index, items) => {
		console.log(items.length);
		result = processItem(item, index);
	});
}

if (false) {
	dataArr.forEach((item) => {
		item = processItem(item); // immutable, doesn't work as expected
	});
}

if (false) {
	Object.keys(dataObj).forEach((key) => {
		result = processItem(dataObj[key]);
	});
}
if (false) {
	Object.values(dataObj).forEach((value) => {
		result = processItem(value);
	});
}
if (false) {
	Object.entries(dataObj).forEach(([key, value]) => {
		result = processItem(dataObj[key]);
		result = processItem(value);
	});
}

if (false) {
	for (const item in dataArr) {
		result = processItem(item);
	}
}
if (false) {
	for (let item in dataArr) {
		item = processItem(item);
	}
}
if (false) {
	for (const item in dataArr) {
		if (dataArr.hasOwnProperty(item)) {
			result = processItem(item);
		}
	}
}
if (false) {
	for (let item in dataArr) {
		if (dataArr.hasOwnProperty(item)) {
			item = processItem(item);
		}
	}
}

if (false) {
	for (const item of dataArr) {
		result = processItem(item);
	}
}
if (false) {
	for (let item of dataArr) {
		item = processItem(item);
	}
}

if (false) {
	for (const key of Object.keys(dataObj)) {
		result = processItem(key);
	}
}
if (false) {
	for (let key of Object.keys(dataObj)) {
		key = processItem(key);
	}
}
if (false) {
	for (const value of Object.values(dataObj)) {
		result = processItem(value);
	}
}
if (false) {
	for (const [key, index] of Object.entries(dataObj)) {
		dataObj[key] = processItem(dataObj[key], index);
	}
}

// (2) map (immutable)
if (false) {
	dataArrResult = dataArr.map((item) => item * 2);
}
if (false) {
	dataArr.map((item, index) => {
		processItem(item, index);
	});
}
if (false) {
	dataArr.map(processItem);
}

// (3) Array.from
if (false) {
	Array.from(dataMap, ([key, value]) => {
		processItem(dataMap.get(key));
		processItem(value);
	});
}
if (false) {
	Array.from(dataMap.keys(), (key) => {
		processItem(dataMap.get(key));
	});
}
if (false) {
	Array.from(dataMap.values(), (value) => {
		processItem(value);
	});
}
if (false) {
	Array.from(dataMap.entries(), ([key, value]) => {
		processItem(dataMap.get(key));
		processItem(value);
	});
}
if (false) {
	Array.from(Object.keys(dataObj), (key) => {
		processItem(dataMap.get(key));
	});
}
if (false) {
	Array.from(Object.values(dataObj), (value) => {
		processItem(value);
	});
}
if (false) {
	Array.from(Object.entries(dataObj), ([key, value]) => {
		processItem(dataObj[key]);
		processItem(value);
	});
}

/*
	Use Case: Finding a single element in the array
	Best Choice: Array.prototype.find() / includes()
 */
// (1) loop
if (false) {
	for (let i = 0; i < dataArr.length; i++) {
		if (dataArr[i] === 3) {
			result = dataArr[i];
			break;
		}
	}
}

// It loops every thing
if (false) {
	dataArr.forEach((item) => {
		if (item === 3) {
			result = item;
		}
	});
}

if (false) {
	dataArr.some((item) => {
		if (item === 3) {
			result = item;
			return true;
		}
		return false;
	});
}

if (false) {
	dataArr.every((item) => {
		if (item === 3) {
			result = item;
			return false;
		}
		return true;
	});
}

if (false) {
	for (const item of dataArr) {
		if (item === 3) {
			result = item;
			break;
		}
	}
}

if (false) {
	result = dataArr.includes(3);
}
if (false) {
	result = dataArr.find((item) => item === 3);
}
if (false) {
	result = dataArr.findIndex((item) => item === 3);
}
if (false) {
	result = dataArr.filter((item) => item === 3).shift(); // not good, filter loop every item.
}

/*
	Process all element, until condition match
	Best Choice: Array.prototype.some()
 */
const maxCount = 10;
let count = 0;

// It loops every thing
if (false) {
	dataArr.forEach((item) => {
		if (count < maxCount) {
			processItem(item);
		}
	});
}

if (false) {
	dataArr.some((item) => {
		if (count < maxCount) {
			processItem(item);
			return true;
		}
		return false;
	});
}

/*
	Iterate over an array to count a property of each item
	Best Choice: Array.prototype.reduce() or forEach() TODO: TBD
 */
if (false) {
	result = 0;
	result = dataArr.reduce((result, item) => result + item, 0);
}

if (false) {
	for (const item of dataArr) {
		result += item;
	}
}

/*
	Async calls in sequence
	Best Choice: for...of

	Async calls in parallel
	Best Choice: .map()

	Ref: https://stackoverflow.com/questions/37576685/using-async-await-with-a-foreach-loop
 */
function asyncForEach(testArr) {
	testArr.forEach(async (x) => {
		console.log(`forEach's ${x} starts at ${currentDateString()}`);
		await asyncPrint(x);
		console.log(`forEach's ${x} ends at ${currentDateString()}`);
	});
	console.log('done');
}

if (false) {
	asyncForEach(dataArr);
}

async function asyncForIn(testArr) {
	for (let x of testArr) {
		console.log(`forIn's ${x} starts at ${currentDateString()}`);
		await asyncPrint(x);
		console.log(`forIn's ${x} ends at ${currentDateString()}`);
	}
	console.log('done');
}

if (false) {
	asyncForIn(dataArr);
	console.log('done');
}

async function asyncFor(testArr) {
	for (let i = 0; i < testArr.length; i++) {
		const x = testArr[i];
		console.log(`for's ${x} starts at ${currentDateString()}`);
		await asyncPrint(x);
		console.log(`for's ${x} ends at ${currentDateString()}`);
	}
	console.log('done');
}

if (false) {
	asyncFor(dataArr);
}

async function asyncMap(testArr) {
	await Promise.all(
		testArr.map(async (x) => {
			console.log(`map's ${x} starts at ${currentDateString()}`);
			await asyncPrint(x);
			console.log(`map's ${x} ends at ${currentDateString()}`);
		})
	);
	console.log('done');
}

if (true) {
	asyncMap(dataArr);
}

function asyncPrint(x) {
	return new Promise((resolve) => {
		setTimeout(() => {
			console.log(x);
			resolve();
		}, x * 1000);
	});
}

function currentDateString() {
	const date = new Date();
	return `${date.getMinutes()}:${date.getSeconds()}.${date.getMilliseconds()}`;
}

// Result
let testResult = [separator];
testResult.push('Test Result:');
testResult.push(`result: ${result}`);
testResult.push(`dataArrResult: ${JSON.stringify(dataArrResult)}`);
testResult.push(`dataObjResult: ${JSON.stringify(dataObjResult)}`);
testResult.push(
	`dataMapResult: ${
		dataMapResult ? JSON.stringify(Array.from(dataMapResult.entries())) : null
	}`
);
if (JSON.stringify(dataArr) !== dataArrSnapShot) {
	testResult.push('dataArr changed');
} else {
	testResult.push('dataArr no changes');
}
if (JSON.stringify(dataObj) !== dataObjSnapShot) {
	testResult.push('dataObj changed');
} else {
	testResult.push('dataObj no changes');
}
if (JSON.stringify(Array.from(dataMap.entries())) !== dataMapSnapShot) {
	testResult.push('dataMap changed');
} else {
	testResult.push('dataMap no changes');
}
testResult.push(separator);
console.log(testResult.join('\r\n'));
