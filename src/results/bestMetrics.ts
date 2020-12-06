import {Combination} from "@sagittal/general"
import {SumOfSquares} from "../bestMetric"
import {PopularityParameterId, Submetric} from "../sumOfSquares"

// ALL VALUES Z -1, ONLY TOP 80

// Metric to beat: SoPF>3, or 2,3-free SoPFR
const sopfgtt = {
    sumOfSquares: 0.014206086754420309 as SumOfSquares,
    name: "{sum}",
    submetrics: [
        {
            [PopularityParameterId.SUM]: true,
        },
    ] as Combination<Submetric>,
}

//

// Dave's log-α's (best SoS is 0.00613) some still with prime limit (s)
// Mon Jun 29, 2020 7:07 pm
// See: http://forum.sagittal.org/viewtopic.php?p=1944#p1944
const withPrimeLimit = {
    sumOfSquares: 0.006127818362694095,
    name: "{aAsLogarithmBase,kAsCoefficient,sum,useNuminator,w,y},{max,useNuminator,weightAsCoefficient,withoutRepetition}",
    submetrics: [
        {
            [PopularityParameterId.K_AS_COEFFICIENT]: 0.638243216,
            [PopularityParameterId.A_AS_LOGARITHM_BASE]: 3.956349187,
            [PopularityParameterId.W]: -0.619217685,
            [PopularityParameterId.Y]: 0.883788532,
            [PopularityParameterId.USE_NUMINATOR]: true,
            [PopularityParameterId.SUM]: true,
        },
        {
            [PopularityParameterId.MAX]: true,
            [PopularityParameterId.WITHOUT_REPETITION]: true,
            [PopularityParameterId.WEIGHT_AS_COEFFICIENT]: 0.020609268,
            [PopularityParameterId.USE_NUMINATOR]: true,
        },
    ],
}

//

// Douglas's 8-chunk lowest-ever 0.00426 SoS
// Mon Jun 29, 2020 7:36 pm
// See: http://forum.sagittal.org/viewtopic.php?p=1946#p1946
const lowestEver = {
    sumOfSquares: 0.004260809896143936,
    name: "{aAsLogarithmBase,kAsCoefficient,sum,useNuminator,w,y},{count,useNuminator,weightAsCoefficient}",
    submetrics: [
        {
            [PopularityParameterId.K_AS_COEFFICIENT]: 0.038,
            [PopularityParameterId.A_AS_LOGARITHM_BASE]: 1.994,
            [PopularityParameterId.Y]: 0.455,
            [PopularityParameterId.W]: -2.08,
            [PopularityParameterId.USE_NUMINATOR]: true,
            [PopularityParameterId.SUM]: true,
        },
        {
            [PopularityParameterId.COUNT]: true,
            [PopularityParameterId.WEIGHT_AS_COEFFICIENT]: 0.577,
            [PopularityParameterId.USE_NUMINATOR]: true,
        },
    ],
}

//

// Douglas's response to Dave's ask for k vs. c wrt my lowest ever
// Mon Jun 29, 2020 10:44 pm
// See: http://forum.sagittal.org/viewtopic.php?p=1951#p1951
// 0.00473
const likeLowestEverButWithZeroK = {
    sumOfSquares: 0.004732527573659666,
    name: "{aAsLogarithmBase,kAsCoefficient,sum,useNuminator,w,y},{count,useNuminator,weightAsCoefficient}",
    submetrics: [
        {
            [PopularityParameterId.K_AS_COEFFICIENT]: 0,
            [PopularityParameterId.A_AS_LOGARITHM_BASE]: 1.753,
            [PopularityParameterId.Y]: 0.473,
            [PopularityParameterId.W]: -2.62,
            [PopularityParameterId.USE_NUMINATOR]: true,
            [PopularityParameterId.SUM]: true,
        },
        {
            [PopularityParameterId.COUNT]: true,
            [PopularityParameterId.WEIGHT_AS_COEFFICIENT]: 0.723,
            [PopularityParameterId.USE_NUMINATOR]: true,
        },
    ],
}
// 0.00622
const likeLowestEverButWithZeroC = {
    sumOfSquares: 0.006222012568306695,
    name: "{aAsLogarithmBase,kAsCoefficient,sum,useNuminator,w,y}",
    submetrics: [
        {
            [PopularityParameterId.K_AS_COEFFICIENT]: 0.635,
            [PopularityParameterId.A_AS_LOGARITHM_BASE]: 1.43,
            [PopularityParameterId.Y]: 0.85,
            [PopularityParameterId.W]: -2.77,
            [PopularityParameterId.USE_NUMINATOR]: true,
            [PopularityParameterId.SUM]: true,
        },
    ],
}

//

