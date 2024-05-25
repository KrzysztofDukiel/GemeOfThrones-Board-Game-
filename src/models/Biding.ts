import { EnumHouse } from "../enums/EnumHouse"

export class Biding {
    id: number
    bidingValue: string
    houseName: EnumHouse
    constructor({id, bidingValue, houseName}) {
        this.id = id
        this.bidingValue = bidingValue
        this.houseName = houseName
    }

}