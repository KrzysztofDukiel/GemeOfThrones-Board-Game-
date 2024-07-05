export class WildlingsCards {
    id: number
    wildlingsCard: string
    effect:string
    constructor({id, wildlingsCard, effect}) {
        this.id = id
        this.wildlingsCard = wildlingsCard
        this.effect =effect
    }
}