import React, { useState, useEffect } from "react";
import CreatureTile from "./CreatureTile.js";
import EncounterCreatureTile from "./EncounterCreatureTile.js";
import EncounterForm from "./EncounterForm"

const CreatureList = (props) => {
  const [creatures, setCreatures] = useState([])
  const [encounterCreatures, setEncounterCreatures] = useState([])

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

  useEffect(() => {
    getCreatures()
  }, [])

  return (
    <div className="row">
      <div className="column">
      <EncounterForm
        encounterArray={encounterArray}
        encounterCreatures={encounterCreatures}
      />
      </div>
      <div className= "column list">
        {creatureArray}
      </div>
    </div>
  )
}

export default CreatureList