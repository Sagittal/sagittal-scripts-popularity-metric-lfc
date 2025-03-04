import { Grade } from "@sagittal/general"
import { LfcUnpopularityEstimate } from "../types"

// Or "numenator" and "demonator" ?
const maybeNuminatorSwap = (options: {
    useNuminator: boolean
    numeratorAntivotes: Grade<LfcUnpopularityEstimate>
    denominatorAntivotes: Grade<LfcUnpopularityEstimate>
}): {
    numeratorAntivotes: Grade<LfcUnpopularityEstimate>
    denominatorAntivotes: Grade<LfcUnpopularityEstimate>
} => {
    const { useNuminator, numeratorAntivotes, denominatorAntivotes } = options

    const numeratorAntivotesAfterMaybeNuminatorSwap = useNuminator
        ? numeratorAntivotes > denominatorAntivotes
            ? numeratorAntivotes
            : denominatorAntivotes
        : numeratorAntivotes
    const denominatorAntivotesAfterMaybeNuminatorSwap = useNuminator
        ? numeratorAntivotes > denominatorAntivotes
            ? denominatorAntivotes
            : numeratorAntivotes
        : denominatorAntivotes

    return {
        numeratorAntivotes: numeratorAntivotesAfterMaybeNuminatorSwap,
        denominatorAntivotes: denominatorAntivotesAfterMaybeNuminatorSwap,
    }
}

export { maybeNuminatorSwap }
