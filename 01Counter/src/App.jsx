import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter]=useState(0)
  

 const addvalue=()=>{
  setCounter(counter+1);

 }
 const removevalue=()=>{
  setCounter(counter-1);
 }
  return (
    <>
     <h1>Chai aur react</h1>
     <h2>Counter value:</h2>

     <button
     onClick={addvalue}>Add value:{counter}</button>
     <br />
     <button
     onClick={removevalue}>Remove value:{counter}</button>

     

        
    </>
  )
}

export default App
