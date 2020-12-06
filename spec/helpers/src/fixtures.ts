import {Combination, Name} from "@sagittal/general"
import {Metric} from "../../../src/bestMetric"
import {Submetric} from "../../../src/sumOfSquares"

const metricFixture: Metric = {
    name: "" as Name<Metric>,
    submetrics: [] as unknown[] as Combination<Submetric>,
}

export {
    metricFixture,
}
