export default () => {
	// Stage 0: https://github.com/tc39/proposal-bind-operator
	// https://babeljs.io/docs/en/babel-plugin-proposal-function-bind
	// Not in @babel/preset-env, so you need to install this plugin manually
	const box = {
		weight: 2,
		getWeight() {
			return this.weight;
		},
	};

	const { getWeight } = box;
	console.log(box.getWeight()); // prints '2'
	const bigBox = { weight: 10 };
	console.log(bigBox::getWeight()); // prints '10'

	// ES2022 (eslint v8.0)
	// https://babeljs.io/docs/en/babel-plugin-proposal-class-properties
	// Included in @babel/preset-env, so you don't need to install separately.
	class Bork {
		//Property initializer syntax
		instanceProperty = 'bork';

		boundFunction = () => {
			return this.instanceProperty;
		};
	}
	let myBork = new Bork();
	//Property initializers are not on the prototype.
	console.log(myBork.__proto__.boundFunction); // > undefined
	//Bound functions are bound to the class instance.
	console.log(myBork.boundFunction.call(undefined)); // > "bork"

	let idx = 0;
	// String.prototype.replaceAll https://github.com/tc39/proposal-string-replaceall
	// ES2021 'es2021.string'
	''.replaceAll('a', 'b');

	// BigInt https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
	// ES2020 'es2020.bigint'
	// const num = BigInt(2 ^ 53 + 1);
	// const num2 = 1n;
	// if (num > num2) {
	// 	console.log(num);
	// }

	// ES2020 Dynamic Import https://github.com/tc39/proposal-dynamic-import
	if (getWeight !== null) {
		import('./aModule');
	}

	// TODO: I want to find a ES2020 feature to test `compilerOptions.lib`, but failed
	// Both in ES2020 and TS, so doesn't affect by 'lib'
	// null ?? 'some truthy value';
	//
	const eq = globalThis.setTimeout === window.setTimeout;
	if (eq) {
		idx += 1;
	}

	const regexp = /[a-c]/g;
	const str = 'abc';
	const iterator = str.matchAll(regexp);
	Array.from(iterator, (result) => console.log(result));

	// SharedArrayBuffer https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer
	// ES2017 'es2017.sharedmemory'
	const sab = new SharedArrayBuffer(1024);
	const ta = new Uint8Array(sab);

	// Atomics https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics
	// ES2017 'es2017.sharedmemory', 'es2020.sharedmemory'
	ta[0] = 5; // 5
	Atomics.add(ta, 0, 12); // 5
	Atomics.load(ta, 0); // 17

	// ES2015 'es2015.promise'
	new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('success');
		}, 300);
		setTimeout(() => {
			reject(new Error('failed'));
		}, 500);
	}).then(() => {
		console.log('done');
	});

	return idx;
};
