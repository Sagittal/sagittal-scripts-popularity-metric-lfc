import { Combination, Name, stringify } from "@sagittal/general"
import { Metric, SumOfSquares } from "../../../../src/bestMetric"
import { bestMetrics } from "../../../../src/globals"
import { computeSortedBestMetrics } from "../../../../src/solver"
import { PopularityParameterId, Submetric } from "../../../../src/sumOfSquares"

describe("computeSortedBestMetrics", (): void => {
    it("sorts the best metrics by sum of squares", (): void => {
        bestMetrics.set("{sum}" as Name<Metric>, {
            sumOfSquares: 0.013 as SumOfSquares,
            name: "" as Name<Metric>,
            submetrics: [
                {
                    [PopularityParameterId.SUM]: true,
                },
            ] as Combination<Submetric>,
        })
        bestMetrics.set("{count}" as Name<Metric>, {
            sumOfSquares: 0.012 as SumOfSquares,
            name: "" as Name<Metric>,
            submetrics: [
                {
                    [PopularityParameterId.COUNT]: true,
                },
            ] as Combination<Submetric>,
        })
        bestMetrics.set("{max}" as Name<Metric>, {
            sumOfSquares: 0.014 as SumOfSquares,
            name: "" as Name<Metric>,
            submetrics: [
                {
                    [PopularityParameterId.MAX]: true,
                },
            ] as Combination<Submetric>,
        })

        const actual = computeSortedBestMetrics()

        expect(stringify(actual)).toEqual(
            stringify({
                "{max}": {
                    sumOfSquares: 0.014 as SumOfSquares,
                    name: "",
                    submetrics: [
                        {
                            [PopularityParameterId.MAX]: true,
                        },
                    ] as Combination<Submetric>,
                },
                "{sum}": {
                    sumOfSquares: 0.013 as SumOfSquares,
                    name: "",
                    submetrics: [
                        {
                            [PopularityParameterId.SUM]: true,
                        },
                    ] as Combination<Submetric>,
                },
                "{count}": {
                    sumOfSquares: 0.012 as SumOfSquares,
                    name: "",
                    submetrics: [
                        {
                            [PopularityParameterId.COUNT]: true,
                        },
                    ] as Combination<Submetric>,
                },
            }),
        )
    })
})
