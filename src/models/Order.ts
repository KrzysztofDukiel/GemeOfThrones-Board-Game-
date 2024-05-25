import { EnumHouse } from "../enums/EnumHouse"

export class Order {
    id:number
    order :string
    type:string
    houseName: EnumHouse
    constructor({id, order, type, houseName }) {
        this.id = id
        this.order = order
        this.type = type
        this.houseName = houseName
    }

}