import React, { useState } from "react"

import fractionConversion from "../converters/fractionConversion.js"

const CreatureTile = (props) => {
  const creature = props.creature
  const id = creature.id
  const convertedCR = fractionConversion(creature.CR)

  const [visible, setVisible] = useState("hide")

  const clickHandler = () => {
    if (visible === "hide") {
      setVisible("")
    } else {
      setVisible("hide")
    }
  }

  const addHandler = () => {
    props.addEncounterCreature(id)
  }

  return (
    <div className="container">
      <h3 className="creatureName" onClick={clickHandler} >
        CR:{convertedCR}  {creature.name}
      </h3>
      <div className={`statBlock ${visible}`}>
        <div className="topStats">
          <p className="gap">
            HP:{creature.HP}
          </p>
          <p className="gap">
            AC:{creature.AC}
          </p>
          <p className="gap">
            speed:{creature.speed}
          </p>
        </div>
        <div className="statList">
          <div className="statList">
            <div className="half">
              <p className="trait">
                Str:{creature.str}
              </p>
              <p className="trait">
                Dex:{creature.dex}
              </p>
              <p className="trait">
                Con:{creature.con}
              </p>
            </div>
            <div className="half">
              <p className="trait">
                Int:{creature.int}
              </p>
              <p className="trait">
                Wis:{creature.wis}
              </p>
              <p className="trait">
                Cha:{creature.cha}
              </p>
            </div>
          </div>
          <div className="statList">
            <div className="half">
              <p>
                Str save:{creature.strSave}
              </p>
              <p>
                Dex save:{creature.dexSave}
              </p>
              <p>
                Con save:{creature.conSave}
              </p>
            </div>
            <div className="half">
              <p>
                Int save:{creature.intSave}
              </p>
              <p>
                Wis save:{creature.wisSave}
              </p>
              <p>
                Cha save:{creature.chaSave}
              </p>
            </div>
          </div>
        </div>
        <p className="actions">
          actions:{creature.actions}
        </p>
        <button className="submit" type="button" onClick={addHandler}>Add to Encounter</button>
      </div>
    </div>
  )
}

export default CreatureTile