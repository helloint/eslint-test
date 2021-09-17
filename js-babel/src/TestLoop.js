/*
ESLint: no-restricted-syntax https://eslint.org/docs/rules/no-restricted-syntax
Airbnb https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/style.js#L339
// disallow certain syntax forms
// https://eslint.org/docs/rules/no-restricted-syntax
'no-restricted-syntax': [
  'error',
  {
    selector: 'ForInStatement',
    message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
  },
  {
    selector: 'ForOfStatement',
    message: 'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
  },
  {
    selector: 'LabeledStatement',
    message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
  },
  {
    selector: 'WithStatement',
    message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
  },
],

for...break			https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for

for...of				https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
for...in				https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
difference see	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of#difference_between_for...of_and_for...in

Array.prototype.map()
Array.prototype.filter()
Array.prototype.reduce()

Array.prototype.keys()			https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/keys
Array.prototype.values()		https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values
Array.prototype.entries()		https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries

Array.prototype.forEach()		https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

Array.prototype.every()			https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
Array.prototype.some()			https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some

Object.keys()
Object.values()
Object.entries()
*/

const dataItems = [1, 2, 3, 4, 5];
const dataObj = {a: 1, b: 2, c: 3, d: 4, e: 5};
let result = null;

const processItem = (item, index) => {
	// Do some process
	console.log(`index: ${index}`);
	return item * 2;
};


/*
	Use Case: Execute something on every element
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
	item = processItem(item);
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
dataItems.map(item => item * 2);
dataItems.map((item) => {
	processItem(item)
});
dataItems.map(processItem);


/*
	Use Case: Finding a single element in the array
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
 */
result = 0;
result = dataItems.reduce((result, item) => result + item, 0);

for (const item of dataItems) {
	result += item;
}

console.log(result);