// Dave's "2-chunk" 0.00651 mcopfr claimed 0.00651 but I find 0.00721
// Wed Jul 01, 2020 12:46 am
// See: http://forum.sagittal.org/viewtopic.php?p=1962#p1962
const notTwoChunkByCurrentDefinitionMcopfr = {
    sumOfSquares: 0.007205996505476978,
    name: "{aAsLogarithmBase,kAsCoefficient,sum,useNuminator,w,y},{count,jAsCoefficient,modifiedCount,useNuminator}",
    submetrics: [
        {
            [PopularityParameterId.K_AS_COEFFICIENT]: 0,
            [PopularityParameterId.A_AS_LOGARITHM_BASE]: 2,
            [PopularityParameterId.W]: -1.453,
            [PopularityParameterId.Y]: 0.863,
            [PopularityParameterId.USE_NUMINATOR]: true,
            [PopularityParameterId.SUM]: true,
        },
        {
            [PopularityParameterId.J_AS_COEFFICIENT]: 0,
            [PopularityParameterId.COUNT]: true,
            [PopularityParameterId.MODIFIED_COUNT]: true,
            [PopularityParameterId.USE_NUMINATOR]: true,
        },
    ],
}

//

// Dave's "3-chunk" mcopfr claimed 0.00614 but I find 0.00740
// Wed Jul 01, 2020 2:46 am
// See: http://forum.sagittal.org/viewtopic.php?p=1964#p1964
const notThreeChunkByCurrentDefinitionMcopfr = {
    sumOfSquares: 0.0073967019283224696,
    name: "{aAsLogarithmBase,kAsCoefficient,sum,useNuminator,w,y},{count,jAsCoefficient,modifiedCount,useNuminator,y}",
    submetrics: [
        {
            [PopularityParameterId.K_AS_COEFFICIENT]: 0,
            [PopularityParameterId.A_AS_LOGARITHM_BASE]: 2,
            [PopularityParameterId.W]: -1.431,
            [PopularityParameterId.Y]: 0.851,
            [PopularityParameterId.USE_NUMINATOR]: true,
            [PopularityParameterId.SUM]: true,
        },
        {
            [PopularityParameterId.J_AS_COEFFICIENT]: 0,
            [PopularityParameterId.COUNT]: true,
            [PopularityParameterId.MODIFIED_COUNT]: true,
            [PopularityParameterId.Y]: 1.332,
            [PopularityParameterId.USE_NUMINATOR]: true,
        },
    ],
}

//

// Dave's "4-chunk" mcopfr claimed 0.00660 but I find 0.00838
// Wed Jul 01, 2020 7:07 pm
// See: http://forum.sagittal.org/viewtopic.php?p=1965#p1965
/*
requires this hack to be added to `submetricAntivotes.js` to handle the "h" parameter
            if (index !== 2 && modifiedCount === true) {
                termUnpopularity = termUnpopularity * 0.947
            }
 */
const notFourChunkByCurrentDefinitionMcopfr = {
    sumOfSquares: 0.008200108887640998,
    name: "{aAsLogarithmBase,kAsCoefficient,sum,useNuminator,w,y},{count,jAsCoefficient,modifiedCount,useNuminator,y}",
    submetrics: [
        {
            [PopularityParameterId.K_AS_COEFFICIENT]: 0,
            [PopularityParameterId.A_AS_LOGARITHM_BASE]: 2,
            [PopularityParameterId.W]: -1.44,
            [PopularityParameterId.Y]: 0.86,
            [PopularityParameterId.USE_NUMINATOR]: true,
            [PopularityParameterId.SUM]: true,
        },
        {
            [PopularityParameterId.J_AS_COEFFICIENT]: 0,
            [PopularityParameterId.COUNT]: true,
            [PopularityParameterId.MODIFIED_COUNT]: true,
            [PopularityParameterId.Y]: 1.331,
            [PopularityParameterId.USE_NUMINATOR]: true,
        },
    ],
}

//

// Douglas's 1-submetrics
// Thu Jul 02, 2020 9:21 pm
// See: http://forum.sagittal.org/viewtopic.php?p=1978#p1978
// 1-submetric 7-chunk 0.00565 -- original xwyks
const oneSubmetricSevenChunk = {
    sumOfSquares: 0.005646141896541448,
    name: "{aAsLogarithmBase,kAsCoefficient,sum,useNuminator,w,x,y}",
    submetrics: [
        {
            [PopularityParameterId.K_AS_COEFFICIENT]: 0.6328571428571429,
            [PopularityParameterId.A_AS_LOGARITHM_BASE]: 1.5728571428571425,
            [PopularityParameterId.W]: -3.0571428571428574,
            [PopularityParameterId.Y]: 0.8571428571428571,
            [PopularityParameterId.X]: 1.607142857142857,
            [PopularityParameterId.USE_NUMINATOR]: true,
            [PopularityParameterId.SUM]: true,
        },
    ],
}
// 1-submetric 6-chunk 0.00947 (claimed to be near 0.00652, so these must have been approximations)
const oneSubmetricSixChunk = {
    sumOfSquares: 0.00946539412309218,
    name: "{aAsLogarithmBase,kAsCoefficient,sum,useNuminator,w,y}",
    submetrics: [
        {
            [PopularityParameterId.K_AS_COEFFICIENT]: 0.6,
            [PopularityParameterId.A_AS_LOGARITHM_BASE]: 3,
            [PopularityParameterId.W]: -1,
            [PopularityParameterId.Y]: 0.8766666666666667,
            [PopularityParameterId.USE_NUMINATOR]: true,
            [PopularityParameterId.SUM]: true,
        },
    ],
}

