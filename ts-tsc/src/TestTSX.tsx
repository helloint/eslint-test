import React from 'react'; // Not needed since React 17

function handleError<T extends number>(errorCode: T): T | null {
	return errorCode;
}

const TestTSX = (): JSX.Element => (
	<>
		{handleError(500)}
	</>
);

export default TestTSX;
