import { Grade, Index, Parameter, Two3FreeClass } from "@sagittal/general"

interface LfcUnpopularityEstimate {
    antivotes: Grade<LfcUnpopularityEstimate>
    two3FreeClass: Two3FreeClass
    index: Index<LfcUnpopularityEstimate>
}

/* eslint-disable prettier/prettier */
enum PopularityParameterId {
    WEIGHT_AS_COEFFICIENT = "weightAsCoefficient",      // Coefficient used for submetric
    WEIGHT_AS_LOGARITHM_BASE = "weightAsLogarithmBase", // Logarithm base used for submetric
    WEIGHT_AS_POWER_EXPONENT = "weightAsPowerExponent", // Power exponent used for submetric
    WEIGHT_AS_POWER_BASE = "weightAsPowerBase",         // Power base used for submetric
    K_AS_COEFFICIENT = "kAsCoefficient",                // Coefficient used for d
    K_AS_LOGARITHM_BASE = "kAsLogarithmBase",           // Logarithm base used for d
    K_AS_POWER_EXPONENT = "kAsPowerExponent",           // Power exponent used for d
    K_AS_POWER_BASE = "kAsPowerBase",                   // Power base used for d
    J_AS_COEFFICIENT = "jAsCoefficient",                // Coefficient used for n
    J_AS_LOGARITHM_BASE = "jAsLogarithmBase",           // Logarithm base used for n
    J_AS_POWER_EXPONENT = "jAsPowerExponent",           // Power exponent used for n
    J_AS_POWER_BASE = "jAsPowerBase",                   // Power base used for n
    A_AS_COEFFICIENT = "aAsCoefficient",                // Coefficient used for prime
    A_AS_LOGARITHM_BASE = "aAsLogarithmBase",           // Logarithm base used for prime
    A_AS_POWER_EXPONENT = "aAsPowerExponent",           // Power exponent used for prime
    A_AS_POWER_BASE = "aAsPowerBase",                   // Power base used for prime
    W = "w",                                            // Prime constant (applied after applying exponent or base)
    B = "b",                                            // Prime constant (applied after applying exponent or base), but only applied to d and overriding w if format
    X = "x",                                            // Prime constant (applied before applying exponent or base)
    U = "u",                                            // Prime constant (applied before applying exponent or base), but only applied to d and overriding x if format
    Y = "y",                                            // Prime count exponent
    V = "v",                                            // Prime count exponent, but only applied to d and overriding y if format
    USE_NUMINATOR = "useNuminator",                     // Reorient the 2,3-free class to use as its numerator the greater of the two results (the numinator) of calling the submetric on the original 2,3-free class's numerator and denominator
    MODIFIED_COUNT = "modifiedCount",                   // Dave's trick where 5's get a half-count
    USE_PRIME_INDEX = "usePrimeIndex",                  // Use the prime index function instead of using the primes directly
    WITHOUT_REPETITION = "withoutRepetition",           // Send the prime count to 1 if abs is >0 and 0 if 0
    SUM = "sum",                                        // Operation to do on the vector - sum (one of sum, count, or max must be provided)
    COUNT = "count",                                    // Operation to do on the vector - count (one of sum, count, or max must be provided)
    MAX = "max",                                        // Operation to do on the vector - max (one of sum, count, or max must be provided)
}
/* eslint-enable prettier/prettier */

type Submetric = Partial<{
    [PopularityParameterId.WEIGHT_AS_COEFFICIENT]: Parameter
    [PopularityParameterId.WEIGHT_AS_LOGARITHM_BASE]: Parameter
    [PopularityParameterId.WEIGHT_AS_POWER_EXPONENT]: Parameter
    [PopularityParameterId.WEIGHT_AS_POWER_BASE]: Parameter
    [PopularityParameterId.K_AS_COEFFICIENT]: Parameter
    [PopularityParameterId.K_AS_LOGARITHM_BASE]: Parameter
    [PopularityParameterId.K_AS_POWER_EXPONENT]: Parameter
    [PopularityParameterId.K_AS_POWER_BASE]: Parameter
    [PopularityParameterId.J_AS_COEFFICIENT]: Parameter
    [PopularityParameterId.J_AS_LOGARITHM_BASE]: Parameter
    [PopularityParameterId.J_AS_POWER_EXPONENT]: Parameter
    [PopularityParameterId.J_AS_POWER_BASE]: Parameter
    [PopularityParameterId.A_AS_COEFFICIENT]: Parameter
    [PopularityParameterId.A_AS_LOGARITHM_BASE]: Parameter
    [PopularityParameterId.A_AS_POWER_EXPONENT]: Parameter
    [PopularityParameterId.A_AS_POWER_BASE]: Parameter
    [PopularityParameterId.W]: Parameter
    [PopularityParameterId.B]: Parameter
    [PopularityParameterId.X]: Parameter
    [PopularityParameterId.U]: Parameter
    [PopularityParameterId.Y]: Parameter
    [PopularityParameterId.V]: Parameter
    [PopularityParameterId.USE_NUMINATOR]: boolean
    [PopularityParameterId.MODIFIED_COUNT]: boolean
    [PopularityParameterId.USE_PRIME_INDEX]: boolean
    [PopularityParameterId.WITHOUT_REPETITION]: boolean
    [PopularityParameterId.SUM]: boolean
    [PopularityParameterId.COUNT]: boolean
    [PopularityParameterId.MAX]: boolean
}>

type WeightedAntivotesOptions = Partial<{
    logarithmBase: Parameter
    powerExponent: Parameter
    powerBase: Parameter
    coefficient: Parameter
}>

export { LfcUnpopularityEstimate, PopularityParameterId, Submetric, WeightedAntivotesOptions }
