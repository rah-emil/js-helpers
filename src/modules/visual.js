/**
 * @module Visual
 * @description Converting numbers and strings to a specific form
 */


/**
 * Simplify large numbers for readability.
 * For example, to view articles.
 * @param fractionDigits - A number of symbols after comma.
 * @returns {string} - simplified number.
 */
export const simplifyNumber = function(fractionDigits = 0){
    if (this >= 1000000000) return `${(this / 1000000000).toFixed(fractionDigits)}B`
    else if (this >= 1000000) return `${(this / 1000000).toFixed(fractionDigits)}M`
    else if (this >= 1000) return `${(this / 1000).toFixed(fractionDigits)}K`
    else return `${this.toFixed(fractionDigits)}`
}


/**
 * Dividing a number into digits.
 * @returns {string}
 */
export const makeDigit = function(){
    return this.toString().replace(/\B(?=(\d{3})+(?!\d))/g, String.fromCharCode(160))
}


/**
 * Format the number in currency format.
 * @param currency - desired currency symbol
 * @param position - location of the currency symbol
 * @param fractionDigits - number of characters after decimal point
 * @param withZero - trim trailing zeros or not
 * @param separator - decimal separator (default is dot)
 * @returns {string} - monetary number
 */
export const toCurrency = function(currency = "$", position = 'after', fractionDigits = 2, withZero = false, separator = '.'){
    let price = this.toFixed(fractionDigits).toString()

    // Add &nbsp; symbol
    price = price.replace(/\B(?=(\d{3})+(?!\d))/g, String.fromCharCode(160))

    // Remove latest zeros
    if(!withZero)
        price = price.replace(/\.0*$/, '')

    // Separator replacement
    if(separator !== '.')
        price = price.replace('.', separator)

    if(position === 'before')
        return currency + price

    // Default position
    return price + currency
}