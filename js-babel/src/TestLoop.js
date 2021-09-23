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
console.log(`dataArr: ${dataArrSnapShot}`);
const dataObjSnapShot = JSON.stringify(dataObj);
console.log(`dataObj: ${dataObjSnapShot}`);
const dataMapSnapShot = JSON.stringify(Array.from(dataMap.entries()));
console.log(`dataMap: ${dataMapSnapShot}`);

/*
	Use Case: Execute something on every element, create a new element, and function chain is supported
	Best Choice: Array.prototype.map()
 */
// (1) loop
for (let i = 0; i < dataArr.length; i++) {
	dataArr[i] = processItem(dataArr[i]);
}

dataArr.forEach((item, index, items) => {
	console.log(items.length);
	result = processItem(item, index);
});

dataArr.forEach((item) => {
	item = processItem(item); // immutable, doesn't work as expected
});

Object.keys(dataObj).forEach((key) => {
	result = processItem(dataObj[key]);
});

Object.entries(dataObj).forEach((key, index) => {
	result = processItem(dataObj[key], index);
});

for (const item in dataArr) {
	result = processItem(item);
}

for (let item in dataArr) {
	item = processItem(item);
}

for (const item in dataArr) {
	if (dataArr.hasOwnProperty(item)) {
		result = processItem(item);
	}
}

for (let item in dataArr) {
	if (dataArr.hasOwnProperty(item)) {
		item = processItem(item);
	}
}

for (const item of dataArr) {
	result = processItem(item);
}

for (let item of dataArr) {
	item = processItem(item);
}

for (const key of Object.keys(dataObj)) {
	result = processItem(key);
}

for (let key of Object.keys(dataObj)) {
	key = processItem(key);
}

for (const value of Object.values(dataObj)) {
	result = processItem(value);
}

for (const [key, index] of Object.entries(dataObj)) {
	dataObj[key] = processItem(dataObj[key], index);
}

// (2) map (immutable)
dataArrResult = dataArr.map((item) => item * 2);
dataArr.map((item, index) => {
	processItem(item, index);
});
dataArr.map(processItem);

// (3) Array.from
Array.from(dataMap.values(), (value) => {
	processItem(value);
});
Array.from(dataMap, ([key, value]) => {
	processItem(value);
});
Array.from(dataMap.entries(), ([key, value]) => {
	processItem(value);
});
Array.from(dataMap.keys(), (key) => {
	processItem(dataMap.get(key));
});
Array.from(Object.values(dataObj), (value) => {
	processItem(value);
});
Array.from(Object.entries(dataObj), ([key, value]) => {
	processItem(value);
});
Array.from(Object.keys(dataObj), (key) => {
	processItem(dataMap.get(key));
});

/*
	Use Case: Finding a single element in the array
	Best Choice: Array.prototype.find()
 */
// (1) loop
for (let i = 0; i < dataArr.length; i++) {
	if (dataArr[i] === 3) {
		result = dataArr[i];
		break;
	}
}

// It loops every thing
dataArr.forEach((item) => {
	if (item === 3) {
		result = item;
	}
});

dataArr.some((item) => {
	if (item === 3) {
		result = item;
		return true;
	}
	return false;
});

dataArr.every((item) => {
	if (item === 3) {
		result = item;
		return false;
	}
	return true;
});

for (const item of dataArr) {
	if (item === 3) {
		result = item;
		break;
	}
}

result = dataArr.find((item) => item === 3);
result = dataArr.findIndex((item) => item === 3);
result = dataArr.filter((item) => item === 3).shift(); // not good, filter loop every item.

/*
	Process all element, until condition match
	Best Choice: Array.prototype.some()
 */
const maxCount = 10;
let count = 0;

// It loops every thing
dataArr.forEach((item) => {
	if (count < maxCount) {
		processItem(item);
	}
});

dataArr.some((item) => {
	if (count < maxCount) {
		processItem(item);
		return true;
	}
	return false;
});

/*
	Iterate over an array to count a property of each item
	Best Choice: Array.prototype.reduce() or forEach() TODO: TBD
 */
result = 0;
result = dataArr.reduce((result, item) => result + item, 0);

for (const item of dataArr) {
	result += item;
}

console.log(`dataArrResult: ${JSON.stringify(dataArrResult)}`);
console.log(`dataObjResult: ${JSON.stringify(dataObjResult)}`);
console.log(
	`dataMapResult: ${
		dataMapResult ? JSON.stringify(Array.from(dataMapResult.entries())) : null
	}`
);
if (JSON.stringify(dataArr) !== dataArrSnapShot) {
	console.log(`dataArr changed`);
}
if (JSON.stringify(dataObj) !== dataObjSnapShot) {
	console.log(`dataObj changed`);
}
if (JSON.stringify(Array.from(dataMap.entries())) !== dataMapSnapShot) {
	console.log(`dataMap changed`);
}
console.log(`result: ${result}`);
