import { EnumHouse } from "../enums/EnumHouse"

export class KingdomsTracks {
    id: number
    trackName:string
    trackPosition: string
    houseName:EnumHouse
    constructor({id, trackName, houseName, trackPosition}) {
        this.id = id
        this.trackName = trackName
        this.trackPosition = trackPosition
        this.houseName = houseName
    }
}