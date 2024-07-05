import { EnumHouse } from "../enums/EnumHouse";
import { House } from "../models/House";

export const HouseDefinitions = [
    new House({id: 1, houseName: EnumHouse.LANNISTER}),
    new House({id: 2, houseName: EnumHouse.BARATHEON}),
    new House({id: 3, houseName: EnumHouse.TARGARYEN}),
    new House({id: 4, houseName: EnumHouse.TULLY}),
    new House({id: 5, houseName: EnumHouse.TYLLER}),
    new House({id: 6, houseName: EnumHouse.GREYJOY}),
    new House({id: 7, houseName: EnumHouse.MARTELL}),
    new House({id: 8, houseName: EnumHouse.STARK}),
    new House({id: 9, houseName: EnumHouse.ARRYN}),
];