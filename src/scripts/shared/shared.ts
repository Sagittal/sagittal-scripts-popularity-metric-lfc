import {Filename, LogTarget, program, ScriptFlag, setupScriptAndIo} from "@sagittal/general"
import {popularityMetricLfcScriptGroupSettings} from "../../globals"

const applySharedPopularityMetricLfcScriptSetup = (
    {logDir, defaultLogTargets}: {logDir?: Filename, defaultLogTargets?: LogTarget[]} = {},
): void => {
    program
        .option(`-${ScriptFlag.NO_MOOT}, --no-moot`, "eliminate probably moot parameters or parameter value scopes")
        .option(`-${ScriptFlag.Z}, --z <z>`, "z", parseFloat)
        .option(`-${ScriptFlag.ONLY_TOP}, --only-top <onlyTop>`, "only top", parseInt)
        .option(`-${ScriptFlag.MAX_UNIT}, --max-unit <maxUnit>`, "max unit", parseFloat)
        .option(`-${ScriptFlag.SYNC}, --sync`, "sync")

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
