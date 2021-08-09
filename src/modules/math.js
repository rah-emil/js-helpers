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
