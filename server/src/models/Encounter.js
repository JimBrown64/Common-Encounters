const Model = require("./Model")

class Encounter extends Model {
  static get tableName() {
    return "encounters"
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name", "userId"],
      properties: {
        name: { type: "string" },
        userId: { type: ["integer", "string"] }
      }
    }
  }

  static get relationMappings() {
    const User = require("./User");
    const EncounterCreature = require("./EncounterCreature");
    const Creature = require("./Creature")

    return {
      users: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "encounters.userId",
          to: "users.id"
        }
      },
      encounterCreatures: {
        relation: Model.HasManyRelation,
        modelClass: EncounterCreature,
        join: {
          from: "encounters.id",
          to: "encounterCreatures.encounterId"
        }
      },
      creatures: {
        relation: Model.ManyToManyRelation,
        modelClass: Creature,
        join: {
          from: "encounters.id",
          through: {
            from: "encounterCreatures.encounterId",
            to: "encounterCreatures.creatureId"
          },
          to: "creatures.id"
        }
      }
    }
  }
}

module.exports = Encounter