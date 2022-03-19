import { useState, useEffect } from 'react'
import RaceCar from './RaceCar'

const imgUrls = [
  `https://res.cloudinary.com/ahonore42/image/upload/v1614648086/ga/bluehatchback_rxbnn7.png`,
  `https://res.cloudinary.com/ahonore42/image/upload/v1614648099/ga/greencoupe_hr19ae.png`,
]

const Highway = ({ lights }) => {
  const [racing, setRacing] = useState('cars')

  // const toggleRacing = () => {
  //   racing === 'cars' ? setRacing('cars race') : setRacing('cars')
  // }

  const toggleRacing = () => {
    if (racing === 'cars' && lights.green) {
      setRacing('cars race')
    }
    if (racing === 'cars race' && !lights.green) {
      setRacing('cars')
    }
  }

  // In this case, the function passed to useEffect as its first argument
  // will execute (and therefore toggleRacing executes) when the component initially renders AND
  // when the lights prop changes
  useEffect(() => {
    toggleRacing()
  }, [lights])

  return (
    <div className="highway">
      <div className={racing}>
        {imgUrls.map((url, idx) => <RaceCar key={`car${idx}`} url={url}/>)}
      </div>
    </div>
  )
}

export default Highway