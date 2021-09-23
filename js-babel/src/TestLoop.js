const dataItems = [1, 2, 3, 4, 5];
let dataItemsResult = null;
const dataObj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
let dataObjResult = null;
let result = null;

const processItem = (item, index) => {
	// Do some process
	console.log(`index: ${index}`);
	return item * 2;
};

/*
	Use Case: Execute something on every element, create a new element, and function chain is supported
	Best Choice: Array.prototype.map()
 */
// (1) loop
for (let i = 0; i < dataItems.length; i++) {
	dataItems[i] = processItem(dataItems[i]);
}

dataItems.forEach((item, index, items) => {
	console.log(items.length);
	result = processItem(item, index);
});

dataItems.forEach((item) => {
	item = processItem(item); // immutable, doesn't work as expected
});

Object.keys(dataObj).forEach((key) => {
	result = processItem(dataObj[key]);
});

Object.entries(dataObj).forEach((key, index) => {
	result = processItem(dataObj[key], index);
});

for (const item in dataItems) {
	result = processItem(item);
}

for (let item in dataItems) {
	item = processItem(item);
}

for (const item in dataItems) {
	if (dataItems.hasOwnProperty(item)) {
		result = processItem(item);
	}
}

for (let item in dataItems) {
	if (dataItems.hasOwnProperty(item)) {
		item = processItem(item);
	}
}

for (const item of dataItems) {
	result = processItem(item);
}

for (let item of dataItems) {
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
dataItemsResult = dataItems.map((item) => item * 2);
dataItems.map((item, index) => {
	processItem(item, index);
});
dataItems.map(processItem);

/*
	Use Case: Finding a single element in the array
	Best Choice: Array.prototype.find()
 */
// (1) loop
for (let i = 0; i < dataItems.length; i++) {
	if (dataItems[i] === 3) {
		result = dataItems[i];
		break;
	}
}

// It loops every thing
dataItems.forEach((item) => {
	if (item === 3) {
		result = item;
	}
});

dataItems.some((item) => {
	if (item === 3) {
		result = item;
		return true;
	}
	return false;
});

dataItems.every((item) => {
	if (item === 3) {
		result = item;
		return false;
	}
	return true;
});

for (const item of dataItems) {
	if (item === 3) {
		result = item;
		break;
	}
}

result = dataItems.find((item) => item === 3);
result = dataItems.findIndex((item) => item === 3);
result = dataItems.filter((item) => item === 3).shift(); // not good, filter loop every item.

/*
	Process all element, until condition match
	Best Choice: Array.prototype.some()
 */
const maxCount = 10;
let count = 0;

// It loops every thing
dataItems.forEach((item) => {
	if (count < maxCount) {
		processItem(item);
	}
});

dataItems.some((item) => {
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
result = dataItems.reduce((result, item) => result + item, 0);

for (const item of dataItems) {
	result += item;
}

console.log(dataItems);
console.log(dataItemsResult);
console.log(dataObj);
console.log(dataObjResult);
console.log(result);
