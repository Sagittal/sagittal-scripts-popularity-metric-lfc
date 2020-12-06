import {deepClone, Index, Parameter, Window} from "@sagittal/general"
import {computeDynamicParameterScope, DynamicParameter, SamplePoint, Scope} from "../bestMetric"

const computeNextScope = (samplePoint: SamplePoint, dynamicParameters: DynamicParameter[], scope: Scope): Scope => {
    const nextScope = deepClone(scope)

    samplePoint.forEach((dynamicParameterValueIndex: Index<Parameter>, index: number): void => {
        const {submetricIndex, parameter, values, unit} = dynamicParameters[index]

        const center = values[dynamicParameterValueIndex]
        const window: Window<{of: Parameter}> = unit * (2 / 3) as Window<{of: Parameter}>

        nextScope[submetricIndex][parameter] = computeDynamicParameterScope({center, window})
    })

    return nextScope
}

export {
    computeNextScope,
}
