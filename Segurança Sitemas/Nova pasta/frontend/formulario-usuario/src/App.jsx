import { useState } from 'react'
import './App.css'
import FormUser from './pages/FormUser'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FormUser />
    </>
  )
}

export default App
