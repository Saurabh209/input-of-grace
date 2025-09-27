import { useState } from 'react'
import InputOfGrace from './inputField/InputOfGrace'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <InputOfGrace />
    </>
  )
}

export default App