//

// Dave's similar to my lowest ever w/ exact a = 2 base 0.00445
// Fri Jul 03, 2020 12:24 am
// See: http://forum.sagittal.org/viewtopic.php?p=1983#p1983
const almostLowestEverButWithExactA = {
    sumOfSquares: 0.004455901926266847,
    name: "{aAsLogarithmBase,kAsCoefficient,sum,useNuminator,w,y},{count,useNuminator,weightAsCoefficient}",
    submetrics: [
        {
            [PopularityParameterId.K_AS_COEFFICIENT]: 0.038,
            [PopularityParameterId.Y]: 0.455,
            [PopularityParameterId.A_AS_LOGARITHM_BASE]: 2,
            [PopularityParameterId.W]: -2.09,
            [PopularityParameterId.USE_NUMINATOR]: true,
            [PopularityParameterId.SUM]: true,
        },
        {
            [PopularityParameterId.COUNT]: true,
            [PopularityParameterId.WEIGHT_AS_COEFFICIENT]: 0.579,
            [PopularityParameterId.USE_NUMINATOR]: true,
        },
    ],
}

//

// Dave's less fragile min 0.00559
// Fri Jul 03, 2020 5:28 am
// See: http://forum.sagittal.org/viewtopic.php?p=1984#p1984
const lessFragileMin = {
    sumOfSquares: 0.005591116232258028,
    name: "{aAsLogarithmBase,kAsCoefficient,sum,useNuminator,w,y},{count,useNuminator,weightAsCoefficient}",
    submetrics: [
        {
            [PopularityParameterId.K_AS_COEFFICIENT]: 0.213895488,
            [PopularityParameterId.Y]: 0.642099097,
            [PopularityParameterId.A_AS_LOGARITHM_BASE]: 2,
            [PopularityParameterId.W]: -2.048657352,
            [PopularityParameterId.USE_NUMINATOR]: true,
            [PopularityParameterId.SUM]: true,
        },
        {
            [PopularityParameterId.COUNT]: true,
            [PopularityParameterId.WEIGHT_AS_COEFFICIENT]: 0.551650547,
            [PopularityParameterId.USE_NUMINATOR]: true,
        },
    ],
}

//

// Dave's sanity check claimed 0.008325554
// Sat Jul 04, 2020 3:17 am
// See: http://forum.sagittal.org/viewtopic.php?p=1995#p1995
const sanityCheck = {
    sumOfSquares: 0.00832555386875032,
    name: "{aAsLogarithmBase,kAsCoefficient,sum,useNuminator,w,y}",
    submetrics: [
        {
            [PopularityParameterId.K_AS_COEFFICIENT]: 0.632,
            [PopularityParameterId.Y]: 0.858,
            [PopularityParameterId.A_AS_LOGARITHM_BASE]: 2,
            [PopularityParameterId.W]: -1.415,
            [PopularityParameterId.USE_NUMINATOR]: true,
            [PopularityParameterId.SUM]: true,
        },
    ],
}

//

// Douglas's first run of the recursive automatic solver turned this up quick, 0.00406 (now known as cwyks)
// Sun Jul 05, 2020 10:29 pm
// See: http://forum.sagittal.org/viewtopic.php?p=2004#p2004
const cwyks = {
    sumOfSquares: 0.004059521951422367,
    name: "{aAsLogarithmBase,kAsCoefficient,sum,useNuminator,w,y},{count,useNuminator,weightAsCoefficient}",
    submetrics: [
        {
            [PopularityParameterId.K_AS_COEFFICIENT]: 0.1796875,
            [PopularityParameterId.A_AS_LOGARITHM_BASE]: 2.0234375,
            [PopularityParameterId.Y]: 0.4921875,
            [PopularityParameterId.W]: -1.986328125,
            [PopularityParameterId.USE_NUMINATOR]: true,
            [PopularityParameterId.SUM]: true,
        },
        {
            [PopularityParameterId.COUNT]: true,
            [PopularityParameterId.WEIGHT_AS_COEFFICIENT]: 0.5615234375,
            [PopularityParameterId.USE_NUMINATOR]: true,
        },
    ],
}

//

