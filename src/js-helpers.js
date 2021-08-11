import {
    percentageDifference,
    minusPercentage,
} from './modules/math'

import {
    simplifyNumber,
    toCurrency,
} from './modules/visual'

Number.prototype.percentageDifference = percentageDifference
Number.prototype.minusPercentage = minusPercentage
Number.prototype.simplifyNumber = simplifyNumber
Number.prototype.toCurrency = toCurrency


