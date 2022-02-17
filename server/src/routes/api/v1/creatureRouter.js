import express from "express";
import { ValidationError } from "objection";
import { Creature } from "../../../models/index.js";

const creatureRouter = new express.Router()

creatureRouter.get("/", async (req, res) => {
  try {
    const creatures = await Creature.query()
    console.log("creatures at router", creatures)
    return res.status(200).json({ creatures: creatures })
  } catch (err) {
    console.log(err)
    return res.status(500).json({ errors: err })
  }
})

export default creatureRouter