// Douglas's first attempt at lowest 2- and 3-chunk
// Thu Jul 09, 2020 9:21 am
// See: http://forum.sagittal.org/viewtopic.php?p=2036#p2036
const k = {
    sumOfSquares: 0.0094912434848982,
    name: "{kAsCoefficient,sum}",
    submetrics: [
        {
            [PopularityParameterId.K_AS_COEFFICIENT]: 0.7901234567901236,
            [PopularityParameterId.SUM]: true,
        },
    ],
}
const firstAttemptAtLowestThreeChunk = {
    sumOfSquares: 0.018902286543139548,
    name: "{count,kAsCoefficient},{sum}",
    submetrics: [
        {
            [PopularityParameterId.SUM]: true,
        },
        {
            [PopularityParameterId.COUNT]: true,
            [PopularityParameterId.K_AS_COEFFICIENT]: -1.11111111111111111,
        },
    ],
}

//

// Dave's maybe-min 0.007085843
// Thu Jul 09, 2020 7:37 pm
// See: http://forum.sagittal.org/viewtopic.php?p=2038#p2038
const maybeMin = {
    sumOfSquares: 0.007085843283776648,
    name: "{aAsLogarithmBase,b,sum,w,y}",
    submetrics: [
        {
            [PopularityParameterId.SUM]: true,
            [PopularityParameterId.A_AS_LOGARITHM_BASE]: 2,
            [PopularityParameterId.Y]: 0.839,
            [PopularityParameterId.W]: -1.465,
            [PopularityParameterId.B]: -1.867,
        },
    ],
}

//

// Dave's b and u: SoS 0.00659
// Fri Jul 10, 2020 2:57 am
// See: http://forum.sagittal.org/viewtopic.php?p=2039#p2039
const bAndU = {
    sumOfSquares: 0.006594234470005811,
    name: "{aAsLogarithmBase,b,sum,u,w,x,y}",
    submetrics: [
        {
            [PopularityParameterId.A_AS_LOGARITHM_BASE]: 2,
            [PopularityParameterId.Y]: 0.861,
            [PopularityParameterId.W]: -2.656,
            [PopularityParameterId.B]: -2.829,
            [PopularityParameterId.X]: 4.471,
            [PopularityParameterId.U]: 3.850,
            [PopularityParameterId.SUM]: true,
        },
    ],
}

// Dave's improved maybe min 0.006282743
// Sat Jul 11, 2020 1:30 am
// See: http://forum.sagittal.org/viewtopic.php?p=2044#p2044
const improvedMaybeMin = {
    sumOfSquares: 0.0062827430776347054,
    name: "{aAsLogarithmBase,b,sum,w,y}",
    submetrics: [
        {
            [PopularityParameterId.SUM]: true,
            [PopularityParameterId.A_AS_LOGARITHM_BASE]: 2,
            [PopularityParameterId.Y]: 0.8568,
            [PopularityParameterId.W]: -1.4457,
            [PopularityParameterId.B]: -1.8630,
        },
    ],
}

//

// Dave's improved 4-param 6-chunk 0.006700181
// Sat Jul 11, 2020 9:04 pm
// See: http://forum.sagittal.org/viewtopic.php?p=2052#p2052
const improvedFourParamSixChunk = {
    sumOfSquares: 0.006700180663569215,
    name: "{aAsLogarithmBase,jAsCoefficient,kAsCoefficient,sum},{kAsCoefficient,sum,y}",
    submetrics: [
        {
            [PopularityParameterId.SUM]: true,
            [PopularityParameterId.A_AS_LOGARITHM_BASE]: 2,
            [PopularityParameterId.J_AS_COEFFICIENT]: 0.6385,
            [PopularityParameterId.K_AS_COEFFICIENT]: -1.6518,
        },
        {
            [PopularityParameterId.SUM]: true,
            [PopularityParameterId.Y]: 0.8023,
            [PopularityParameterId.K_AS_COEFFICIENT]: 1.5289,
        },
    ],
}

//

// Dave's improved 4-param 5-chunk 0.006926345
// Sat Jul 11, 2020 9:04 pm
// See: http://forum.sagittal.org/viewtopic.php?p=2052#p2052
const improvedFourParamFiveChunk = {
    sumOfSquares: 0.006926345329260278,
    name: "{aAsLogarithmBase,jAsCoefficient,kAsCoefficient,sum},{sum,y}",
    submetrics: [
        {
            [PopularityParameterId.SUM]: true,
            [PopularityParameterId.A_AS_LOGARITHM_BASE]: 2,
            [PopularityParameterId.J_AS_COEFFICIENT]: 0.6845,
            [PopularityParameterId.K_AS_COEFFICIENT]: -0.3909,
        },
        {
            [PopularityParameterId.SUM]: true,
            [PopularityParameterId.Y]: 0.8006,
        },
    ],
}

//

// Douglas's second attempt at lowest 2-chunk
// Sun Jul 12, 2020 11:27 pm
// See: http://forum.sagittal.org/viewtopic.php?p=2064#p2064
const j = {
    sumOfSquares: 0.00910097075832883,
    name: "{jAsPowerExponent,sum}",
    submetrics: [
        {
            [PopularityParameterId.J_AS_POWER_EXPONENT]: 1.0954773869346734,
            [PopularityParameterId.SUM]: true,
        },
    ],
}
const secondAttemptAtLowestThreeChunk = {
    sumOfSquares: 0.008543707253092303,
    name: "{jAsCoefficient,sum,y}",
    submetrics: [
        {
            [PopularityParameterId.Y]: 0.96661101836394,
            [PopularityParameterId.J_AS_COEFFICIENT]: 1.407035175879397,
            [PopularityParameterId.SUM]: true,
        },
    ],
}

