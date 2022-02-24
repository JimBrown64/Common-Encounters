import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import EncounterShowTile from "./EncounterShowTile"

const EncounterShow = () => {
  const params = useParams()
  const [encounterName, setEncounterName] = useState("")
  const [encounterCreatures, setEncounterCreatures] = useState([])

  const getEncounter = async () => {
    try {
      const encounterId = params.id
      const response = await fetch(`/api/v1/encounters/${encounterId}`)
      if (!response.ok) {
        const errorMessage = `${response.status}(${response.statusText})`
        const error = new Error(errorMessage)
        throw (error)
      }
      const body = await response.json()
      setEncounterName(body.encounter.name)
      setEncounterCreatures(body.encounterCreatures)
    } catch (error) {
      console.error("error in encounter show", error.Message)
    }
  }

  let key = 1
  const tileArray = encounterCreatures.map((creature) => {
    key++
    return (
      <EncounterShowTile
        key={key}
        creature={creature}
      />
    )
  })

  useEffect(() => {
    getEncounter()
  }, [])

  return (
    <div className="showPage">
      <h1>{encounterName}</h1>
      {tileArray}
    </div>

  )
}

export default EncounterShow