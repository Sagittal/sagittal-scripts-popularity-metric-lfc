import {Index} from "@sagittal/general"
import {Submetric} from "../../sumOfSquares"
import {Scope, SubmetricScope} from "../types"
import {computeSubmetricDynamicParameters} from "./submetricDynamicParameters"
import {DynamicParameter} from "./types"

const computeDynamicParameters = (scope: Scope): DynamicParameter[] => {
    let dynamicParameters: DynamicParameter[] = []

    scope.forEach((submetricScope: SubmetricScope, submetricIndex: number): void => {
        const submetricDynamicParameters: DynamicParameter[] =
            computeSubmetricDynamicParameters(submetricScope, submetricIndex as Index<Submetric>)

        dynamicParameters = dynamicParameters.concat(submetricDynamicParameters)
    })

    return dynamicParameters
}

export {
    computeDynamicParameters,
}