// Dave's hyg 0.006372713
// Mon Jul 13, 2020 2:04 am
// See: http://forum.sagittal.org/viewtopic.php?p=2065#p2065
const hyg = {
    sumOfSquares: 0.006372712986254571,
    name: "{aAsLogarithmBase,jAsCoefficient,kAsCoefficient,sum},{sum,y}",
    submetrics: [
        {
            [PopularityParameterId.SUM]: true,
            [PopularityParameterId.A_AS_LOGARITHM_BASE]: 2,
            [PopularityParameterId.J_AS_COEFFICIENT]: 0.692773045,
            [PopularityParameterId.K_AS_COEFFICIENT]: -0.245303445,
        },
        {
            [PopularityParameterId.SUM]: true,
            [PopularityParameterId.Y]: 0.827031908,
        },
    ],
}

//

// Dave's double-improved maybe min, now called wyb 0.006057649, and also wyk
// Mon Jul 13, 2020 6:38 pm
// See: http://forum.sagittal.org/viewtopic.php?p=2071#p2071
const wyb = {
    sumOfSquares: 0.006057649171028775,
    name: "{aAsLogarithmBase,b,sum,w,y}",
    submetrics: [
        {
            [PopularityParameterId.SUM]: true,
            [PopularityParameterId.A_AS_LOGARITHM_BASE]: 2,
            [PopularityParameterId.Y]: 0.865618551,
            [PopularityParameterId.W]: -1.472615144,
            [PopularityParameterId.B]: -2.02634047,
        },
    ],
}
const wyk = {
    sumOfSquares: 0.007460443456132457,
    name: "{aAsLogarithmBase,kAsCoefficient,sum,w,y}",
    submetrics: [
        {
            [PopularityParameterId.SUM]: true,
            [PopularityParameterId.A_AS_LOGARITHM_BASE]: 2,
            [PopularityParameterId.Y]: 0.861239895,
            [PopularityParameterId.W]: -1.448663086,
            [PopularityParameterId.K_AS_COEFFICIENT]: 0.683944325,
        },
    ],
}

//

// Dave's cwyk
// Mon Jul 13, 2020 11:57 pm
// See: http://forum.sagittal.org/viewtopic.php?p=2072#p2072
const cwyk = {
    sumOfSquares: 0.007300195297088744,
    name: "{aAsLogarithmBase,kAsCoefficient,sum,y},{count,weightAsCoefficient}",
    submetrics: [
        {
            [PopularityParameterId.SUM]: true,
            [PopularityParameterId.A_AS_LOGARITHM_BASE]: 2,
            [PopularityParameterId.K_AS_COEFFICIENT]: 0.74710179,
            [PopularityParameterId.W]: -1.09913086,
            [PopularityParameterId.Y]: 0.903870452,
        },
        {
            [PopularityParameterId.COUNT]: true,
            [PopularityParameterId.WEIGHT_AS_COEFFICIENT]: -0.352088418,
        },
    ],
}

//

// Dave's wyks 0.006406639
// Tue Jul 14, 2020 2:47 am
// See: http://forum.sagittal.org/viewtopic.php?p=2073#p2073
const wyks = {
    sumOfSquares: 0.006406638879234451,
    name: "{aAsLogarithmBase,kAsCoefficient,sum,useNuminator,w,y}",
    submetrics: [
        {
            [PopularityParameterId.SUM]: true,
            [PopularityParameterId.A_AS_LOGARITHM_BASE]: 2,
            [PopularityParameterId.Y]: 0.86461511,
            [PopularityParameterId.W]: -1.481526766,
            [PopularityParameterId.USE_NUMINATOR]: true,
            [PopularityParameterId.K_AS_COEFFICIENT]: 0.581696884,
        },
    ],
}

//

// Dave's xwyks 0.00553892
// Tue Jul 14, 2020 4:36 am
// See: http://forum.sagittal.org/viewtopic.php?p=2074#p2074
const xwyks = {
    sumOfSquares: 0.0055389201901046405,
    name: "{aAsLogarithmBase,kAsCoefficient,sum,useNuminator,w,x,y}",
    submetrics: [
        {
            [PopularityParameterId.SUM]: true,
            [PopularityParameterId.A_AS_LOGARITHM_BASE]: 2,
            [PopularityParameterId.K_AS_COEFFICIENT]: 0.612396631,
            [PopularityParameterId.W]: -1.94655685,
            [PopularityParameterId.Y]: 0.843016878,
            [PopularityParameterId.X]: 1.51639317,
            [PopularityParameterId.USE_NUMINATOR]: true,
        },
    ],
}

//

