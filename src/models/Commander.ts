import { EnumHouse } from "../enums/EnumHouse"

export class Commander {
    id:number
    commander:string
    strength:number
    used: boolean
    background: string
    houseName:EnumHouse
    constructor({id, commander, strength, houseName, used, background}) {
        this.id = id
        this.commander = commander
        this.strength = strength
        this.used = used
        this.background = background
        this.houseName = houseName
    }
}