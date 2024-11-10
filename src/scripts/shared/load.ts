import { Filename, Io, NEWLINE, readLines } from "@sagittal/general"
import { unformatParameters } from "../../solver"

const load = (filename: Filename): object => {
    const fullFilename = `src/input/${filename}.txt` as Filename

    return JSON.parse(unformatParameters(readLines(fullFilename).join(NEWLINE) as Io)) as object
}

export { load }
