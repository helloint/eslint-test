// Test 'no-undef': "error". This rule fails on the following line, which is valid for TypeScript
import admin from 'firebase-admin';
import WriteResult = admin.firestore.WriteResult;

export const result = (): boolean => WriteResult == null;

export enum VideoTypes {
	LIVE = 'LIVE',
	VOD = 'VOD',
	EVENT = 'EVENT'
}

export interface IVideo {
	type: VideoTypes;
}

// Remove `IVideo` to test TS7006: Parameter 'video' implicitly has an 'any' type.
export const isVOD = (video: IVideo): boolean => video.type === VideoTypes.VOD;

export const minus = (a: number,  b: number): number => a - b;

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
// ES2020 'es2020.bigint'
// export const sum = (a: bigint, b: bigint): bigint => a + b;

const b = 2; // Comment this line to test 'no-undef'
export const a = 1 + b;

export type SomeThing = {
	id: string;
}

// BigInt
// export const CompanyProfileStub: Company = {
// 	id: 1n
// };
//
// export interface Company {
// 	id: bigint;
// }
