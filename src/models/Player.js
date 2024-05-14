export class Player {
    id = null;
    name = null;
    score = 0;

    constructor({ id, name}) {
        this.id = id;
        this.name = name;
    }
}