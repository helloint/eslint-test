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

ES5
for...break			https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
for...in				https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
Array.prototype.forEach()		https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
	为Array对象引入了Array.forEach方法以代替for循环，Array.forEach方法的特点是自带闭包，以解决因为缺乏块级作用域导致需要使用取巧的方法来解决var的作用域问题。
Array.prototype.map()
Array.prototype.filter()
Array.prototype.reduce()
Array.prototype.every()			https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
Array.prototype.some()			https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
Object.keys()

ES6/ES2015
for...of				https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
	ECMAScript引入了一种新的循环语句for...of，主要的用途是代替for...in循环语句；
	difference:		https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of#difference_between_for...of_and_for...in
Array.prototype.keys()			https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/keys
Array.prototype.values()		https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values
Array.prototype.entries()		https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries
	在ES2015标准中，数组类型再次被赋予了一个名为entries的方法，它可以返回对应的数组中每一个元素与其下标配对的一个新数组。
Array.prototype.find()
Array.prototype.findIndex()

ES2016
Array.prototype.includes()
	indexOf通过返回值是否等于-1来获得查询对象是否被该数组包含。而includes则是通过返回true或者false来得出结果，对于只是查询是否包含，语义显得更清晰一些。

ES2017
Object.entries()
Object.values()
*/

const dataItems = [1, 2, 3, 4, 5];
let dataItemsResult = null;
const dataObj = {a: 1, b: 2, c: 3, d: 4, e: 5};
let dataObjResult = null;
let result = null;

const processItem = (item, index) => {
	// Do some process
	console.log(`index: ${index}`);
	return item * 2;
};


/*
	Use Case: Execute something on every element
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
dataItemsResult = dataItems.map(item => item * 2);
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