// Dave's wb: SoS 0.007345361
// Tue Jul 28, 2020 12:36 am
// See: http://forum.sagittal.org/viewtopic.php?p=2098#p2098
const wb = {
    sumOfSquares: 0.007345361244736918,
    name: "{aAsLogarithmBase,b,sum,w}",
    submetrics: [
        {
            [PopularityParameterId.SUM]: true,
            [PopularityParameterId.A_AS_LOGARITHM_BASE]: 2,
            [PopularityParameterId.W]: -1.645808649,
            [PopularityParameterId.B]: -2.043765116,
        },
    ],
}

//

// Douglas's Solver - 3-chunk 0.007099822
// Fri Jul 31, 2020 9:01 am
// See: http://forum.sagittal.org/viewtopic.php?p=2113#p2113
const laj = {
    sumOfSquares: 0.007099822284635193,
    name: "{aAsLogarithmBase,jAsCoefficient,sum},{max,withoutRepetition}",
    submetrics: [
        {
            [PopularityParameterId.WITHOUT_REPETITION]: true,
            [PopularityParameterId.MAX]: true,
        },
        {
            [PopularityParameterId.SUM]: true,
            [PopularityParameterId.A_AS_LOGARITHM_BASE]: 1.3333333333333333,
            [PopularityParameterId.J_AS_COEFFICIENT]: 1.3,
        },
    ],
}

//

// Dave's kl 0.006970591
// Fri Jul 31, 2020 4:56 pm
// See: http://forum.sagittal.org/viewtopic.php?p=2117#p2117
const kl = {
    sumOfSquares: 0.006970590852577876,
    name: "{aAsLogarithmBase,kAsCoefficient,sum},{max,weightAsCoefficient,withoutRepetition}",
    submetrics: [
        {
            [PopularityParameterId.WEIGHT_AS_COEFFICIENT]: 0.319583198,
            [PopularityParameterId.WITHOUT_REPETITION]: true,
            [PopularityParameterId.MAX]: true,
        },
        {
            [PopularityParameterId.SUM]: true,
            [PopularityParameterId.A_AS_LOGARITHM_BASE]: 2,
            [PopularityParameterId.K_AS_COEFFICIENT]: 0.722866218,
        },
    ],
}

//

// Dave's c
// Sat Aug 08, 2020 2:04 am
// See: http://forum.sagittal.org/viewtopic.php?p=2163#p2163
const c = {
    sumOfSquares: 0.009004460361166835,
    name: "{b,sum,w}",
    submetrics: [
        {
            [PopularityParameterId.SUM]: true,
            [PopularityParameterId.W]: 0,
            [PopularityParameterId.B]: -1.75,
        },
    ],
}

//

// Douglas's solver 3-chunk and 4-chunk bests
// Sun Aug 09, 2020 4:54 pm
// See: http://forum.sagittal.org/viewtopic.php?p=2170#p2170
const ak = {
    sumOfSquares: 0.007593746935708874,
    name: "{aAsLogarithmBase,aAsPowerExponent,kAsCoefficient,sum}",
    submetrics: [
        {
            [PopularityParameterId.SUM]: true,
            [PopularityParameterId.A_AS_LOGARITHM_BASE]: 2,
            [PopularityParameterId.K_AS_COEFFICIENT]: 0.7981481481481482,
            [PopularityParameterId.A_AS_POWER_EXPONENT]: 2.0717827997489016,
        },
    ],
}
const kj = {
    sumOfSquares: 0.007969499349681162,
    name: "{jAsPowerExponent,kAsPowerExponent,sum}",
    submetrics: [
        {
            [PopularityParameterId.SUM]: true,
            [PopularityParameterId.K_AS_POWER_EXPONENT]: 1.4690207156308848,
            [PopularityParameterId.J_AS_POWER_EXPONENT]: 1.3673258003766477,
        },
    ],
}
const lak = {
    sumOfSquares: 0.0062107447110803975,
    name: "{aAsLogarithmBase,aAsPowerExponent,sum,u,x}",
    submetrics: [
        {
            [PopularityParameterId.WITHOUT_REPETITION]: true,
            [PopularityParameterId.MAX]: true,
            [PopularityParameterId.A_AS_POWER_EXPONENT]: 0.6165725047080979,
        },
        {
            [PopularityParameterId.SUM]: true,
            [PopularityParameterId.A_AS_LOGARITHM_BASE]: 2,
            [PopularityParameterId.K_AS_POWER_EXPONENT]: 0.5242937853107347,
            [PopularityParameterId.A_AS_POWER_EXPONENT]: 0.6165725047080979,
        },
    ],
    spreadDynamicParameters: [
        PopularityParameterId.A_AS_POWER_EXPONENT,
    ],
}
const wab = {
    sumOfSquares: 0.0068022046202959605,
    name: "{aAsLogarithmBase,aAsPowerExponent,b,sum,w}",
    submetrics: [
        {
            [PopularityParameterId.SUM]: true,
            [PopularityParameterId.A_AS_LOGARITHM_BASE]: 2,
            [PopularityParameterId.A_AS_POWER_EXPONENT]: 2.0791902071563086,
            [PopularityParameterId.W]: -0.22090395480226008,
            [PopularityParameterId.B]: -1.9497175141242935,
        },
    ],
}
const aux = {
    sumOfSquares: 0.006815231749228219,
    name: "{aAsLogarithmBase,aAsPowerExponent,kAsPowerExponent,sum},{aAsPowerExponent,max,withoutRepetition}",
    submetrics: [
        {
            [PopularityParameterId.SUM]: true,
            [PopularityParameterId.A_AS_LOGARITHM_BASE]: 2,
            [PopularityParameterId.U]: -1.5128478761247126,
            [PopularityParameterId.A_AS_POWER_EXPONENT]: 1.9713224523958988,
            [PopularityParameterId.X]: -0.4582444025946853,
        },
    ],
}

