import {React,useState} from 'react'
import { useStateContext } from "../context/Counter";

const Subtraction = () => {
    const { counter,setCounter } =useStateContext();
    const [input,setInput]=useState()
    const [value,setValue]=useState()
    const submit=()=>{
        
       setValue(input-counter)
        
    }
  return (
    <div>
      <div class="column">
    <div class="card">
        <h1>Subtraction</h1>
    <h2 class="">Counter Value = {counter}</h2>
        <h2 class="">New Value is = {value}</h2>
        <input
         type="number"
         className='input-multiplier'

         value={input}
         onChange={(e)=>
            setInput(e.target.value)
        } 
                />
       <button type='submit'
                onClick={submit}
                >
               Subtraction
                </button>
    </div>
  </div>
    </div>
  )
}

export default Subtraction
