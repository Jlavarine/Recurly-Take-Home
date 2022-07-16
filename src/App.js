import React, { useState } from "react";
import { fetchAccountAPI } from "./apiCalls";
import Form from "./Form";
import AccountInfo from "./AccountInfo";
import { Link, Route } from 'react-router-dom'
const App = () => {
  const [account, setAccount] = useState({})



  const updateAddress = (streetOne, streetTwo, city, region, postalCode, country, phone) => {
    fetch('http://recurly-be.herokuapp.com/api/v1/account', {
    method: 'POST',
    body: JSON.stringify({
        "street1": `${streetOne}`,
        "street2": `${streetTwo}`,
        "city": `${city}`,
        "region": `${region}`,
        "postal_code": `${postalCode}`,
        "country": `${country}`,
        "phone": `${phone}`
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => response.json())
  .then(response => console.log('post response', response))
  }
  return(
    <div>
      <Route exact path='/'>
        <h1>Recurly Take Home</h1>
        <Link to='/account'>
          <button onClick={() => {
            fetchAccountAPI()
            .then((data) => {
             return setAccount(data)
            })
            console.log( typeof data)
        }}>Click for Account Info</button>
      </Link>
      </Route>
      <Route path='/account'>
        <AccountInfo account={account}/>
        <Link to='/update'><button onClick={() => console.log(account)}>Click here to update address information.</button></Link>
      </Route>
      <Route path='/update'>
        <Form />
      </Route>
    </div>
  )
}
export default App