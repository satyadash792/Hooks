import './App.css';
import React from 'react';

  // -----part1-------
  export const UserContext=React.createContext()
  export const AccoutContext=React.createContext()
  // export const 
function App() {

  return (
    <div>
    <UserContext.Provider value={'Satya'}>
       <AccoutContext.Provider value={'Saving Account'}>

       </AccoutContext.Provider>    
    </UserContext.Provider>
        Satya
    </div>
  );
}

export default App;
