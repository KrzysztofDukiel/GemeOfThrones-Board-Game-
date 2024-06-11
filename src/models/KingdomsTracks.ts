import { EnumHouse } from "../enums/EnumHouse"

export class KingdomsTracks {
   
    trackName:string
    trackPosition: string
    houseName:EnumHouse
    constructor({ trackName, houseName, trackPosition}) {
        this.trackName = trackName
        this.trackPosition = trackPosition
        this.houseName = houseName
    }
}