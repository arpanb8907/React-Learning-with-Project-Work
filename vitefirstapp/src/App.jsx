import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Practice from './practice'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div>
      <Practice/>
      <h3>Hello React</h3>

      <button className='btn'> click me</button>

    </div>
    
    
  )
}

export default App
