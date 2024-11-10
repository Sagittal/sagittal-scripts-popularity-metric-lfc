import {
    abs,
    Base,
    Grade,
    indexOfFinalElement,
    isUndefined,
    log,
    Vector,
    Parameter,
    QuotientPartType,
    stringify,
    PrimeCount,
    computeLesserPrimeCount,
    Rational,
} from "@sagittal/general"
import { popularityMetricLfcScriptGroupSettings } from "../../globals"
import { LfcUnpopularityEstimate, Submetric } from "../types"
import { secondaryParameterOverride } from "./secondaryParameter"

// (sum or count)
// Of (maybe adjusted) prime factors
// (or prime factor indices via prime count function π)
// (maybe with (maybe adjusted) repetition)

const computeSubmetricAntivotes = (
    two3FreeRationalVector: Vector<Rational>,
    submetric: Submetric = {},
    quotientPartType?: QuotientPartType,
): Grade<LfcUnpopularityEstimate> => {
    const {
        aAsCoefficient = 1 as Parameter,
        aAsPowerExponent,
        aAsLogarithmBase,
        aAsPowerBase,
        w = 0 as Parameter,
        b,
        x = 0 as Parameter,
        u,
        y = 1 as Parameter,
        v,
        usePrimeIndex = false,
        sum = false,
        count = false,
        max = false,
        withoutRepetition = false,
        modifiedCount = false,
    }: Submetric = submetric

    if (!count && !max && !sum) {
        throw new Error("Attempted to compute antivotes without an operation (sum, count, or max).")
    }

    return two3FreeRationalVector.reduce(
        (
            vectorAntivotes: Grade<LfcUnpopularityEstimate>,
            primeCount: PrimeCount,
            index: number,
        ): Grade<LfcUnpopularityEstimate> => {
            if (max && index < indexOfFinalElement(two3FreeRationalVector)) {
                return 0 as Grade<LfcUnpopularityEstimate>
            }

            const prime = popularityMetricLfcScriptGroupSettings.primes[index]

            let adjustedPrime
            let adjustedPrimeCount

            adjustedPrime = count ? 1 : usePrimeIndex ? computeLesserPrimeCount(prime) : prime
            adjustedPrime = adjustedPrime + secondaryParameterOverride(x, u, primeCount, quotientPartType)
            if (!isUndefined(aAsLogarithmBase)) {
                adjustedPrime =
                    adjustedPrime >= 1 ? log(adjustedPrime, aAsLogarithmBase as number as Base) : 1
            }
            if (!isUndefined(aAsPowerExponent)) {
                adjustedPrime = adjustedPrime >= 0 ? adjustedPrime ** aAsPowerExponent : 0
            }
            if (!isUndefined(aAsPowerBase)) {
                adjustedPrime = aAsPowerBase ** adjustedPrime
            }
            adjustedPrime = adjustedPrime * aAsCoefficient
            adjustedPrime = adjustedPrime + secondaryParameterOverride(w, b, primeCount, quotientPartType)

            if (primeCount === 0) {
                adjustedPrimeCount = 0
            } else {
                adjustedPrimeCount = withoutRepetition ? 1 : abs(primeCount)
                adjustedPrimeCount =
                    adjustedPrimeCount >= 0
                        ? adjustedPrimeCount ** secondaryParameterOverride(y, v, primeCount, quotientPartType)
                        : 0
            }

            let primeCountAntivotes = adjustedPrime * adjustedPrimeCount
            if (index === 2 && modifiedCount) {
                primeCountAntivotes = primeCountAntivotes * 0.5
            }

            if (isNaN(primeCountAntivotes)) {
                throw new Error(
                    `You got NaN! in submetricAntivotes ${stringify(two3FreeRationalVector)} ${stringify(
                        submetric,
                        {
                            multiline: true,
                        },
                    )}`,
                )
            }

            return (vectorAntivotes + primeCountAntivotes) as Grade<LfcUnpopularityEstimate>
        },
        0 as Grade<LfcUnpopularityEstimate>,
    )
}

export { computeSubmetricAntivotes }
