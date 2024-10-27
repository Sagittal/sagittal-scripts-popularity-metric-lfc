import {
    Combination,
    Filename,
    format23FreeClass,
    Io,
    LogTarget,
    saveLog,
    stringify,
    Two3FreeClass,
} from "@sagittal/general"
import { computeAntivotes, Submetric } from "../sumOfSquares"
import { applySharedPopularityMetricLfcScriptSetup, load } from "./shared"

applySharedPopularityMetricLfcScriptSetup({
    logDir: "antivotes" as Filename,
    defaultLogTargets: [LogTarget.DETAILS],
})

const submetrics = load("submetrics" as Filename) as Combination<Submetric>

const two3FreeClass: Two3FreeClass = { vector: [0, 0, 0, -1, 1] } as Two3FreeClass

const antivotes = computeAntivotes(two3FreeClass, submetrics)

saveLog(
    `${format23FreeClass(two3FreeClass)}\n${stringify(submetrics)}\n${antivotes}` as Io,
    LogTarget.FINAL,
)
