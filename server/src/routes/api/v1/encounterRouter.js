import express from "express";
import { ValidationError } from "objection";
import { Encounter, EncounterCreature } from "../../../models/index.js";

const encounterRouter = new express.Router()

encounterRouter.get("/", async (req, res) => {
  try {
    const encounters = await Encounter.query()
    return res.status(200).json({ encounters: encounters })
  } catch (err) {
    console.log(err)
    return res.status(500).json({ errors: err })
  }
})

encounterRouter.get("/:id", async (req, res) => {
  const id = req.params.id
  try {
    const encounter = await Encounter.query().findById(id)
    const encounterCreatures = await encounter.$relatedQuery("creatures")
    const returnBody = { encounter: encounter, encounterCreatures: encounterCreatures }
    return res.status(200).json(returnBody)
  } catch (err) {
    return res.status(500).json({ errors: err })
  }
})

encounterRouter.post("/", async (req, res) => {
  const { body } = req
  const name = body.name
  const encounter = body.encounter
  const userId = body.user.id
  const encounterBody = { name, userId }

  try {
    const newEncounter = await Encounter.query().insertAndFetch(encounterBody)
    const id = newEncounter.id
    Promise.all(encounter.map(async (creature) => {
      try {
        const encounterCreature = { encounterId: id, creatureId: creature.id }
        console.log(encounterCreature)
        const newEncounterCreature = await EncounterCreature.query().insertAndFetch(encounterCreature)
        return res.status(201).json({ newEncounterCreature })
      } catch (error) {
        if (error instanceof ValidationError) {
          return res.status(422).json({ errors: error.data })
        }
      }
    }))
    return res.status(201).json({ encounter: newEncounter });
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(422).json({ errors: error.data })
    }
    console.log("error at the post router: ", error)
    console.error("Error in the encounter post router", error)
    return res.status(500).json({ errors: error })
  }
})

export default encounterRouter