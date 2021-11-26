import iRectangle from './iRectangle';

function checkRectanglesIntersection(rectangle1: iRectangle, rectangle2: iRectangle): boolean {
	const maxCoorXRectangle1 = rectangle1.point1.x > rectangle1.point2.x ? rectangle1.point1.x : rectangle1.point2.x;
	const minCoorXRectangle1 = rectangle1.point1.x < rectangle1.point2.x ? rectangle1.point1.x : rectangle1.point2.x;
	const maxCoorXRectangle2 = rectangle2.point1.x > rectangle2.point2.x ? rectangle2.point1.x : rectangle2.point2.x;
	const minCoorXRectangle2 = rectangle2.point1.x < rectangle2.point2.x ? rectangle2.point1.x : rectangle2.point2.x;
	// Checks if the rectangles intersect in x-axis
	if (
		(rectangle2.point1.x >= minCoorXRectangle1 && rectangle2.point1.x <= maxCoorXRectangle1) ||
		(rectangle2.point2.x >= minCoorXRectangle1 && rectangle2.point2.x <= maxCoorXRectangle1) ||
		(minCoorXRectangle2 < minCoorXRectangle1 && maxCoorXRectangle2 > maxCoorXRectangle1)
	) {
		const maxCoorYRectangle1 = rectangle1.point1.y > rectangle1.point2.y ? rectangle1.point1.y : rectangle1.point2.y;
		const minCoorYRectangle1 = rectangle1.point1.y < rectangle1.point2.y ? rectangle1.point1.y : rectangle1.point2.y;
		const maxCoorYRectangle2 = rectangle2.point1.y > rectangle2.point2.y ? rectangle2.point1.y : rectangle2.point2.y;
		const minCoorYRectangle2 = rectangle2.point1.y < rectangle2.point2.y ? rectangle2.point1.y : rectangle2.point2.y;
		// Checks if the rectangles intersect in y-axis
		if (
			(rectangle2.point1.y >= minCoorYRectangle1 && rectangle2.point1.y <= maxCoorYRectangle1) ||
			(rectangle2.point2.y >= minCoorYRectangle1 && rectangle2.point2.y <= maxCoorYRectangle1) ||
			(minCoorYRectangle2 < minCoorYRectangle1 && maxCoorYRectangle2 > maxCoorYRectangle1)
		) {
			return true;
		}
	}
	return false;
}

export default checkRectanglesIntersection;
