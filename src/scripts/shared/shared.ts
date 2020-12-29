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

    if (program.z) popularityMetricLfcScriptGroupSettings.z = program.z
    if (program.onlyTop) popularityMetricLfcScriptGroupSettings.onlyTop = program.onlyTop
    if (program.maxUnit) popularityMetricLfcScriptGroupSettings.maxUnit = program.maxUnit
    if (!program.moot) popularityMetricLfcScriptGroupSettings.noMoot = true
    if (program.sync) popularityMetricLfcScriptGroupSettings.sync = true
}

export {
    applySharedPopularityMetricLfcScriptSetup,
}
