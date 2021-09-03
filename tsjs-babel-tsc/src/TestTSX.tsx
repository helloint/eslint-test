// The following line is not needed since React 17
import React from 'react';

function handleError<T extends number>(errorCode: T): T | null {
	return errorCode;
}

const TestTSX = (): JSX.Element => (
		<>
			{handleError(500)}
		</>
);

export default TestTSX;
