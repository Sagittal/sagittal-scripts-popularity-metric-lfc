import { Combination, Name } from "@sagittal/general"
import { Metric } from "../../../src/bestMetric"
import { perfectMetrics } from "../../../src/perfecter"
import * as metric from "../../../src/perfecter/metric"
import { MetricTag } from "../../../src/perfecter/types"
import { Submetric } from "../../../src/sumOfSquares"

describe("perfectMetrics", (): void => {
    it("perfects each metric", async (): Promise<void> => {
        const metrics = [
            {
                name: "someMetricName1" as Name<Metric>,
                submetrics: [{}] as Combination<Submetric>,
            },
            {
                name: "someMetricName2" as Name<Metric>,
                submetrics: [{}] as Combination<Submetric>,
            },
            {
                name: "someMetricName3" as Name<Metric>,
                submetrics: [{}] as Combination<Submetric>,
            },
        ]
        spyOn(metric, "perfectMetric")

        await perfectMetrics(metrics)

        expect(metric.perfectMetric).toHaveBeenCalledWith(metrics[0], { metricTag: "1/3" as MetricTag })
        expect(metric.perfectMetric).toHaveBeenCalledWith(metrics[1], { metricTag: "2/3" as MetricTag })
        expect(metric.perfectMetric).toHaveBeenCalledWith(metrics[2], { metricTag: "3/3" as MetricTag })
    })
})
