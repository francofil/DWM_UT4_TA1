import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card title="Task1" description="Primera carta TA1" assignedTo="Franco F" startDate="16-09-2024" endDate="18-09-2024"/>
    </>
  )
}

export default App
