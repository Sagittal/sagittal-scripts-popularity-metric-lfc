import {Count, Exponent, Max, Parameter, Prime, Rank, ScalaPopularityStat, Step} from "@sagittal/general"
import {LfcUnpopularityEstimate} from "./sumOfSquares"

interface PopularityMetricLfcScriptGroupSettings {
    z: Exponent<Rank<ScalaPopularityStat | LfcUnpopularityEstimate>>,
    onlyTop: Count<ScalaPopularityStat>,
    maxUnit: Max<Step<{of: Parameter}>>,
    noMoot: boolean,
    sync: boolean,
    primes: Prime[],
}

export {
    PopularityMetricLfcScriptGroupSettings,
}

// TODO: Wait a tic, shouldn't this whole thing be the UnpopularityMetricLfc, not the Popularity...?!
