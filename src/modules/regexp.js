/**
 * @module RegExp
 * @description
 */


/**
 * Checking mail for correctness
 * @returns {boolean}
 */
export const isEmail = function(){
    return /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(this)
}


/**
 * Numbers only
 * @returns {boolean}
 */
export const isOnlyNumbers = function(){
    return /^\d+$/.test(this)
}


/**
 * Letters only
 * @returns {boolean}
 */
export const isOnlyLetters = function(){
    return /^([a-zа-яё]+|\d+)$/i.test(this)
}


/**
 * Only latin
 * @returns {boolean}
 */
export const isOnlyLatin = function(){
    return /^[?!,.a-zA-Z0-9\s]+$/i.test(this)
}


/**
 * Only cyrillic
 * @returns {boolean}
 */
export const isOnlyCyrillic = function(){
    return /^[?!,.а-яА-ЯёЁ0-9\s]+$/i.test(this)
}


/**
 * Check domain valid
 * @returns {boolean}
 */
export const isDomain = function(){
    return /^((?:(?:(?:\w[\.\-\+]?)*)\w)+)((?:(?:(?:\w[\.\-\+]?){0,62})\w)+)\.(\w{2,6})$/.test(this)
}


/**
 * Check IP valid
 * @returns {boolean}
 */
export const isIP = function(){
    return /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\:([0-9]{1,4}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5]))?$/.test(this)
}


/**
 * Check symbols
 * @returns {boolean}
 */
export const hasSymbols = function(){
    return /^(?=.*[!@#$%^&(),.+=/\/\]\[{}?><":;|])/.test(this)
}