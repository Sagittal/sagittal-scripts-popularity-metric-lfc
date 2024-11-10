import { Count } from "@sagittal/general"
import { popularityMetricLfcScriptGroupSettings } from "../../../../src/globals"
import { Chunk } from "../../../../src/solver"
import { computeInitialChunkCountForSubmetrics } from "../../../../src/solver/populate/initialChunkCountForSubmetrics"
import { Submetric } from "../../../../src/sumOfSquares"

describe("computeInitialChunkCountForSubmetrics", (): void => {
    describe("when all chunks are being used, including probably moot ones", (): void => {
        it("when ≤ the total count of possible submetric chunks (6), returns the passed-in chunk count", (): void => {
            const chunkCount = 3 as Count<Chunk>

            const actual = computeInitialChunkCountForSubmetrics(chunkCount)

            expect(actual).toBe(chunkCount as Count<Chunk<Submetric>>)
        })

        it("when > the total count of possible submetric chunks (6), caps out at that total possible count", (): void => {
            const chunkCount = 7 as Count<Chunk>

            const actual = computeInitialChunkCountForSubmetrics(chunkCount)

            const expected = 6 as Count<Chunk<Submetric>>
            expect(actual).toBe(expected)
        })
    })

    describe("when no moot chunks are being used", (): void => {
        beforeEach((): void => {
            popularityMetricLfcScriptGroupSettings.noMoot = true
        })

        it("when ≤ the total count of possible submetric chunks (4), returns the passed-in chunk count", (): void => {
            const chunkCount = 3 as Count<Chunk>

            const actual = computeInitialChunkCountForSubmetrics(chunkCount)

            expect(actual).toBe(chunkCount as Count<Chunk<Submetric>>)
        })

        it("when > the total count of possible submetric chunks (4), caps out at that total possible count", (): void => {
            const chunkCount = 7 as Count<Chunk>

            const actual = computeInitialChunkCountForSubmetrics(chunkCount)

            const expected = 4 as Count<Chunk<Submetric>>
            expect(actual).toBe(expected)
        })
    })
})
