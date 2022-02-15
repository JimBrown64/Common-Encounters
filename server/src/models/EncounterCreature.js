const Model = require("./Model");

class EncounterCreature extends Model {
  static get tableName() {
    return "encounterCreatures"
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["encounterId", "creatureId"],
      properties: {
        encounterId: { type: "integer" },
        creatureId: { type: "integer" }
      }
    }
  }

  static get relationMappings() {
    const Encounter = require("./Encounter");
    const Creature = require("./Creature");

    return {
      encounters: {
        relation: Model.BelongsToOneRelation,
        modelClass: Encounter,
        join: {
          from: "encounterCreatures.encounterId",
          to: "encounters.id"
        }
      },
      creatures: {
        relation: Model.BelongsToOneRelation,
        modelClass: Creature,
        join: {
          from: "encounterCreatures.creatureId",
          to: "creatures.id"
        }
      }
    }
  }
}

module.exports = EncounterCreature