import { Creature } from "../../models/index.js"

class CreatureSeeder {

  static async seed() {
    const creatureData = [
      {
        name: "Commoner",
        CR: 0,
        HP: 4,
        AC: 10,
        speed: 30,
        str: 10,
        dex: 10,
        con: 10,
        int: 10,
        wis: 10,
        cha: 10,
        strSave: 0,
        dexSave: 0,
        conSave: 0,
        intSave: 0,
        wisSave: 0,
        chaSave: 0,
        actions: "Club: Attack Bonus: +2, range:5ft, (1d4) bludgeoning damage "
      },
      {
        name: "Cultist",
        CR: 1/8,
        HP: 9,
        AC: 12,
        speed: 30,
        str: 11,
        dex: 12,
        con: 10,
        int: 10,
        wis: 11,
        cha: 10,
        strSave: 0,
        dexSave: 1,
        conSave: 0,
        intSave: 0,
        wisSave: 0,
        chaSave: 0,
        actions: "Scimitar: Attack Bonus: +3, range:5ft, (1d6+1)slashing damage"
      },
      {
        name: "Bandit Captain",
        CR: 2,
        HP: 65,
        AC: 15,
        speed: 30,
        str: 15,
        dex: 16,
        con: 14,
        int: 14,
        wis: 11,
        cha: 14,
        strSave: 4,
        dexSave: 5,
        conSave: 2,
        intSave: 2,
        wisSave: 2,
        chaSave: 2,
        actions: "Scimitar: Attack Bonus:+5, range:5ft, (1d6+3)slashing damage"
      }
    ]

    for (const singleCreatureData of creatureData) {
      const currentCreature = await Creature.query().findOne(singleCreatureData)
      if (!currentCreature) {
        await Creature.query().insert(singleCreatureData)
      }
    }
  }
}

export default CreatureSeeder