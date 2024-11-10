import {
    Count,
    Exponent,
    Filename,
    LogTarget,
    Max,
    Parameter,
    program,
    Rank,
    ScalaPopularityStat,
    setupScriptAndIo,
    Step,
} from "@sagittal/general"
import { popularityMetricLfcScriptGroupSettings } from "../../globals"
import { LfcUnpopularityEstimate } from "../../sumOfSquares"

const applySharedPopularityMetricLfcScriptSetup = ({
    logDir,
    defaultLogTargets,
}: { logDir?: Filename; defaultLogTargets?: LogTarget[] } = {}): void => {
    program
        .option("--no-moot", "eliminate probably moot parameters or parameter value scopes")
        .option("--z <z>", "z", parseFloat)
        .option("--only-top <onlyTop>", "only top", parseInt)
        .option("--max-unit <maxUnit>", "max unit", parseFloat)
        .option("--sync", "sync")

    setupScriptAndIo(logDir, defaultLogTargets)

    const {
        z,
        onlyTop,
        maxUnit,
        moot,
        sync,
    }: {
        z: Exponent<Rank<ScalaPopularityStat | LfcUnpopularityEstimate>>
        onlyTop: Count<ScalaPopularityStat>
        maxUnit: Max<Step<{ of: Parameter }>>
        moot: boolean
        sync: boolean
    } = program.opts()

    if (z) popularityMetricLfcScriptGroupSettings.z = z
    if (onlyTop) popularityMetricLfcScriptGroupSettings.onlyTop = onlyTop
    if (maxUnit) popularityMetricLfcScriptGroupSettings.maxUnit = maxUnit
    if (!moot) popularityMetricLfcScriptGroupSettings.noMoot = true
    if (sync) popularityMetricLfcScriptGroupSettings.sync = true
}

export { applySharedPopularityMetricLfcScriptSetup }
