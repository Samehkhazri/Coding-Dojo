import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Display from './components/Display'

function App() {
  const [buttons, setButton] = useState(["Tab1","Tab2","Tab3"])
  const [current, setCurrent] = useState("")

  return (
    < >
      <Button buttons={buttons} setCurrent={setCurrent}/>
      <Display current={current}/>
    </>
  )
}

export default App