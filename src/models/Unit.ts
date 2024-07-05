export class Unit {
    id:number
    unit:string
    strength:number
    houseName: string
    retreated:boolean
    constructor({id, unit, strength,  retreated, houseName}) {
        this.id = id
        this.unit = unit
        this.strength =strength
        this.houseName = houseName
        this.retreated = retreated
    }
}