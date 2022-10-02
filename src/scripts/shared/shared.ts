import {Filename, LogTarget, program, setupScriptAndIo} from "@sagittal/general"
import {popularityMetricLfcScriptGroupSettings} from "../../globals"

const applySharedPopularityMetricLfcScriptSetup = (
    {logDir, defaultLogTargets}: {logDir?: Filename, defaultLogTargets?: LogTarget[]} = {},
): void => {
    program
        .option("--no-moot", "eliminate probably moot parameters or parameter value scopes")
        .option("--z <z>", "z", parseFloat)
        .option("--only-top <onlyTop>", "only top", parseInt)
        .option("--max-unit <maxUnit>", "max unit", parseFloat)
        .option("--sync", "sync")

    setupScriptAndIo(logDir, defaultLogTargets)

    const {z, onlyTop, maxUnit, moot, sync} = program.opts()
    
    if (z) popularityMetricLfcScriptGroupSettings.z = z
    if (onlyTop) popularityMetricLfcScriptGroupSettings.onlyTop = onlyTop
    if (maxUnit) popularityMetricLfcScriptGroupSettings.maxUnit = maxUnit
    if (!moot) popularityMetricLfcScriptGroupSettings.noMoot = true
    if (sync) popularityMetricLfcScriptGroupSettings.sync = true
}

export {
    applySharedPopularityMetricLfcScriptSetup,
}
