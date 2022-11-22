import React from 'react'
import { useStateContext } from "../context/Counter";


const Counter = () => {
    const { counter,setCounter } =useStateContext();

  const handleClick1 = () => {
    setCounter(counter + 1)
  }
  
  const handleClick2 = () => {
    setCounter(counter - 1)
  }
  return (
    <div>


<div class="column">
    <div class="card">
        <h1> Counter App</h1>
       
      <div>
       <h1>
       Counter is {counter}
        </h1> 
      </div>
        <div className="buttons">
        <button 
          onClick={handleClick1}>Increment</button>
        <button 
          onClick={handleClick2}>Decrement</button>
      </div>
      
    </div>
  </div>
    
    </div>
  )
}

export default Counter
