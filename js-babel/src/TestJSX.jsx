import React from 'react'; // Not needed since React 17

function handleError(errorCode) {
	return errorCode;
}

const TestJSX = () => (
	<>
		{ handleError(500) }
	</>
);

export default TestJSX;
