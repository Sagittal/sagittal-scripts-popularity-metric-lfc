import {increment, LogTarget, mod, saveLog} from "@sagittal/general"
import {Scope} from "../../bestMetric"
import {scopesToSearch, solverStatus} from "../../globals"

const populateScope = (scope: Scope): void => {
    scopesToSearch.push(scope)

    solverStatus.populatedScopeCount = increment(solverStatus.populatedScopeCount)

    if (mod(solverStatus.populatedScopeCount, 1000) === 0) {
        saveLog(`${solverStatus.populatedScopeCount} scopes have been populated so far`, LogTarget.SETUP)
    }
}

export {
    populateScope,
}
