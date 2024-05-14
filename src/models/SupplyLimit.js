export class SupplyLimit {
    id = null
    supplyLevel = null
    houseName = null 
    constructor({id, supplyLevel, houseName}) {
        this.id = id
        this.supplyLevel = supplyLevel
        this.houseName = houseName
    }
}