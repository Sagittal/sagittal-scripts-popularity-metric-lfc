import { Io, slowTestOnlyRunInFullSuite, runScriptAndGetConsoleOutput } from "@sagittal/general"

describe("sos (sum of squares)", (): void => {
    it("gives you the sum-of-squares given the submetric combination in the file, and also logs the full list of unpopularities", (): void => {
        slowTestOnlyRunInFullSuite()

        const script = "npm run sos" as Io

        const actual = runScriptAndGetConsoleOutput(script)

        expect(actual[actual.length - 4]).toBe(
            `{"index":79,"antivotes":3.69769814,"two3FreeClass":{"vector":[0,0,0,4]},"rank":60}`,
        )
        expect(actual[actual.length - 2]).toBe(`0.004260809896143936`)
        expect(actual[actual.length - 1]).toBe(
            `[{"sum":true,"kAsCoefficient":0.038,"aAsLogarithmBase":1.994,"y":0.455,"w":-2.08,"useNuminator":true},{"count":true,"weightAsCoefficient":0.577,"useNuminator":true}]`,
        )
    })
})
