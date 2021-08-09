import {
    percentageDifference,
    minusPercentage,
} from './modules/math'

import {
    simplifyNumber,
} from './modules/visual'

Number.prototype.percentageDifference = percentageDifference
Number.prototype.minusPercentage = minusPercentage
Number.prototype.simplifyNumber = simplifyNumber


