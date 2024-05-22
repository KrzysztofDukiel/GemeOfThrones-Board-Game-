export class KingdomsTracks {
    id = null
    trackName = null
    trackPosition = null
    houseName = null
    constructor({id, trackName, houseName, trackPosition}) {
        this.id = id
        this.trackName = trackName
        this.trackPosition = trackPosition
        this.houseName = houseName
    }
}