import { isUndefined } from "@sagittal/general"
import { SUM_OF_SQUARES_TO_BEAT } from "./constants"
import { ShouldUpdateBestMetricOptions } from "./types"

const shouldUpdateBestMetric = ({
    bestMetric,
    sumOfSquares,
    onlyBetterThanSopfgtt,
}: ShouldUpdateBestMetricOptions): boolean => {
    return (
        !isUndefined(sumOfSquares) &&
        (!onlyBetterThanSopfgtt || sumOfSquares <= SUM_OF_SQUARES_TO_BEAT) &&
        (isUndefined(bestMetric) ||
            isUndefined(bestMetric.sumOfSquares) ||
            sumOfSquares < bestMetric.sumOfSquares)
    )
}

export { shouldUpdateBestMetric }
