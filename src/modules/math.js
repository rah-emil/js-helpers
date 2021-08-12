/**
 * @module Math
 * @description Mathematical operations on numbers
 */


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
