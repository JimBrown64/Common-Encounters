import React, { useState, useEffect } from "react";
import CreatureTile from "./CreatureTile.js";
import EncounterCreatureTile from "./EncounterCreatureTile.js";
import EncounterForm from "./EncounterForm"
import experienceTracker from "./experienceTracker.js";

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
      setCreatures(responseBody.creatures)
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
      <EncounterCreatureTile
        key={key}
        creature={creature}
        removeEncounterCreature={removeEncounterCreature}
      />
    )
  })

  const creatureArray = creatures.map((creature) => {
    return (
      <CreatureTile
        key={creature.id}
        creature={creature}
        addEncounterCreature={addEncounterCreature}
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
      <div className="column"></div>
      <div className="column list box right">
        <h2 className="creatures">Creatures</h2>
        {creatureArray}
      </div>
    </div>
  )
}

export default CreatureList