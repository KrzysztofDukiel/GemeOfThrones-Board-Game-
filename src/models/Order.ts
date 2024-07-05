import { EnumHouse } from "../enums/EnumHouse"

export class Order {
    id:number
    order :string
    special:boolean
    houseName: EnumHouse
    constructor({id, order, special, houseName }) {
        this.id = id
        this.order = order
        this.special = special
        this.houseName = houseName
    }

}