import {Combinations, Name} from "@sagittal/general"
import {Metric, Scope} from "./bestMetric"
import {DEFAULT_UNPOPULARITY_METRIC_LFC_SCRIPTS_SETTINGS, INITIAL_SOLVER_STATUS} from "./constants"
import {Chunk, SolverStatus} from "./solver"
import {PopularityParameterId, Submetric} from "./sumOfSquares"
import {UnpopularityMetricLfcScriptGroupSettings} from "./types"

const scopesToSearch: Scope[] = [] as unknown[] as Scope[]

const solverStatus: SolverStatus = JSON.parse(JSON.stringify(INITIAL_SOLVER_STATUS))

const bestMetrics: Map<Name<Metric>, Metric> = new Map()

const metricNames: Array<Name<Metric>> = []

const memoizedSubmetricChunkCombinations: Array<Combinations<Chunk<Submetric>>> = []
const memoizedParameterChunkCombinations: Array<Combinations<Chunk<PopularityParameterId>>> = []

const popularityMetricLfcScriptGroupSettings: UnpopularityMetricLfcScriptGroupSettings =
    JSON.parse(JSON.stringify(DEFAULT_UNPOPULARITY_METRIC_LFC_SCRIPTS_SETTINGS))

export {
    scopesToSearch,
    solverStatus,
    bestMetrics,
    memoizedSubmetricChunkCombinations,
    memoizedParameterChunkCombinations,
    popularityMetricLfcScriptGroupSettings,
    metricNames,
}
