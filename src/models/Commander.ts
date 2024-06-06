import { EnumHouse } from "../enums/EnumHouse"

export class Commander {
    id:number
    commander:string
    strength:number
    
    houseName:EnumHouse
    constructor({id, commander, strength, houseName}) {
        this.id = id
        this.commander = commander
        this.strength = strength
        this.houseName = houseName
    }
}