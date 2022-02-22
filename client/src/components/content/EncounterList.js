import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const EncounterList = () => {
  const [encounters, setEncounters] = useState([])

  const getEncounters = async () => {
    try {
      const response = await fetch("/api/v1/encounters")
      if (!response.ok) {
        const errorMessage = `${response.status}(${response.statusText})`
        const error = new Error(errorMessage)
        throw (error)
      }
      const responseBody = await response.json()
      setEncounters(responseBody.encounters)
    } catch (error) {
      console.error("Error in EncounterList Fetch", error)
    }
  }

  const encounterArray = encounters.map((encounter) => {

    return (
      <Link className="link" key={encounter.id} to={`/encounters/${encounter.id}`}>
        <li>{encounter.name}</li>
      </Link>
    )
  })

  useEffect(() => {
    getEncounters()
  }, [])

  return (
    <div className="encounterList">
      <h1>Encounters:</h1>
      <ul>
        {encounterArray}
      </ul>
    </div>
  )
}

export default EncounterList