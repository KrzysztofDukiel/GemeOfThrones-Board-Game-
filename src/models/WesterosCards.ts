export class WesterosCards {
    id:number
    cardName: string
    cardNumber: number
    wildlings:string
    constructor({id, cardName, cardNumber, wildlings}) {
        this.id = id
        this.cardName = cardName
        this.cardNumber = cardNumber
        this.wildlings = wildlings
    }
}