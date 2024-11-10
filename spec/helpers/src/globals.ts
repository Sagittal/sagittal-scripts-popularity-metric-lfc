import { cleanArray, setAllPropertiesOfObjectOnAnother } from "@sagittal/general"
import {
    DEFAULT_UNPOPULARITY_METRIC_LFC_SCRIPTS_SETTINGS,
    INITIAL_SOLVER_STATUS,
} from "../../../src/constants"
import {
    bestMetrics,
    memoizedParameterChunkCombinations,
    memoizedSubmetricChunkCombinations,
    metricNames,
    popularityMetricLfcScriptGroupSettings,
    scopesToSearch,
    solverStatus,
} from "../../../src/globals"

afterEach((): void => {
    cleanArray(scopesToSearch)
    cleanArray(memoizedSubmetricChunkCombinations)
    cleanArray(memoizedParameterChunkCombinations)
    cleanArray(metricNames)
    bestMetrics.clear()

    setAllPropertiesOfObjectOnAnother({
        objectToChange: solverStatus,
        objectWithProperties: INITIAL_SOLVER_STATUS,
    })
    setAllPropertiesOfObjectOnAnother({
        objectToChange: popularityMetricLfcScriptGroupSettings,
        objectWithProperties: DEFAULT_UNPOPULARITY_METRIC_LFC_SCRIPTS_SETTINGS,
    })
})
