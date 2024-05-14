import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Into from './components/Into/Into'

function App() {
  const [count, setCount] = useState(0)

  return (
    < >
   <div className='App'>
   <Navbar/>
    <Into/>
   </div>
    </>
  )
}

export default App
