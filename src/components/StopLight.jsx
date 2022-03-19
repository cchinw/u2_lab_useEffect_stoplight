const StopLight = ({ lights, setLights }) => {
  console.log('LIGHTS:', lights)
  const regulateLights = () => {
    // Condition #1
    // If the state of all three lights (red, yellow, green) is true:
    // set the state of all lights (red, yellow, green) back to false
    if (lights.red && lights.yellow && lights.green) {
      setLights({
        red: false,
        yellow: false,
        green: false
      })
    // Condition #2
    // If only the red and yellow lights have a value of true:
    // Keep the state of red and yellow as true and set the state of the green light to true
    } else if (lights.red && lights.yellow) {
      setLights({
        ...lights,
        green: true
      })
    // Condition #3
    // If only the state of the red light is true
    // Keep the state of the red light as true and set the state of the yellow light to true
    } else if (lights.red) {
      setLights({
        ...lights,
        yellow: true
      })
    // Condition #4
    // Otherwise, if none of the lights have a state of true
    // Keep the state of the other lights false, and set the state of only the red light to true
    } else {
      setLights({
        ...lights,
        red: true
      })
    }
  }

  return (
    <div className="action-area">
      <h1>Stoplight useEffect</h1>
      <div className="stoplight-container">
        <div className="stoplight">
          <div className={lights.red ? 'red' : undefined}></div>
          <div className={lights.yellow ? 'yellow' : undefined}></div>
          <div className={lights.green ? 'green' : undefined}></div>
        </div>
        <div>
          <button
            className="countdown"
            onClick={regulateLights}
          >
          {lights.red && lights.yellow && lights.green ? "Reset" : "Countdown"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default StopLight