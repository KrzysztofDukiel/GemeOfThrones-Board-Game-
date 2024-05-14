export class Units {
    id = null
    unit = null
    strength = null
    houseName = null
    retreated = null // false or true 
    constructor({id, unit, strength, houseName, retreated}) {
        this.id = id
        this.unit = unit
        this.strength =strength
        this.houseName = houseName
        this.retreated = retreated
    }
}