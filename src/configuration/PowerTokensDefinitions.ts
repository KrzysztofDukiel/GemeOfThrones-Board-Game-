import { EnumHouse } from "../enums/EnumHouse";
import { PowerTokens } from "../models/PowerTokens";

export const PowerTokensDefinitions = [
    new PowerTokens({id:1, numberOfPowerTokens: 5, houseName: EnumHouse.ARRYN  }),
    new PowerTokens({id:2, numberOfPowerTokens: 5, houseName: EnumHouse.LANNISTER}),
    new PowerTokens({id:3, numberOfPowerTokens: 5, houseName: EnumHouse.TARGARYEN}),
    new PowerTokens({id:4, numberOfPowerTokens: 5, houseName: EnumHouse.TULLY}),
    new PowerTokens({id:5, numberOfPowerTokens: 5, houseName: EnumHouse.TYLLER }),
    new PowerTokens({id:6, numberOfPowerTokens: 5, houseName: EnumHouse.GREYJOY}),
    new PowerTokens({id:7, numberOfPowerTokens: 5, houseName: EnumHouse.BARATHEON}),
    new PowerTokens({id:8, numberOfPowerTokens: 5, houseName: EnumHouse.MARTELL}),
    new PowerTokens({id:9, numberOfPowerTokens: 5, houseName: EnumHouse.STARK}),

]