import { Ed, Parameter, Window } from "@sagittal/general"
import { Sample, Scope } from "../../../../src/bestMetric"
import { computeDynamicParameters, computeSamples } from "../../../../src/bestMetric/scopeToSamples"
import { PopularityParameterId } from "../../../../src/sumOfSquares"

describe("computeSamples", (): void => {
    it("given some submetric scopes, will return all combinations of submetrics to check", (): void => {
        const scope = [
            {},
            {
                [PopularityParameterId.A_AS_COEFFICIENT]: {
                    center: 2 as Parameter,
                    window: 2 as Window<{ of: Parameter }>,
                    ed: 3 as Ed<{ of: Parameter }>,
                },
                [PopularityParameterId.K_AS_COEFFICIENT]: {
                    center: 0 as Parameter,
                    window: 4 as Window<{ of: Parameter }>,
                    ed: 2 as Ed<{ of: Parameter }>,
                },
            },
            {
                [PopularityParameterId.COUNT]: true,
                [PopularityParameterId.A_AS_COEFFICIENT]: {
                    center: 1.5 as Parameter,
                    window: 2 as Window<{ of: Parameter }>,
                    ed: 2 as Ed<{ of: Parameter }>,
                },
                [PopularityParameterId.W]: 3.3 as Parameter,
            },
        ] as Scope
        const dynamicParameters = computeDynamicParameters(scope)

        const actual = computeSamples({ scope, dynamicParameters })

        const expected = [
            {
                submetrics: [
                    {
                        [PopularityParameterId.A_AS_COEFFICIENT]: 1,
                        [PopularityParameterId.K_AS_COEFFICIENT]: -2,
                    },
                    {
                        [PopularityParameterId.COUNT]: true,
                        [PopularityParameterId.A_AS_COEFFICIENT]: 0.5,
                        [PopularityParameterId.W]: 3.3,
                    },
                ],
                samplePoint: [0, 0, 0],
            },
            {
                submetrics: [
                    {
                        [PopularityParameterId.A_AS_COEFFICIENT]: 1,
                        [PopularityParameterId.K_AS_COEFFICIENT]: -2,
                    },
                    {
                        [PopularityParameterId.COUNT]: true,
                        [PopularityParameterId.A_AS_COEFFICIENT]: 2.5,
                        [PopularityParameterId.W]: 3.3,
                    },
                ],
                samplePoint: [0, 0, 1],
            },
            {
                submetrics: [
                    {
                        [PopularityParameterId.A_AS_COEFFICIENT]: 1,
                        [PopularityParameterId.K_AS_COEFFICIENT]: 2,
                    },
                    {
                        [PopularityParameterId.COUNT]: true,
                        [PopularityParameterId.A_AS_COEFFICIENT]: 0.5,
                        [PopularityParameterId.W]: 3.3,
                    },
                ],
                samplePoint: [0, 1, 0],
            },
            {
                submetrics: [
                    {
                        [PopularityParameterId.A_AS_COEFFICIENT]: 1,
                        [PopularityParameterId.K_AS_COEFFICIENT]: 2,
                    },
                    {
                        [PopularityParameterId.COUNT]: true,
                        [PopularityParameterId.A_AS_COEFFICIENT]: 2.5,
                        [PopularityParameterId.W]: 3.3,
                    },
                ],
                samplePoint: [0, 1, 1],
            },
            {
                submetrics: [
                    {
                        [PopularityParameterId.A_AS_COEFFICIENT]: 2,
                        [PopularityParameterId.K_AS_COEFFICIENT]: -2,
                    },
                    {
                        [PopularityParameterId.COUNT]: true,
                        [PopularityParameterId.A_AS_COEFFICIENT]: 0.5,
                        [PopularityParameterId.W]: 3.3,
                    },
                ],
                samplePoint: [1, 0, 0],
            },
            {
                submetrics: [
                    {
                        [PopularityParameterId.A_AS_COEFFICIENT]: 2,
                        [PopularityParameterId.K_AS_COEFFICIENT]: -2,
                    },
                    {
                        [PopularityParameterId.COUNT]: true,
                        [PopularityParameterId.A_AS_COEFFICIENT]: 2.5,
                        [PopularityParameterId.W]: 3.3,
                    },
                ],
                samplePoint: [1, 0, 1],
            },
            {
                submetrics: [
                    {
                        [PopularityParameterId.A_AS_COEFFICIENT]: 2,
                        [PopularityParameterId.K_AS_COEFFICIENT]: 2,
                    },
                    {
                        [PopularityParameterId.COUNT]: true,
                        [PopularityParameterId.A_AS_COEFFICIENT]: 0.5,
                        [PopularityParameterId.W]: 3.3,
                    },
                ],
                samplePoint: [1, 1, 0],
            },
            {
                submetrics: [
                    {
                        [PopularityParameterId.A_AS_COEFFICIENT]: 2,
                        [PopularityParameterId.K_AS_COEFFICIENT]: 2,
                    },
                    {
                        [PopularityParameterId.COUNT]: true,
                        [PopularityParameterId.A_AS_COEFFICIENT]: 2.5,
                        [PopularityParameterId.W]: 3.3,
                    },
                ],
                samplePoint: [1, 1, 1],
            },
            {
                submetrics: [
                    {
                        [PopularityParameterId.A_AS_COEFFICIENT]: 3,
                        [PopularityParameterId.K_AS_COEFFICIENT]: -2,
                    },
                    {
                        [PopularityParameterId.COUNT]: true,
                        [PopularityParameterId.A_AS_COEFFICIENT]: 0.5,
                        [PopularityParameterId.W]: 3.3,
                    },
                ],
                samplePoint: [2, 0, 0],
            },
            {
                submetrics: [
                    {
                        [PopularityParameterId.A_AS_COEFFICIENT]: 3,
                        [PopularityParameterId.K_AS_COEFFICIENT]: -2,
                    },
                    {
                        [PopularityParameterId.COUNT]: true,
                        [PopularityParameterId.A_AS_COEFFICIENT]: 2.5,
                        [PopularityParameterId.W]: 3.3,
                    },
                ],
                samplePoint: [2, 0, 1],
            },
            {
                submetrics: [
                    {
                        [PopularityParameterId.A_AS_COEFFICIENT]: 3,
                        [PopularityParameterId.K_AS_COEFFICIENT]: 2,
                    },
                    {
                        [PopularityParameterId.COUNT]: true,
                        [PopularityParameterId.A_AS_COEFFICIENT]: 0.5,
                        [PopularityParameterId.W]: 3.3,
                    },
                ],
                samplePoint: [2, 1, 0],
            },
            {
                submetrics: [
                    {
                        [PopularityParameterId.A_AS_COEFFICIENT]: 3,
                        [PopularityParameterId.K_AS_COEFFICIENT]: 2,
                    },
                    {
                        [PopularityParameterId.COUNT]: true,
                        [PopularityParameterId.A_AS_COEFFICIENT]: 2.5,
                        [PopularityParameterId.W]: 3.3,
                    },
                ],
                samplePoint: [2, 1, 1],
            },
        ] as Sample[]
        expect(actual).toBeArrayWithDeepEqualContents(expected)
    })

    it("supports providing more than one submetric with the same submetric type", (): void => {
        const scope = [
            {},
            {
                [PopularityParameterId.COUNT]: true,
                [PopularityParameterId.A_AS_COEFFICIENT]: {
                    center: 1.5 as Parameter,
                    window: 2 as Window<{ of: Parameter }>,
                    ed: 2 as Ed<{ of: Parameter }>,
                },
                [PopularityParameterId.K_AS_COEFFICIENT]: 0.5 as Parameter,
            },
            {
                [PopularityParameterId.COUNT]: true,
                [PopularityParameterId.A_AS_COEFFICIENT]: {
                    center: 1 as Parameter,
                    window: 2 as Window<{ of: Parameter }>,
                    ed: 2 as Ed<{ of: Parameter }>,
                },
                [PopularityParameterId.K_AS_COEFFICIENT]: 0 as Parameter,
            },
        ] as Scope
        const dynamicParameters = computeDynamicParameters(scope)

        const actual = computeSamples({ scope, dynamicParameters })

        const expected = [
            {
                submetrics: [
                    {
                        [PopularityParameterId.COUNT]: true,
                        [PopularityParameterId.A_AS_COEFFICIENT]: 0.5,
                        [PopularityParameterId.K_AS_COEFFICIENT]: 0.5,
                    },
                    {
                        [PopularityParameterId.COUNT]: true,
                        [PopularityParameterId.A_AS_COEFFICIENT]: 0,
                        [PopularityParameterId.K_AS_COEFFICIENT]: 0,
                    },
                ],
                samplePoint: [0, 0],
            },
            {
                submetrics: [
                    {
                        [PopularityParameterId.COUNT]: true,
                        [PopularityParameterId.A_AS_COEFFICIENT]: 0.5,
                        [PopularityParameterId.K_AS_COEFFICIENT]: 0.5,
                    },
                    {
                        [PopularityParameterId.COUNT]: true,
                        [PopularityParameterId.A_AS_COEFFICIENT]: 2,
                        [PopularityParameterId.K_AS_COEFFICIENT]: 0,
                    },
                ],
                samplePoint: [0, 1],
            },
            {
                submetrics: [
                    {
                        [PopularityParameterId.COUNT]: true,
                        [PopularityParameterId.A_AS_COEFFICIENT]: 2.5,
                        [PopularityParameterId.K_AS_COEFFICIENT]: 0.5,
                    },
                    {
                        [PopularityParameterId.COUNT]: true,
                        [PopularityParameterId.A_AS_COEFFICIENT]: 0,
                        [PopularityParameterId.K_AS_COEFFICIENT]: 0,
                    },
                ],
                samplePoint: [1, 0],
            },
            {
                submetrics: [
                    {
                        [PopularityParameterId.COUNT]: true,
                        [PopularityParameterId.A_AS_COEFFICIENT]: 2.5,
                        [PopularityParameterId.K_AS_COEFFICIENT]: 0.5,
                    },
                    {
                        [PopularityParameterId.COUNT]: true,
                        [PopularityParameterId.A_AS_COEFFICIENT]: 2,
                        [PopularityParameterId.K_AS_COEFFICIENT]: 0,
                    },
                ],
                samplePoint: [1, 1],
            },
        ] as Sample[]
        expect(actual).toBeArrayWithDeepEqualContents(expected)
    })
})
