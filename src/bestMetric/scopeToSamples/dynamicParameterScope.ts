import {DynamicParameterScope, isUndefined, Parameter, Window} from "@sagittal/general"
import {computeEqualDivision} from "./equalDivision"
import {DynamicParameterScopeOptions} from "./types"

const countDefinedOption = (option: unknown): number => isUndefined(option) ? 0 : 1

const computeDynamicParameterScope = (options: DynamicParameterScopeOptions): DynamicParameterScope => {
    const {max, min, center: centerOption, window: windowOption} = options
    const definedOptionCount =
        countDefinedOption(max) +
        countDefinedOption(min) +
        countDefinedOption(centerOption) +
        countDefinedOption(windowOption)

    if (definedOptionCount !== 2) {
        const providedOptions = Object.entries(options).map(([k, v]: [string, unknown]): string => `${k} ${v}`).join(", ")
        throw new Error(`Exactly 2 options should be provided from min, max, center, and window in order to compute a dynamic parameter scope; ${definedOptionCount} provided (${providedOptions})`)
    }

    let center
    let window
    let ed

    if (!isUndefined(max) && !isUndefined(min)) {
        window = max - min as Window<{of: Parameter}>
        center = min + window / 2 as Parameter
    }

    if (!isUndefined(max) && !isUndefined(windowOption)) {
        window = windowOption
        center = max - windowOption / 2 as Parameter
    }

    if (!isUndefined(max) && !isUndefined(centerOption)) {
        window = (max - centerOption) * 2 as Window<{of: Parameter}>
        center = centerOption
    }

    if (!isUndefined(min) && !isUndefined(windowOption)) {
        window = windowOption
        center = min + windowOption / 2 as Parameter
    }

    if (!isUndefined(min) && !isUndefined(centerOption)) {
        window = (centerOption - min) * 2 as Window<{of: Parameter}>
        center = centerOption
    }

    if (!isUndefined(windowOption) && !isUndefined(centerOption)) {
        window = windowOption
        center = centerOption
    }

    ed = computeEqualDivision(window as Window<{of: Parameter}>)

    return {center, window, ed}
}

export {
    computeDynamicParameterScope,
}
