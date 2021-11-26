import checkRectanglesIntersection from './checkRectanglesIntersection';
import iRectangle from './iRectangle';

const rectanglesPairsWithIntersection: Array<[iRectangle, iRectangle]> = [
	[
		{ point1: { x: 3, y: 5 }, point2: { x: 11, y: 11 } },
		{ point1: { x: 7, y: 2 }, point2: { x: 13, y: 7 } },
	],
	[
		{ point1: { x: 3, y: 5 }, point2: { x: 11, y: 11 } },
		{ point1: { x: 11, y: 11 }, point2: { x: 15, y: 13 } },
	],
];
const rectanglesPairsWithoutIntersection: Array<[iRectangle, iRectangle]> = [
	[
		{ point1: { x: 7, y: 2 }, point2: { x: 13, y: 7 } },
		{ point1: { x: 11, y: 11 }, point2: { x: 15, y: 13 } },
	],
];

function validateArray(toValidate: Array<[iRectangle, iRectangle]>): Array<boolean> {
	const validationArray = [];
	for (let i = 0; i < toValidate.length; i++) {
		const isValid = checkRectanglesIntersection(toValidate[i][0], toValidate[i][1]);
		validationArray.push(isValid);
	}
	console.log(validationArray);
	return validationArray;
}

it('should detect a intersection between two rectangles', () => {
	const validationArray = validateArray(rectanglesPairsWithIntersection);
	expect(validationArray).not.toContain(false);
});

it('should not detect a intersection between two rectangles', () => {
	const validationArray = validateArray(rectanglesPairsWithoutIntersection);
	expect(validationArray).not.toContain(true);
});
