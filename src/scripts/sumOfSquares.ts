import {Combination, Filename, LogTarget, saveLog, setupScriptAndIo, stringify} from "@sagittal/general"
import {computeSumOfSquaresForSubmetrics, Submetric} from "../sumOfSquares"
import {applySharedPopularityMetricLfcScriptSetup, load} from "./shared"

setupScriptAndIo("sumOfSquares" as Filename, [LogTarget.DETAILS])
applySharedPopularityMetricLfcScriptSetup()

const submetrics = load("submetrics" as Filename) as Combination<Submetric>

const sumOfSquares = computeSumOfSquaresForSubmetrics(submetrics)

saveLog(`${sumOfSquares}\n${stringify(submetrics)}`, LogTarget.FINAL)
