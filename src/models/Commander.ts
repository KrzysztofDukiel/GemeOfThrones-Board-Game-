export class Commander {
    id = null
    commander = null
    strength = null
    // ability = null
    houseName = null
    constructor({id, commander, strength, houseName}) {
        this.id = id
        this.commander = commander
        this.strength = strength
        // this.ability = ability
        this.houseName = houseName
    }
}