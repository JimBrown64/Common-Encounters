const Model = require("./Model")

class Creature extends Model {
  static get tableName() {
    return "creatures"
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name", "CR", "HP", "AC", "speed", "str", "dex", "con", "int", "wis", "cha", "strSave", "dexSave"
        , "conSave", "intSave", "wisSave", "chaSave"],
      properties: {
        name: { type: "string" },
        CR: { type: "float" },
        HP: { type: ["integer", "string"] },
        AC: { type: ["integer", "string"] },
        speed: { type: ["integer", "string"] },
        str: { type: ["integer", "string"] },
        dex: { type: ["integer", "string"] },
        con: { type: ["integer", "string"] },
        int: { type: ["integer", "string"] },
        wis: { type: ["integer", "string"] },
        cha: { type: ["integer", "string"] },
        strSave: { type: ["integer", "string"] },
        dexSave: { type: ["integer", "string"] },
        conSave: { type: ["integer", "string"] },
        intSave: { type: ["integer", "string"] },
        wisSave: { type: ["integer", "string"] },
        chaSave: { type: ["integer", "string"] },
        actions: { type: "string" },
        pageFrom: { type: "string" }
      }
    }
  }

  static get relationMappings() {
    const EncounterCreature = require("./EncounterCreature")
    const Encounter = require("./Encounter")
    return {
      encounterCreatures: {
        relation: Model.HasManyRelation,
        modelClass: EncounterCreature,
        join: {
          from: "creatures.id",
          to: "encounterCreatures.creatureId"
        }
      },
      encounters: {
        relation: Model.ManyToManyRelation,
        modelClass: Encounter,
        join: {
          from: "creatures.id",
          through: {
            from: "encounterCreatures.creatureId",
            to: "encounterCreatures.encounterId"
          },
          to: "encounters.id"
        }
      }
    }
  }
}

module.exports = Creature