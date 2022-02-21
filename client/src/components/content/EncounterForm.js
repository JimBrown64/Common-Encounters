import React, { useState, useEffect } from "react";
import ErrorList from "../layout/ErrorList"
import translateServerErrors from "../../services/translateServerErrors"

const EncounterForm = (props) => {
  const [encounterName, setEncounterName] = useState("")
  const [errors, setErrors] = useState([])

  const handleInputChange = event => {
    setEncounterName(event.currentTarget.value)
  }

  const submitForm = async (name, encounter) => {
    try {
      const response = await fetch("/api/v1/encounters", {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json"
        }),
        body: JSON.stringify({ name: name, encounter: encounter })
      })
      if (!response.ok) {
        if (response.status === 422) {
          const body = await response.json()
          const newErrors = translateServerErrors(body.errors)
          return setErrors(newErrors)
        } else {
          const errorMessage = `${response.status} (${response.statusText})`
          const error = new Error(errorMessage)
          console.log(error)
          throw (error)
        }
      }
      else {
        const body = await response.json()
      }
    } catch (error) {
      console.error("The form broke", error)
    }
  }

  const clearForm = () => {
    setEncounterName("")
    console.log(encounterName)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("encounter at encounter form: ", encounterName)
    submitForm(encounterName, props.encounterCreatures)
    clearForm()
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name: *</label>
        <input
          type='text'
          name='name'
          id='name'
          onChange={handleInputChange}
          value={encounterName}
        />
        {props.encounterArray}
        <input type='submit' />
      </form>
    </div>
  )
}

export default EncounterForm