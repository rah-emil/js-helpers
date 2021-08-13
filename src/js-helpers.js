import {
    percentageDifference,
    minusPercentage,
    randomInteger,
    isInteger,
    nearestDistance,
} from './modules/math'

import {
    simplifyNumber,
    makeDigit,
    toCurrency,
} from './modules/visual'

import {
    sum,
    average,
    isEmpty,
} from './modules/obj'

import {
    deleteItem,
    deleteItems,
} from './modules/arr'

import {
    isEmail,
    isOnlyNumbers,
    isOnlyLetters,
    isOnlyLatin,
    isOnlyCyrillic,
    isDomain,
    isIP,
    hasSymbols,
} from './modules/regexp'


/**
 * @module Math
 */
Number.prototype.percentageDifference = percentageDifference
Number.prototype.minusPercentage = minusPercentage
Math.randomInteger = randomInteger
Number.prototype.isInteger = isInteger
Math.nearestDistance = nearestDistance


/**
 * @module Visual
 */
Number.prototype.simplifyNumber = simplifyNumber
Number.prototype.makeDigit = makeDigit
Number.prototype.toCurrency = toCurrency


/**
 * @module Arr
 */
Array.prototype.deleteItem = deleteItem
Array.prototype.deleteItems = deleteItems


/**
 * @module Obj
 */
Object.prototype.isEmpty = isEmpty
Array.prototype.sum = sum
Array.prototype.average = average


/**
 * @module RegExp
 */
String.prototype.isEmail = isEmail
String.prototype.isOnlyNumbers = isOnlyNumbers
String.prototype.isOnlyLetters = isOnlyLetters
String.prototype.isOnlyLatin = isOnlyLatin
String.prototype.isOnlyCyrillic = isOnlyCyrillic
String.prototype.isDomain = isDomain
String.prototype.isIP = isIP
String.prototype.hasSymbols = hasSymbols
