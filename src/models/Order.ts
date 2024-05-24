import { EnumHouse } from "../enums/EnumHouse"

export class Order {
    id = null
    order = null
    type = null
    houseName: EnumHouse | null = null
    constructor({id, order, type, houseName }) {
        this.id = id
        this.order = order
        this.type = type
        this.houseName = houseName
    }

}