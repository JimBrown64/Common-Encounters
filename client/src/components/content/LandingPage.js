import React from "react";

const LandingPage = () => {

  const clickHandler = () => {
    window.location.assign("/creatures")
  }

  return (
    <div className="center">
      <h2>Common Encounters</h2>
      <h5>A fifth edition Dungeons and Dragons encounter builder</h5>
      <button className="landingButton" type="button" onClick={clickHandler}>Get Started</button>
    </div>
  )
}

export default LandingPage