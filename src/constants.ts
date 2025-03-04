import {
    computePrimes,
    Count,
    Exponent,
    Max,
    Mean,
    Parameter,
    Rank,
    ScalaPopularityStat,
    Step,
} from "@sagittal/general"
import { Sample, Scope } from "./bestMetric"
import { Chunk, SolverStatus } from "./solver"
import { LfcUnpopularityEstimate } from "./sumOfSquares"
import { UnpopularityMetricLfcScriptGroupSettings } from "./types"

// "Zipf exponent"; Applied to the ranks before calculating sum-of-squares, in accordance with the data,
// To capture how the ranks toward the top of the list are much more important to match
const DEFAULT_Z = -1 as Exponent<Rank<ScalaPopularityStat | LfcUnpopularityEstimate>>

// The first popularity which no longer has >0.05% of votes, and drops from 19 votes suddenly to 16
const DEFAULT_ONLY_TOP = 80 as Count<ScalaPopularityStat>

// When calculating ED, the max unit it will allow a gap between samples
const DEFAULT_MAX_UNIT = 0.1 as Max<Step<{ of: Parameter }>>

const INITIAL_SOLVER_STATUS: SolverStatus = {
    chunkCount: 0 as Count<Chunk>,
    finishedPopulating: false,
    populatedScopeCount: 0 as Count<Scope>,
    searchedScopeCount: 0 as Count<Scope>,
    averageSamplesPerScope: 0 as Mean<{ of: Count<Sample> }>,
    sampleCount: 0 as Count<Sample>,
}

const DEFAULT_UNPOPULARITY_METRIC_LFC_SCRIPTS_SETTINGS: UnpopularityMetricLfcScriptGroupSettings = {
    z: DEFAULT_Z,
    onlyTop: DEFAULT_ONLY_TOP,
    maxUnit: DEFAULT_MAX_UNIT,
    noMoot: false,
    sync: false,
    primes: computePrimes(),
}

// An order of magnitude higher precision when perfecting
const DEFAULT_MAX_UNIT_WHEN_PERFECTING = (DEFAULT_MAX_UNIT / 10) as Max<Step<{ of: Parameter }>>

export {
    INITIAL_SOLVER_STATUS,
    DEFAULT_UNPOPULARITY_METRIC_LFC_SCRIPTS_SETTINGS,
    DEFAULT_MAX_UNIT_WHEN_PERFECTING,
}
