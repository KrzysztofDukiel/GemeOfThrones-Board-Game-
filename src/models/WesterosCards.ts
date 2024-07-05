export class WesterosCards {
    id:number
    cardName: string
    cardDescription: string
    cardNumber: number
    wildlings:boolean
    constructor({id, cardName, cardNumber, wildlings, cardDescription}) {
        this.id = id
        this.cardName = cardName
        this.cardDescription = cardDescription
        this.cardNumber = cardNumber
        this.wildlings = wildlings
    }
}