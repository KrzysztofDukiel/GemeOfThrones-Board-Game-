export class PowerTokens {
    id:number
    numberOfPowerTokens:number
    houseName: string
    constructor({id, numberOfPowerTokens, houseName}) {
        this.id = id
        this.numberOfPowerTokens = numberOfPowerTokens
        this.houseName = houseName
    }
}