import { EncounterCreature } from "../../models/index.js";

class EncounterCreatureSeeder {

  static async seed() {
    const data = [
      {
        encounterId: 1,
        creatureId: 2
      },
      {
        encounterId: 1,
        creatureId: 3
      },
      {
        encounterId: 2,
        creatureId: 1
      },
      {
        encounterId: 2,
        creatureId: 3
      }
    ]

    for (const singleInstanceData of data) {
      const currentInstance = await EncounterCreature.query().findOne(singleInstanceData)
      if (!currentInstance) {
        await EncounterCreature.query().insert(singleInstanceData)
      }
    }
  }
}

export default EncounterCreatureSeeder