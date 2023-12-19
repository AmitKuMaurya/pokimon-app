import React from 'react'

import './App.css'

const internal = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
console.log(internal);

function App() {

  return (
    <>
      
      <h1> Pokimon Application </h1>
      <div className="card">
          Edit <code>src/App.jsx</code> and save to test HMR
      </div>
    </>
  )
}

export default App
