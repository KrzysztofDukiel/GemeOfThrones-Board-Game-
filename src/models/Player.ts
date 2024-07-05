export class Player {
    id: number
    name: string
    score:number

    constructor({ id, name}) {
        this.id = id;
        this.name = name;
    }
}