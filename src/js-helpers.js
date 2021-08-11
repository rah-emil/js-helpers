import {
    percentageDifference,
    minusPercentage,
} from './modules/math'

import {
    simplifyNumber,
    makeDigit,
    toCurrency,
} from './modules/visual'

Number.prototype.percentageDifference = percentageDifference
Number.prototype.minusPercentage = minusPercentage
Number.prototype.simplifyNumber = simplifyNumber
Number.prototype.makeDigit = makeDigit
Number.prototype.toCurrency = toCurrency


