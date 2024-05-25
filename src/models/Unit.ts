export class Unit {
    id:number
    unit:string
    strength:number
    // houseName = null
    retreated:boolean
    constructor({id, unit, strength,  retreated}) {
        this.id = id
        this.unit = unit
        this.strength =strength
        // this.houseName = houseName
        this.retreated = retreated
    }
}