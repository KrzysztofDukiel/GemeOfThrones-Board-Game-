export class Biding {
    id: number = 0 
    bidingValue: string = "null"
    houseName = null
    constructor({id, bidingValue, houseName}) {
        this.id = id
        this.bidingValue = bidingValue
        this.houseName = houseName
    }

}