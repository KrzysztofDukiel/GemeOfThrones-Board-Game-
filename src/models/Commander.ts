import { EnumHouse } from "../enums/EnumHouse"

export class Commander {
    id:number
    commander:string
    strength:number
    ability = null
    houseName:EnumHouse
    constructor({id, commander, strength, houseName, ability}) {
        this.id = id
        this.commander = commander
        this.strength = strength
        this.ability = ability
        this.houseName = houseName
    }
}