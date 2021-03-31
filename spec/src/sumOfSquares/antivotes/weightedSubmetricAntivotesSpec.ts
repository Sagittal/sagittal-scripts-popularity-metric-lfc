import {BASE_2, Grade, log, Parameter, Power, Two3FreeClass} from "@sagittal/general"
import {LfcUnpopularityEstimate, PopularityParameterId} from "../../../../src/sumOfSquares"
import * as two3FreeClassSubmetricAntivotes
    from "../../../../src/sumOfSquares/antivotes/two3FreeClassSubmetricAntivotes"
import {computeWeightedSubmetricAntivotes} from "../../../../src/sumOfSquares/antivotes/weightedSubmetricAntivotes"

describe("computeWeightedSubmetricAntivotes", (): void => {
    const two3FreeClass = {pev: [-1, 1, 1, -1]} as Two3FreeClass

    it("returns 0 when the weight is 0", (): void => {
        const submetric = {
            [PopularityParameterId.WEIGHT_AS_COEFFICIENT]: 0 as Parameter,
            [PopularityParameterId.SUM]: true,
        }

        const actual = computeWeightedSubmetricAntivotes(two3FreeClass, submetric)

        const expected = 0 as Grade<LfcUnpopularityEstimate>
        expect(actual).toBe(expected)
    })

    it("does not waste resources calling compute23FreeClassSubmetricAntivotes when the weight is 0", (): void => {
        spyOn(two3FreeClassSubmetricAntivotes, "compute23FreeClassSubmetricAntivotes")

        const submetric = {
            [PopularityParameterId.WEIGHT_AS_COEFFICIENT]: 0 as Parameter,
            [PopularityParameterId.SUM]: true,
        }

        computeWeightedSubmetricAntivotes(two3FreeClass, submetric)

        expect(two3FreeClassSubmetricAntivotes.compute23FreeClassSubmetricAntivotes).not.toHaveBeenCalled()
    })

    it("returns the full submetric antivotes when the weight is 1", (): void => {
        const submetric = {
            [PopularityParameterId.WEIGHT_AS_COEFFICIENT]: 1 as Parameter,
            [PopularityParameterId.SUM]: true,
        }

        const actual = computeWeightedSubmetricAntivotes(two3FreeClass, submetric)

        const expected = two3FreeClassSubmetricAntivotes.compute23FreeClassSubmetricAntivotes(
            two3FreeClass,
            {[PopularityParameterId.SUM]: true},
        )
        expect(actual).toBe(expected)
    })

    it("returns the weighted value of the submetric antivotes", (): void => {
        const submetric = {
            [PopularityParameterId.WEIGHT_AS_COEFFICIENT]: 0.5 as Parameter,
            [PopularityParameterId.SUM]: true,
        }

        const actual = computeWeightedSubmetricAntivotes(two3FreeClass, submetric)

        const expected =
            0.5 *
            two3FreeClassSubmetricAntivotes.compute23FreeClassSubmetricAntivotes(
                two3FreeClass,
                {[PopularityParameterId.SUM]: true},
            ) as Grade<LfcUnpopularityEstimate>
        expect(actual).toBe(expected)
    })

    it("defaults the weight to 1", (): void => {

        const actual = computeWeightedSubmetricAntivotes(two3FreeClass, {[PopularityParameterId.SUM]: true})

        const expected = 17 as Grade<LfcUnpopularityEstimate>
        expect(actual).toBe(expected)
    })

    it("can use the weight as a logarithm base", (): void => {
        const submetric = {
            [PopularityParameterId.WEIGHT_AS_LOGARITHM_BASE]: 2 as Parameter,
            [PopularityParameterId.SUM]: true,
        }

        const actual = computeWeightedSubmetricAntivotes(two3FreeClass, submetric)

        const expected = log(
            two3FreeClassSubmetricAntivotes.compute23FreeClassSubmetricAntivotes(
                two3FreeClass,
                {[PopularityParameterId.SUM]: true},
            ) as number as Power,
            BASE_2,
        ) as number as Grade<LfcUnpopularityEstimate>
        expect(actual).toBe(expected)
    })

    it("can use the weight as a power exponent", (): void => {
        const submetric = {
            [PopularityParameterId.WEIGHT_AS_POWER_EXPONENT]: 2 as Parameter,
            [PopularityParameterId.SUM]: true,
        }

        const actual = computeWeightedSubmetricAntivotes(two3FreeClass, submetric)

        const expected = two3FreeClassSubmetricAntivotes.compute23FreeClassSubmetricAntivotes(
            two3FreeClass,
            {[PopularityParameterId.SUM]: true},
        ) ** 2 as Grade<LfcUnpopularityEstimate>
        expect(actual).toBe(expected)
    })

    it("can use the weight as a power base", (): void => {
        const submetric = {
            [PopularityParameterId.WEIGHT_AS_POWER_BASE]: 2 as Parameter,
            [PopularityParameterId.SUM]: true,
        }

        const actual = computeWeightedSubmetricAntivotes(two3FreeClass, submetric)

        const expected = 2 ** two3FreeClassSubmetricAntivotes.compute23FreeClassSubmetricAntivotes(
            two3FreeClass,
            {[PopularityParameterId.SUM]: true},
        ) as Grade<LfcUnpopularityEstimate>
        expect(actual).toBe(expected)
    })
})
