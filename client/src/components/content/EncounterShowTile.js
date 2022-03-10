import React, { useState } from "react";

import fractionConversion from "../converters/fractionConversion.js";
import modifierConverter from "../converters/modifierConverter.js";

const EncounterCreatureTile = (props) => {
  const creature = props.creature
  const convertedCR = fractionConversion(creature.CR)
  const [visible, setVisible] = useState("hide")

  const clickHandler = () => {
    if (visible === "hide") {
      setVisible("show")
    } else {
      setVisible("hide")
    }
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
              <div className="modifier">
                <span className="modifierText">{modifierConverter(creature.str)}</span>
                <p className="trait">
                  Str:{creature.str}
                </p>
              </div>
              <div className="modifier">
                <span className="modifierText">{modifierConverter(creature.dex)}</span>
                <p className="trait">
                  Dex:{creature.dex}
                </p>
              </div>
              <div className="modifier">
                <span className="modifierText">{modifierConverter(creature.con)}</span>
                <p className="trait">
                  Con:{creature.con}
                </p>
              </div>
            </div>
            <div className="half">
              <div className="modifier">
                <span className="modifierText">{modifierConverter(creature.int)}</span>
                <p className="trait">
                  Int:{creature.int}
                </p>
              </div>
              <div className="modifier">
                <span className="modifierText">{modifierConverter(creature.wis)}</span>
                <p className="trait">
                  Wis:{creature.wis}
                </p>
              </div>
              <div className="modifier">
                <span className="modifierText">{modifierConverter(creature.cha)}</span>
                <p className="trait">
                  Cha:{creature.cha}
                </p>
              </div>
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
      </div>
    </div>
  )
}

export default EncounterCreatureTile