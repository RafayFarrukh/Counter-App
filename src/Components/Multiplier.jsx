import {React,useState} from 'react'
import { useStateContext } from "../context/Counter";

const Multiplier = () => {
    const { counter,setCounter } =useStateContext();
    const [input,setInput]=useState()
    const [value,setValue]=useState()
    const submit=()=>{
        
       setValue(counter*input)
        
    }
  return (
    <>
      
  <div class="column">
    <div class="card">
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
               Multiply
                </button>
    </div>
  </div>

  {/* <div class="column">
    <div class="card">
      <h3>Card 2</h3>
      <p>Some text</p>
      <p>Some text</p>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
      <h3>Card 3</h3>
      <p>Some text</p>
      <p>Some text</p>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
      <h3>Card 4</h3>
      <p>Some text</p>
      <p>Some text</p>
    </div>
  </div> */}
  </>
  )
}

export default Multiplier
