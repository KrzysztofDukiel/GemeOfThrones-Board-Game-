import { EnumHouse } from "../enums/EnumHouse"

export class SupplyLimit {
    id:number
    supplyLevel:number
    houseName:EnumHouse
    constructor({id, supplyLevel, houseName}) {
        this.id = id
        this.supplyLevel = supplyLevel
        this.houseName = houseName
    }
}