export default () => {
	let foo1 = idx => {
		return idx - 1;
	};
	let foo2 = (idx) => {
		return idx - 1;
	};
	let foo3 = (idx) => idx - 1;
	const foo4 = (idx) => idx - 1;

	// ESLint can't format this line.
	// Demo from here: https://github.com/prettier/prettier-eslint/issues/101#issuecomment-313233479
	foo(reallyLongArg(), omgSoManyParameters(), IShouldRefactorThis(), isThereSeriouslyAnotherOne(), noWayYouGottaBeKiddingMe());

	return idx;
};
