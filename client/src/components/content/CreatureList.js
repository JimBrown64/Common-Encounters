import React, { useState, useEffect } from "react";

import CreatureTile from "./CreatureTile.js";
import EncounterForm from "./EncounterForm"
import experienceTracker from "../converters/experienceTracker.js"
import sortCreatures from "../converters/sortCreatures.js";

const CreatureList = (props) => {
  const [creatures, setCreatures] = useState([])
  const [encounterCreatures, setEncounterCreatures] = useState([])
  const user = props.user

  const getCreatures = async () => {
    try {
      const response = await fetch("/api/v1/creatures")
      if (!response.ok) {
        const errorMessage = `${response.status}(${response.statusText})`
        const error = new Error(errorMessage)
        throw (error)
      }
      const responseBody = await response.json()
      const sortedCreatures = sortCreatures(responseBody.creatures)
      setCreatures(sortedCreatures)
    } catch (error) {
      console.error("Error in CreatureList Fetch", error)
    }
  }

  const addEncounterCreature = (id) => {
    let selectedArray = []
    const addingArray = [...creatures].map((creature) => {
      if (creature.id === id)
        selectedArray.push(creature)
    }
    )
    setEncounterCreatures([...encounterCreatures].concat(selectedArray))
  }

  const creatureArray = creatures.map((creature) => {
    return (
      <CreatureTile
        key={creature.id}
        creature={creature}
        addEncounterCreature={addEncounterCreature}
        identifier="add"
      />
    )
  })

  let key = 1
  const encounterArray = encounterCreatures.map((creature) => {
    const removeEncounterCreature = (creatureId) => {
      const removeIndex = encounterCreatures.findIndex((creature) => {
        return creatureId === creature.id
      })
      const newEncounterArray = [...encounterCreatures]
      newEncounterArray.splice(removeIndex, 1)
      setEncounterCreatures(newEncounterArray)
    }
    key++
    return (
      <CreatureTile
        key={key}
        creature={creature}
        removeEncounterCreature={removeEncounterCreature}
        identifier="remove"
      />
    )
  })

  const crArray = encounterCreatures.map((creature) => {
    return creature.CR
  })
  const challengeRating = experienceTracker(crArray)

  useEffect(() => {
    getCreatures()
  }, [])

  return (
    <div className="row">
      <div className="column box left">
        <h2 className="encounter">Encounter</h2>
        <EncounterForm
          encounterArray={encounterArray}
          encounterCreatures={encounterCreatures}
          user={user}
          challengeRating={challengeRating}
        />
      </div>
      <div className="column explanation">
        <ul>
          <li>
            Click on a Creature's Name to Open it's Stat Block, Click on
            it again to Close it.</li>
          <li>Hover a Stat to See it's Associated Modifier.</li>
          <li>
            To Add a Creature to your Encounter, Click on a Creature's Name,
            and Click on "Add to Encounter" at the bottom of the Stat Block.
          </li>
          <li>
            To Remove a Creature from the Encounter, Click on the Creature
            in the Encounter, and Click on "Remove from Encounter" at the 
            bottom of the Stat Block.
          </li>
          <li>
            To Save an Encounter, Log In to your account, Enter a Name,
            and Click "Submit".
          </li>
        </ul>
      </div>
      <div className="column list box right">
        <h2 className="creatures">Creatures</h2>
        {creatureArray}
      </div>
    </div>
  )
}

export default CreatureList