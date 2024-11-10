import { Io, slowTestOnlyRunInFullSuite, runScriptAndGetConsoleOutput } from "@sagittal/general"

describe("solve-best-metrics-for-chunk-count", (): void => {
    const expected = [
        `computing scopes: phase 1/1`,
        `submetric combinations (with repetitions) computed: 6; formula is ((1+6-1)!)/((1!)((6-1)!)) where 6 is the total of possible existing chunks and 1 is the count we are choosing at a time`,
        `parameter combinations (with repetitions) computed: 1; formula is ((0+25-1)!)/((0!)((25-1)!)) where 25 is the total of possible existing chunks and 0 is the count we are choosing at a time`,
        `we find 1 distributions of 0 parameter chunks across 2 bins (assignments to each of a combination of submetrics, plus an extra bin for parameters which will get applied to every submetric), which is how many more scopes should be contributed per each of the 1 parameter chunk combinations in this phase, and that times the 6 submetric chunk combinations in this phase, so expect 1 * 1 * 6 = 6 new scopes from this phase, so we should end with a total of 6`,
        `populating scopes for submetric chunk combination 1/6 with parameter chunk combination 1/1 (0%) | populated 0 | searched 0 | in the queue 0`,
        `populating scopes for submetric chunk combination 2/6 with parameter chunk combination 1/1 (0%) | populated 1 | searched 0 | in the queue 1`,
        `populating scopes for submetric chunk combination 3/6 with parameter chunk combination 1/1 (0%) | populated 2 | searched 0 | in the queue 2`,
        `populating scopes for submetric chunk combination 4/6 with parameter chunk combination 1/1 (0%) | populated 3 | searched 0 | in the queue 3`,
        `populating scopes for submetric chunk combination 5/6 with parameter chunk combination 1/1 (0%) | populated 4 | searched 0 | in the queue 4`,
        `populating scopes for submetric chunk combination 6/6 with parameter chunk combination 1/1 (0%) | populated 5 | searched 0 | in the queue 5`,
        `finished phase 1/1 of scope population | populated 6 | searched 0 | in the queue 6`,
        ``,
        ``,
        `FINISHED POPULATING | populated 6 | searched 0 | in the queue 6`,
        `about to search initial scope for metric {},{aAsLogarithmBase,sum}`,
        `which has 1 samples; average sample count is 0`,
        `searched out of populated: 1/6 (16.7%) | populated 6 | searched 1 | in the queue 5`,
        `about to search initial scope for metric {},{max,withoutRepetition}`,
        `which has 1 samples; average sample count is 0`,
        `searched out of populated: 2/6 (33.3%) | populated 6 | searched 2 | in the queue 4`,
        `about to search initial scope for metric {},{count,withoutRepetition}`,
        `which has 1 samples; average sample count is 1`,
        `searched out of populated: 3/6 (50.0%) | populated 6 | searched 3 | in the queue 3`,
        `about to search initial scope for metric {},{count}`,
        `which has 1 samples; average sample count is 1`,
        `searched out of populated: 4/6 (66.7%) | populated 6 | searched 4 | in the queue 2`,
        `about to search initial scope for metric {},{sum,withoutRepetition}`,
        `which has 1 samples; average sample count is 1`,
        `searched out of populated: 5/6 (83.3%) | populated 6 | searched 5 | in the queue 1`,
        `about to search initial scope for metric {},{sum}`,
        `which has 1 samples; average sample count is 1`,
        `searched out of populated: 6/6 (100.0%) | populated 6 | searched 6 | in the queue 0`,
        ``,
        ``,
        `FINAL STATUS | populated 6 | searched 6 | in the queue 0`,
        ``,
        ``,
        `AND THE BEST METRICS WERE {`,
        `    "{},{sum}": {`,
        `        sumOfSquares: 0.014206086754420309,`,
        `        submetrics: [`,
        `            {`,
        `                [ PopularityParameterId.SUM ]: true`,
        `            }`,
        `        ],`,
        `        name: "{},{sum}"`,
        `    }`,
        `}`,
        `MAX UNIT 0.1`,
        `AVERAGE SAMPLES/SCOPE 1`,
        `PARAMETER SCOPES @ ORIGINAL SETTINGS`,
        `Z -1`,
        `ONLY TOP 80`,
    ] as Io[]

    it("finds the best metric for the given chunk count", (): void => {
        slowTestOnlyRunInFullSuite()
        const script = "npm run solve-best-metrics-for-chunk-count 1" as Io

        const actual = runScriptAndGetConsoleOutput(script)

        expect(actual).toEqual(expected)
    })

    it("works in sync mode too", (): void => {
        slowTestOnlyRunInFullSuite()
        const script = "npm run solve-best-metrics-for-chunk-count 1 -- --sync" as Io

        const actual = runScriptAndGetConsoleOutput(script)

        expect(actual).toEqual(expected)
    })
})
