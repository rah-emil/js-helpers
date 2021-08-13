/**
 * @module Math
 * @description Mathematical operations on numbers
 */


/**
 * Degrees to radians
 * @param deg
 * @returns {number}
 */
export const DEG_TO_RAD = deg => deg / 180 * Math.PI


/**
 * calculating haversine
 */
export const HAV = a => Math.sin(a / 2) ** 2


/**
 * calculating arcs of haversine
 */
export const AHAV = a => 2 * Math.asin(Math.sqrt(a))


/**
 * calculating the center radius
 */
export const CENTRAL_ANGLE = (loc1, loc2) => {
	const dlong = DEG_TO_RAD(loc1[1] - loc2[1])
	const lat1 = DEG_TO_RAD(loc1[0])
	const lat2 = DEG_TO_RAD(loc2[0])

	return AHAV(
		HAV(lat2 - lat1) +
		Math.cos(lat1) * Math.cos(lat2) * HAV(dlong)
	)
}


/**
 * Percentage difference between numbers X and Y.
 * For example, income for the current and last month.
 * @param y
 * @returns {number}
 */
export const percentageDifference = function(y){
	let x = this

	if(y === 0) return ((y - x) / x) * 100
	else return ((x - y) / y) * 100
}


/**
 * Subtraction from the number of percentages.
 * For example, displaying a discounted price.
 * @param percentage
 * @returns {number}
 */
export const minusPercentage = function(percentage){
	let price = this
	return price - (price * (percentage/100))
}


/**
 * Random number from MIN to MAX (integer)
 * @param min - Minimum number
 * @param max - Maximum number
 * @returns {number}
 */
export const randomInteger = function(min, max){
	let rand = min - 0.5 + Math.random() * (max - min + 1)
	return Math.round(rand)
}


/**
 * Checking a number for an integer
 * @returns {boolean}
 */
export const isInteger = function() {
	return this % 1 === 0
}


/**
 * Finding the nearest position in latitude and longitude (more details https://en.wikipedia.org/wiki/Great-circle_distance#Computational_formulas)
 * @param locations - points on the map (inside there should be coords in the format: [lat, lot])
 * @param coords - required coordinates ([lat, lot])
 * @returns {{distance: number, index: null, coords: null}}
 */
export const nearestDistance = (locations, coords) => {
	let min_dist = Number.POSITIVE_INFINITY;
	let nearest = undefined;

	for (const loc of locations) {
		const dist = CENTRAL_ANGLE([loc.coords[0], loc.coords[1]], coords);
		if (dist < min_dist) {
			min_dist = dist;
			nearest = loc;
		}
	}

	return nearest;
}
