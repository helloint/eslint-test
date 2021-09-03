export const TestES = (): void => {
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

	// TODO: I want to find a ES2020 feature to test `compilerOptions.lib`, but failed
	// Both in ES2020 and TS, so doesn't affect by 'lib'
	// null ?? 'some truthy value';
	//
	// globalThis.setTimeout == window.setTimeout;
	//
	// const regexp = /[a-c]/g;
	// const str = 'abc';
	// const iterator = str.matchAll(regexp);
	// Array.from(iterator, result => console.log(result));

	// SharedArrayBuffer https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer
	// ES2017 'es2017.sharedmemory'
	const sab = new SharedArrayBuffer(1024);
	const ta = new Uint8Array(sab);

	// Atomics https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics
	// ES2017 'es2017.sharedmemory', 'es2020.sharedmemory'
	ta[0]; // 0
	ta[0] = 5; // 5
	Atomics.add(ta, 0, 12); // 5
	Atomics.load(ta, 0); // 17

	// ES2015 'es2015.promise'
	new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('success');
		}, 300);
		setTimeout(() => {
			reject('failed');
		}, 500);
	}).then(() => {
		console.log('done');
	});
};
