import { EnumHouse } from "../enums/EnumHouse"

export class House {
    id:string
    houseName: EnumHouse

    constructor({id, houseName}) {
        this.id = id
        this.houseName = houseName
    }
}