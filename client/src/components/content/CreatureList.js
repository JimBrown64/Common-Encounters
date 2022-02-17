import React, { useState, useEffect } from "react";
import CreatureTile from "./CreatureTile.js";

const CreatureList = (props) => {
  const [creatures, setCreatures] = useState([])

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

  const creatureArray = creatures.map((creature) => {
    return (
      <CreatureTile
        key={creature.id}
        creature={creature}
      />
    )
  })

  useEffect(() => {
    getCreatures()
  }, [])

  return (
    <div>
      {creatureArray}
    </div>
  )
}

export default CreatureList