//

// Douglas's solver 5-chunk best (immediately improved by Dave: http://forum.sagittal.org/viewtopic.php?p=2193#p2193)
// Tue Aug 11, 2020 9:25 am
// See: http://forum.sagittal.org/viewtopic.php?p=2191#p2191
const wbl1 = {
    sumOfSquares: 0.003886596371931313,
    name: "{aAsLogarithmBase,b,sum,w},{aAsLogarithmBase,max,withoutRepetition}",
    submetrics: [
        {
            [PopularityParameterId.WITHOUT_REPETITION]: true,
            [PopularityParameterId.MAX]: true,
            [PopularityParameterId.A_AS_LOGARITHM_BASE]: 2,
        },
        {
            [PopularityParameterId.SUM]: true,
            [PopularityParameterId.A_AS_LOGARITHM_BASE]: 2,
            [PopularityParameterId.W]: -0.944786887715889,
            [PopularityParameterId.B]: -1.561335378,
        },
    ],
}

//

// We found it?
// Tue Aug 11, 2020 6:19 pm
// See: http://forum.sagittal.org/viewtopic.php?p=2194#p2194
const wybl1 = {
    sumOfSquares: 0.0032401250853104067,
    name: "{aAsLogarithmBase,b,sum,w,y},{aAsLogarithmBase,max,withoutRepetition}",
    submetrics: [
        {
            [PopularityParameterId.WITHOUT_REPETITION]: true,
            [PopularityParameterId.MAX]: true,
            [PopularityParameterId.A_AS_LOGARITHM_BASE]: 2,
        },
        {
            [PopularityParameterId.SUM]: true,
            [PopularityParameterId.A_AS_LOGARITHM_BASE]: 2,
            [PopularityParameterId.W]: -0.6722238433719913,
            [PopularityParameterId.B]: -1.4491200586108,
            [PopularityParameterId.Y]: 0.8749588677477244,
        },
    ],
}

//

// Dave's "true" wbl and wybl
// Tue Aug 11, 2020 11:13 pm
// See: http://forum.sagittal.org/viewtopic.php?p=2199#p2199
const wbl = {
    sumOfSquares: 0.0030322385583128613,
    name: "{aAsLogarithmBase,b,sum,w},{aAsLogarithmBase,max,weightAsCoefficient,withoutRepetition}",
    submetrics: [
        {
            [PopularityParameterId.WITHOUT_REPETITION]: true,
            [PopularityParameterId.MAX]: true,
            [PopularityParameterId.A_AS_LOGARITHM_BASE]: 2,
            [PopularityParameterId.WEIGHT_AS_COEFFICIENT]: 1.39696749,
        },
        {
            [PopularityParameterId.SUM]: true,
            [PopularityParameterId.A_AS_LOGARITHM_BASE]: 2,
            [PopularityParameterId.W]: -0.676337296,
            [PopularityParameterId.B]: -1.344110019,
        },
    ],
}
const wybl = {
    sumOfSquares: 0.0026762735990075136,
    name: "{aAsLogarithmBase,b,sum,w,y},{aAsLogarithmBase,max,weightAsCoefficient,withoutRepetition}",
    submetrics: [
        {
            [PopularityParameterId.WITHOUT_REPETITION]: true,
            [PopularityParameterId.MAX]: true,
            [PopularityParameterId.A_AS_LOGARITHM_BASE]: 2,
            [PopularityParameterId.WEIGHT_AS_COEFFICIENT]: 1.273854435,
        },
        {
            [PopularityParameterId.SUM]: true,
            [PopularityParameterId.A_AS_LOGARITHM_BASE]: 2,
            [PopularityParameterId.W]: -0.52569965,
            [PopularityParameterId.B]: -1.406498345,
            [PopularityParameterId.Y]: 0.91746922,
        },
    ],
}

//

