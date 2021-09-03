// The following line is not needed since React 17
import React from 'react';

function handleError(errorCode) {
	return errorCode;
}

const TestJSX = () => (
	<>
		{ handleError(500) }
	</>
);

export default TestJSX;
