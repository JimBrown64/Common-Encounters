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

  const deleteEncounter = async () => {
    try {
      const id = params.id
      const response = await fetch(`/api/v1/encounters/${id}/delete`, {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json"
        }),
      })
      if (!response.ok) {
        if (response.status === 422) {
          const body = await response.json()
          const newErrors = translateServerErrors(body.errors)
          return setErrors(newErrors)
        } else {
          const errorMessage = `${response.status} (${response.statusText})`
          const error = new Error(errorMessage)
          throw (error)
        }
      }
      else {
        console.log("deleted!")
      }
    } catch (error) {
      console.error("error in delete", error)
    }
  }

  const handleDelete = (encounter) => {
    let confirmation = confirm("Are you sure you want to delete this encounter?")
    if (confirmation === true) {
      deleteEncounter(encounter)
      window.location.replace("/encounters")
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
      <h1 className="anEncounter">{encounterName}</h1>
      {tileArray}
      <button type="button" onClick={handleDelete}>Delete Encounter</button>
    </div>

  )
}

export default EncounterShow