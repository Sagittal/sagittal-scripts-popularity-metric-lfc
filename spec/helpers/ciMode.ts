// tslint:disable-next-line no-implicit-dependencies
import {program} from "commander"

program.allowUnknownOption()

const CI_MODE: boolean = !!process.env.CI || process.argv[2] === "--ci=true"

export {
    CI_MODE,
}
