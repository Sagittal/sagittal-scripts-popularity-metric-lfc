import {isNumber, stringify} from "@sagittal/general"
import {PopularityParameterId, Submetric} from "./types"

const checkSubmetricsForInvalidParameterValueCombinations = (submetrics: Submetric[]): void => {
    submetrics.forEach((submetric: Submetric): void => {
        const {
            [PopularityParameterId.A_AS_LOGARITHM_BASE]: aAsLogarithmBase,
            [PopularityParameterId.J_AS_LOGARITHM_BASE]: jAsLogarithmBase,
            [PopularityParameterId.K_AS_LOGARITHM_BASE]: kAsLogarithmBase,
            [PopularityParameterId.WEIGHT_AS_LOGARITHM_BASE]: weightAsLogarithmBase,
        } = submetric

        if (aAsLogarithmBase === 1) {
            throw new Error(`Submetric ${stringify(submetric)} has a of base 1 and will compute undefined antivotes.`)
        }
        if (isNumber(aAsLogarithmBase) && aAsLogarithmBase < 0) {
            throw new Error(`Submetric ${stringify(submetric)} has a of negative base and will compute undefined antivotes.`)
        }
        if (jAsLogarithmBase === 1) {
            throw new Error(`Submetric ${stringify(submetric)} has j of base 1 and will compute undefined antivotes.`)
        }
        if (isNumber(jAsLogarithmBase) && jAsLogarithmBase < 0) {
            throw new Error(`Submetric ${stringify(submetric)} has j of negative base and will compute undefined antivotes.`)
        }
        if (kAsLogarithmBase === 1) {
            throw new Error(`Submetric ${stringify(submetric)} has k of base 1 and will compute undefined antivotes.`)
        }
        if (isNumber(kAsLogarithmBase) && kAsLogarithmBase < 0) {
            throw new Error(`Submetric ${stringify(submetric)} has k of negative base and will compute undefined antivotes.`)
        }
        if (weightAsLogarithmBase === 1) {
            throw new Error(`Submetric ${stringify(submetric)} has weight of base 1 and will compute undefined antivotes.`)
        }
        if (isNumber(weightAsLogarithmBase) && weightAsLogarithmBase < 0) {
            throw new Error(`Submetric ${stringify(submetric)} has weight of negative base and will compute undefined antivotes.`)
        }
    })
}

export {
    checkSubmetricsForInvalidParameterValueCombinations,
}

