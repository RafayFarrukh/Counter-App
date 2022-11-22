import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();



export const ContextProvider = ({ children }) => {
    const [counter, setCounter] = useState(0)

    const handleClick1 = () => {
        setCounter(counter + 1)
      }
      const handleClick2 = () => {
        setCounter(counter - 1)
      }
      

  return (
    <StateContext.Provider
      value={{
        counter,
        setCounter,
        handleClick1,
        handleClick2
   
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);