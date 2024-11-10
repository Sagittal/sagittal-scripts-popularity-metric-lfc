import { Count, Exponent, Max, Parameter, Prime, Rank, ScalaPopularityStat, Step } from "@sagittal/general"
import { LfcUnpopularityEstimate } from "./sumOfSquares"

interface UnpopularityMetricLfcScriptGroupSettings {
    z: Exponent<Rank<ScalaPopularityStat | LfcUnpopularityEstimate>>
    onlyTop: Count<ScalaPopularityStat>
    maxUnit: Max<Step<{ of: Parameter }>>
    noMoot: boolean
    sync: boolean
    primes: Prime[]
}

export { UnpopularityMetricLfcScriptGroupSettings }
