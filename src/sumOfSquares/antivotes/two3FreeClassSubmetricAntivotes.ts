import {
    computeQuotientFromVector,
    computeRationalVectorFromRationalDecimal,
    Grade,
    isUndefined,
    Parameter,
    Quotient,
    QuotientPartType,
    stringify,
    Two3FreeClass,
} from "@sagittal/general"
import { LfcUnpopularityEstimate, Submetric } from "../types"
import { maybeNuminatorSwap } from "./numinator"
import { computeSubmetricAntivotes } from "./submetricAntivotes"
import { computeWeightedAntivotes } from "./weightedAntivotes"

const compute23FreeClassSubmetricAntivotes = (
    two3FreeClass: Two3FreeClass,
    submetric: Submetric = {},
): Grade<LfcUnpopularityEstimate> => {
    const {
        useNuminator = false,
        kAsCoefficient = 1 as Parameter,
        jAsCoefficient = 1 as Parameter,
        jAsLogarithmBase,
        jAsPowerExponent,
        jAsPowerBase,
        kAsLogarithmBase,
        kAsPowerExponent,
        kAsPowerBase,
    }: Submetric = submetric

    if (
        jAsCoefficient === kAsCoefficient &&
        isUndefined(jAsLogarithmBase) &&
        isUndefined(jAsPowerExponent) &&
        isUndefined(jAsPowerBase) &&
        isUndefined(kAsLogarithmBase) &&
        isUndefined(kAsPowerExponent) &&
        isUndefined(kAsPowerBase)
    ) {
        return computeSubmetricAntivotes(two3FreeClass.vector, submetric)
    }

    const [numerator, denominator]: Quotient<{ rational: true }> = computeQuotientFromVector(
        two3FreeClass.vector,
    )
    let { numeratorAntivotes, denominatorAntivotes } = maybeNuminatorSwap({
        useNuminator,
        numeratorAntivotes: computeSubmetricAntivotes(
            computeRationalVectorFromRationalDecimal(numerator),
            submetric,
            QuotientPartType.NUMERATOR,
        ),
        denominatorAntivotes: computeSubmetricAntivotes(
            computeRationalVectorFromRationalDecimal(denominator),
            submetric,
            QuotientPartType.DENOMINATOR,
        ),
    })

    numeratorAntivotes = computeWeightedAntivotes(numeratorAntivotes, {
        coefficient: jAsCoefficient,
        logarithmBase: jAsLogarithmBase,
        powerExponent: jAsPowerExponent,
        powerBase: jAsPowerBase,
    })

    denominatorAntivotes = computeWeightedAntivotes(denominatorAntivotes, {
        coefficient: kAsCoefficient,
        logarithmBase: kAsLogarithmBase,
        powerExponent: kAsPowerExponent,
        powerBase: kAsPowerBase,
    })

    if (isNaN(numeratorAntivotes) || isNaN(denominatorAntivotes)) {
        throw new Error(
            `You got NaN! in two3FreeClassSubmetricAntivotes ${two3FreeClass} ${stringify(
                submetric,
                { multiline: true },
            )} ${numeratorAntivotes} ${denominatorAntivotes}`,
        )
    }

    return (numeratorAntivotes + denominatorAntivotes) as Grade<LfcUnpopularityEstimate>
}

export { compute23FreeClassSubmetricAntivotes }
