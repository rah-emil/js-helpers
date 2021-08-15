/**
 * @module Obj
 * @description Operations on objects
 */


/**
 * We return the sum of the values of the array of objects
 * @param key
 * @returns {number} - sum
 */
export const sum = function(key){
    let sum = 0;

    Array.from(this).forEach(item => {
        sum += parseFloat(item[key])
    })

    return sum
}


/**
 * Returning the average of the fields
 * @param key
 * @param fractionDigits
 * @returns {string}
 */
export const average = function(key, fractionDigits = 2){
    let sum = this.sum(key)
    return (sum / this.length || 1).toFixed(fractionDigits).replace(/\.0*$/, '')
}


/**
 * Check object for emptiness
 * @returns {boolean}
 */
export const isEmpty = function(obj){
    return Object.keys(obj).length === 0
}