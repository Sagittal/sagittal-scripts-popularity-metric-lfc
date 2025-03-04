import { Exponent, Parameter, Prime, QuotientPartType } from "@sagittal/general"
import { secondaryParameterOverride } from "../../../../src/sumOfSquares/antivotes/secondaryParameter"

describe("secondaryParameterOverride", (): void => {
    const denominatorSpecificParameter = 5 as Parameter
    const parameter = 3 as Parameter

    it("returns the parameter when the prime count is positive (it is in the numerator)", (): void => {
        const primeCount = 2 as Exponent<Prime>

        const actual = secondaryParameterOverride(parameter, denominatorSpecificParameter, primeCount)

        expect(actual).toBe(parameter)
    })

    it("returns the denominator-specific parameter when the prime count is negative (it is in the denominator)", (): void => {
        const primeCount = -2 as Exponent<Prime>

        const actual = secondaryParameterOverride(parameter, denominatorSpecificParameter, primeCount)

        expect(actual).toBe(denominatorSpecificParameter)
    })

    it("returns the parameter when the fractional part is stated to be the numerator, even if the prime count is negative (which should never happen, but just in case, I think the fractional part is a stronger message)", (): void => {
        const primeCount = -2 as Exponent<Prime>
        const quotientPart = QuotientPartType.NUMERATOR

        const actual = secondaryParameterOverride(
            parameter,
            denominatorSpecificParameter,
            primeCount,
            quotientPart,
        )

        expect(actual).toBe(parameter)
    })

    it("returns the denominator-specific parameter when the fractional part is stated to be the denominator, even if the prime count is positive (which could happen, when a separate vector for the denominator is calculated from an integer which was in a denominator)", (): void => {
        const primeCount = 2 as Exponent<Prime>
        const quotientPart = QuotientPartType.DENOMINATOR

        const actual = secondaryParameterOverride(
            parameter,
            denominatorSpecificParameter,
            primeCount,
            quotientPart,
        )

        expect(actual).toBe(denominatorSpecificParameter)
    })

    it("returns the parameter when the denominator-specific parameter is not provided, even if the prime count is negative and the requested fractional part is denominator", (): void => {
        const primeCount = -2 as Exponent<Prime>
        const quotientPart = QuotientPartType.DENOMINATOR

        const actual = secondaryParameterOverride(parameter, undefined, primeCount, quotientPart)

        expect(actual).toBe(parameter)
    })
})