// Doug's waybll
// Wed Aug 12, 2020 9:32 am
// See: http://forum.sagittal.org/viewtopic.php?p=2203#p2203
const waybl = {
    sumOfSquares: 0.0024616646376350447,
    name: "{aAsLogarithmBase,aAsPowerExponent,b,sum,w,y},{aAsLogarithmBase,max,weightAsCoefficient,withoutRepetition}",
    submetrics: [
        {
            [PopularityParameterId.WEIGHT_AS_COEFFICIENT]: 0.24501362468135826,
            [PopularityParameterId.WITHOUT_REPETITION]: true,
            [PopularityParameterId.MAX]: true,
            [PopularityParameterId.A_AS_LOGARITHM_BASE]: 2,
        }, {
            [PopularityParameterId.SUM]: true,
            [PopularityParameterId.A_AS_LOGARITHM_BASE]: 2,
            [PopularityParameterId.W]: -0.9657624622268728,
            [PopularityParameterId.B]: -1.1139840255018962,
            [PopularityParameterId.Y]: 0.9045075315289748,
            [PopularityParameterId.A_AS_POWER_EXPONENT]: 0.27731911914963275,
        },
    ],
}

//

// Douglas's wb-cores
// Wed Aug 12, 2020 5:52 pm
// See: http://forum.sagittal.org/viewtopic.php?p=2205#p2205
const wabl1 = {
    sumOfSquares: 0.0029769976555856672,
    name: "{aAsLogarithmBase,aAsPowerExponent,b,sum,w},{aAsLogarithmBase,max,withoutRepetition}",
    submetrics: [
        {
            [PopularityParameterId.WITHOUT_REPETITION]: true,
            [PopularityParameterId.MAX]: true,
            [PopularityParameterId.A_AS_LOGARITHM_BASE]: 2,
        },
        {
            [PopularityParameterId.SUM]: true,
            [PopularityParameterId.A_AS_LOGARITHM_BASE]: 2,
            [PopularityParameterId.A_AS_POWER_EXPONENT]: 0.7954545454545454,
            [PopularityParameterId.W]: -0.8362010291300304,
            [PopularityParameterId.B]: -1.311335378,
        },
    ],
}
const wabl = {
    sumOfSquares: 0.002961440725194366,
    name: "{aAsLogarithmBase,aAsPowerExponent,b,sum,w},{aAsLogarithmBase,max,weightAsCoefficient,withoutRepetition}",
    submetrics: [
        {
            [PopularityParameterId.WITHOUT_REPETITION]: true,
            [PopularityParameterId.MAX]: true,
            [PopularityParameterId.A_AS_LOGARITHM_BASE]: 2,
            [PopularityParameterId.WEIGHT_AS_COEFFICIENT]: 0.8665946155658091,
        },
        {
            [PopularityParameterId.SUM]: true,
            [PopularityParameterId.A_AS_LOGARITHM_BASE]: 2,
            [PopularityParameterId.A_AS_POWER_EXPONENT]: 0.7313013537293375,
            [PopularityParameterId.W]: -0.8796464573491212,
            [PopularityParameterId.B]: -1.2979574284080588,
        },
    ],
}

//

// Dave's rounded WBL-1 (aka N2D3P9, our final metric)
// Thu Aug 13, 2020 4:42 am
// See: http://forum.sagittal.org/viewtopic.php?p=2211#p2211
const wBL1 = {
    sumOfSquares: 0.00420582488763467,
    name: "{aAsLogarithmBase,b,sum,w},{aAsLogarithmBase,max,withoutRepetition}",
    submetrics: [
        {
            [PopularityParameterId.WITHOUT_REPETITION]: true,
            [PopularityParameterId.MAX]: true,
            [PopularityParameterId.A_AS_LOGARITHM_BASE]: 2,
        },
        {
            [PopularityParameterId.SUM]: true,
            [PopularityParameterId.A_AS_LOGARITHM_BASE]: 2,
            [PopularityParameterId.W]: -1,
            [PopularityParameterId.B]: -1.58496250072,
        },
    ],
}

const bestMetrics = {
    sopfgtt,

    withPrimeLimit,

    lowestEver,
    likeLowestEverButWithZeroK,
    likeLowestEverButWithZeroC,

    notTwoChunkByCurrentDefinitionMcopfr,
    notThreeChunkByCurrentDefinitionMcopfr,
    notFourChunkByCurrentDefinitionMcopfr,

    oneSubmetricSevenChunk,
    oneSubmetricSixChunk,

    almostLowestEverButWithExactA,

    lessFragileMin,

    sanityCheck,

    cwyks,

    k,
    firstAttemptAtLowestThreeChunk,

    maybeMin,

    bAndU,

    improvedMaybeMin,

    improvedFourParamSixChunk,

    improvedFourParamFiveChunk,

    j,
    secondAttemptAtLowestThreeChunk,

    hyg,

    wyb,
    wyk,

    cwyk,

    wyks,

    xwyks,

    wb,

    laj,

    kl,

    c,

    ak,
    kj,
    aux,
    wab,
    lak,

    wbl1,

    wybl1,

    wbl,
    wybl,

    waybl,

    wabl1,
    wabl,

    wBL1,
}

export {
    bestMetrics,
}
