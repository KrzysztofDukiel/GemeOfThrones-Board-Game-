import { EnumHouse } from "../enums/EnumHouse"

export class Commander {
    id:number
    commander:string
    strength:number
    used: boolean
    houseName:EnumHouse
    constructor({id, commander, strength, houseName, used}) {
        this.id = id
        this.commander = commander
        this.strength = strength
        this.used = used
        this.houseName = houseName
    }
}