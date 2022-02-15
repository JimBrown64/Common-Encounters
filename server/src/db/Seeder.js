/* eslint-disable no-console */
import { connection } from "../boot.js"
import CreatureSeeder from "./seeders/creatureSeeder.js"
import EncounterSeeder from "./seeders/encounterSeeder.js"
import EncounterCreatureSeeder from "./seeders/encounterCreatureSeeder.js"

class Seeder {
  static async seed() {
    console.log("seeding creatures");
    await CreatureSeeder.seed();
    console.log("seeding encounters");
    await EncounterSeeder.seed();
    await EncounterCreatureSeeder.seed();

    console.log("Done!");
    await connection.destroy()
  }
}

export default Seeder