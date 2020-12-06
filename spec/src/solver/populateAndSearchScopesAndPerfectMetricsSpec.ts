import {Count, Ms, Name} from "@sagittal/general"
import {Metric} from "../../../src/bestMetric"
import {bestMetrics, solverStatus} from "../../../src/globals"
import {Chunk, populateAndSearchScopesAndPerfectMetrics} from "../../../src/solver"
import * as populate from "../../../src/solver/populate/scopes"
import * as search from "../../../src/solver/search/scopes"
import {adjustAsyncTimeoutForSpec} from "../../helpers/adjustAsyncTimeoutForSpec"
import {onlyRunInCi} from "../../helpers/onlyRunInCi"

describe("populateAndSearchScopesAndPerfectMetrics", (): void => {
    adjustAsyncTimeoutForSpec(10000 as Ms)

    it("populates scopes", async (): Promise<void> => {
        spyOn(populate, "populateScopes").and.callFake(async (): Promise<void> => {
        })
        spyOn(search, "searchScopes").and.callFake(async (): Promise<void> => {
        })

        await populateAndSearchScopesAndPerfectMetrics()

        expect(populate.populateScopes).toHaveBeenCalled()
    })

    it("searches scopes", async (): Promise<void> => {
        spyOn(populate, "populateScopes").and.callFake(async (): Promise<void> => {
        })
        spyOn(search, "searchScopes").and.callFake(async (): Promise<void> => {
        })

        await populateAndSearchScopesAndPerfectMetrics()

        expect(search.searchScopes).toHaveBeenCalled()
    })

    it("completes searching scopes before resolving", async (): Promise<void> => {
        onlyRunInCi()

        solverStatus.chunkCount = 1 as Count<Chunk>
        await populateAndSearchScopesAndPerfectMetrics()

        expect(bestMetrics.get("{},{sum}" as Name<Metric>)).toBeCloseToObject({
            sumOfSquares: 0.014206,
            name: "{},{sum}",
            submetrics: [{sum: true}],
        } as Metric)
    })
})
