import { Encounter } from "../../models/index.js";

class EncounterSeeder {
  static async seed() {
    const encounterData = [
      {
        name: "First Encounter",
      },
      {
        name: "Second Encounter",
      }
    ]

    for (const singleEncounterData of encounterData) {
      const currentEncounter = await Encounter.query().findOne(singleEncounterData)
      if (!currentEncounter) {
        await Encounter.query().insert(singleEncounterData)
      }
    }
  }
}

export default EncounterSeeder