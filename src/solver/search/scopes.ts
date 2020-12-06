import {doOnNextEventLoop, LogTarget, saveLog} from "@sagittal/general"
import {scopesToSearch, solverStatus} from "../../globals"
import {formatSearchedAndPopulated} from "../io"
import {ONE_SECOND_TO_GIVE_POPULATION_A_CHANCE_TO_CATCH_UP} from "./constants"
import {searchPopulatedScopes, searchPopulatedScopesSync} from "./populatedScopes"

const searchScopes = async (): Promise<void> => {
    while (scopesToSearch.length > 0) {
        await doOnNextEventLoop(searchPopulatedScopes)
    }

    if (!solverStatus.finishedPopulating) {
        saveLog(`searching got ahead of populating; waiting 1 second for more scopes to be populated ${formatSearchedAndPopulated()}`, LogTarget.PROGRESS)

        return doOnNextEventLoop(searchScopes, ONE_SECOND_TO_GIVE_POPULATION_A_CHANCE_TO_CATCH_UP)
    }
}

const searchScopesSync = (): void => {
    while (scopesToSearch.length > 0) {
        searchPopulatedScopesSync()
    }
}

export {
    searchScopes,
    searchScopesSync,
}
