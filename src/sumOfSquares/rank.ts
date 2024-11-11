import { computeKeyPath, rank, Ranked, RankStrategy, sort } from "@sagittal/general"
import { LfcUnpopularityEstimate } from "./types"

const addRankToUnpopularities = (
    unpopularities: LfcUnpopularityEstimate[],
): Ranked<LfcUnpopularityEstimate>[] => {
    const rankedUnpopularities: Ranked<LfcUnpopularityEstimate>[] = rank(unpopularities, {
        by: computeKeyPath("antivotes"),
        strategy: RankStrategy.FRACTIONAL,
    })

    return sort(rankedUnpopularities, { by: computeKeyPath("index") })
}

export { addRankToUnpopularities }
