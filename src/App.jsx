import { useState } from 'react'
import { Weather } from './components/GetWeather/Weather'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Weather />
    </>
  )
}

export default App
