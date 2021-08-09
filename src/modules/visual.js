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


export const toPrice = function(){
    // ...
}