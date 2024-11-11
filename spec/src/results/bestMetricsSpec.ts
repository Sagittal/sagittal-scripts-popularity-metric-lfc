import { Metric } from "../../../src/bestMetric"
import { bestMetrics } from "../../../src/results"
import { computeSumOfSquaresForSubmetrics } from "../../../src/sumOfSquares"

describe("best metrics", (): void => {
    it("verifies all of the best metrics", (): void => {
        const bestMetricsEntries: [string, Metric][] = Object.entries(bestMetrics) as [string, Metric][]

        bestMetricsEntries.forEach(([bestMetricName, bestMetric]: [string, Metric]): void => {
            const sumOfSquares = computeSumOfSquaresForSubmetrics(bestMetric.submetrics)
            expect(bestMetric.sumOfSquares).toBe(
                sumOfSquares,
                `${bestMetricName} failed, has SoS ${bestMetric.sumOfSquares} but just computed ${sumOfSquares}`,
            )
        })
    })
})
