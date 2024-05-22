export class Battles {
    id = null 
    attacker = null
    defender = null
    defenderSupport = null
    attackerSupport = null
    neutralSupport = null
    defenderUnits = null
    attackerUnits = null
    constructor({id, attacker, defender, defenderSupport, attackerSupport, neutralSupport, defenderUnits, attackerUnits}) {
        this.id = id
        this.attacker =attacker
        this.defender =defender
        this.attackerSupport = attackerSupport
        this.defenderSupport  = defenderSupport
        this.attackerUnits = attackerUnits
        this.defenderUnits = defenderUnits
        this.neutralSupport =neutralSupport
        
    }
}