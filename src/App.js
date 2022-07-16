import React, { useEffect } from "react";
import { fetchAccount } from "./apiCalls";
const App = () => {
  return(
    <div>
      <h1>Recurly Take Home</h1>
      <button onClick={() => fetchAccount()}>Click for Account Info</button>
    </div>
  )
}
export default App