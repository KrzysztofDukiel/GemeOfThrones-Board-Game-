import { EnumHouse } from "../enums/EnumHouse"
import {Unit} from "../models/Unit"

export const UnitDefinitions = [
    new Unit({id:1, unit: "footman", strength: 1, retreated: false, houseName: EnumHouse.BARATHEON}),
    new Unit({id:2, unit: "knight", strength: 2, retreated: false, houseName: EnumHouse.BARATHEON}),
    new Unit({id:3, unit: "tower", strength: 4, retreated: false, houseName: EnumHouse.BARATHEON}),
    new Unit({id:4, unit: "ship", strength: 1, retreated: false, houseName: EnumHouse.BARATHEON}),
    
    new Unit({id:1, unit: "footman", strength: 1, retreated: false, houseName: EnumHouse.ARRYN}),
    new Unit({id:2, unit: "knight", strength: 2, retreated: false, houseName: EnumHouse.ARRYN}),
    new Unit({id:3, unit: "tower", strength: 4, retreated: false, houseName: EnumHouse.ARRYN}),
    new Unit({id:4, unit: "ship", strength: 1, retreated: false, houseName: EnumHouse.ARRYN}),

    new Unit({id:1, unit: "footman", strength: 1, retreated: false, houseName: EnumHouse.LANNISTER}),
    new Unit({id:2, unit: "knight", strength: 2, retreated: false, houseName: EnumHouse.LANNISTER}),
    new Unit({id:3, unit: "tower", strength: 4, retreated: false, houseName: EnumHouse.LANNISTER}),
    new Unit({id:4, unit: "ship", strength: 1, retreated: false, houseName: EnumHouse.LANNISTER}),

    new Unit({id:1, unit: "footman", strength: 1, retreated: false, houseName: EnumHouse.STARK}),
    new Unit({id:2, unit: "knight", strength: 2, retreated: false, houseName: EnumHouse.STARK}),
    new Unit({id:3, unit: "tower", strength: 4, retreated: false, houseName: EnumHouse.STARK}),
    new Unit({id:4, unit: "ship", strength: 1, retreated: false, houseName: EnumHouse.STARK}),

    new Unit({id:1, unit: "footman", strength: 1, retreated: false, houseName: EnumHouse.GREYJOY}),
    new Unit({id:2, unit: "knight", strength: 2, retreated: false, houseName: EnumHouse.GREYJOY}),
    new Unit({id:3, unit: "tower", strength: 4, retreated: false, houseName: EnumHouse.GREYJOY}),
    new Unit({id:4, unit: "ship", strength: 1, retreated: false, houseName: EnumHouse.GREYJOY}),

    new Unit({id:1, unit: "footman", strength: 1, retreated: false, houseName: EnumHouse.MARTELL}),
    new Unit({id:2, unit: "knight", strength: 2, retreated: false, houseName: EnumHouse.MARTELL}),
    new Unit({id:3, unit: "tower", strength: 4, retreated: false, houseName: EnumHouse.MARTELL}),
    new Unit({id:4, unit: "ship", strength: 1, retreated: false, houseName: EnumHouse.MARTELL}),

    new Unit({id:1, unit: "footman", strength: 1, retreated: false, houseName: EnumHouse.TARGARYEN}),
    new Unit({id:2, unit: "knight", strength: 2, retreated: false, houseName: EnumHouse.TARGARYEN}),
    new Unit({id:3, unit: "tower", strength: 4, retreated: false, houseName: EnumHouse.TARGARYEN}),
    new Unit({id:4, unit: "ship", strength: 1, retreated: false, houseName: EnumHouse.TARGARYEN}),

    new Unit({id:1, unit: "footman", strength: 1, retreated: false, houseName: EnumHouse.TULLY}),
    new Unit({id:2, unit: "knight", strength: 2, retreated: false, houseName: EnumHouse.TULLY}),
    new Unit({id:3, unit: "tower", strength: 4, retreated: false, houseName: EnumHouse.TULLY}),
    new Unit({id:4, unit: "ship", strength: 1, retreated: false, houseName: EnumHouse.TULLY}),

    new Unit({id:1, unit: "footman", strength: 1, retreated: false, houseName: EnumHouse.TYLLER}),
    new Unit({id:2, unit: "knight", strength: 2, retreated: false, houseName: EnumHouse.TYLLER}),
    new Unit({id:3, unit: "tower", strength: 4, retreated: false, houseName: EnumHouse.TYLLER}),
    new Unit({id:4, unit: "ship", strength: 1, retreated: false, houseName: EnumHouse.TYLLER}),
    

]