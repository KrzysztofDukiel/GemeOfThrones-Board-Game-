export class Orders {
    id = null
    order = null
    type = null
    houseName = null
    constructor({id, order, type, houseName}) {
        this.id = id
        this.order = order
        this.type = type
        this.houseName = houseName
    }

}