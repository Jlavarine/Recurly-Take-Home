import React, { useEffect } from "react";
import { fetchAccountAPI } from "./apiCalls";
import Form from "./Form";
const App = () => {
  let account;
  return(
    <div>
      <h1>Recurly Take Home</h1>
      <button onClick={() => {
        fetchAccountAPI()
        .then((data) => {
          return account = data
        })
        console.log( typeof data)
        }}>Click for Account Info</button>
      <button onClick={() => console.log(account)}>Click here to update address information.</button>
      <Form />
    </div>
  )
}
export default App