import React, { useState, useEffect } from "react";
import { fetchAccountAPI } from "./apiCalls"
import Form from "./Form";
import AccountInfo from "./AccountInfo";
import { Link, Route } from 'react-router-dom'
import './App.css'
const App = () => {
  const [accountInfo, setAccountInfo] = useState({})
  // creates a global variable to store my fetched account for use throughout the app
  useEffect(() => {
    fetchAccountAPI()
      .then((data) => setAccountInfo(data.account));
  }, [])
  // Acts as a componentDidMount to ensure accountInfo is populated on pageload

  const updateAddress = (streetOne, streetTwo, city, region, postalCode, country, phone) => {
    fetch('http://recurly-be.herokuapp.com/api/v1/account', {
      method: 'PUT',
      body: JSON.stringify({
        address: {
          street1: `${streetOne}`,
          street2: `${streetTwo}`,
          city: `${city}`,
          region: `${region}`,
          postal_code: `${postalCode}`,
          country: `${country}`,
          phone: `${phone}`
        }
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
  // fetch call to update the account's address
  // setting accountInfo to the response from the put (which is the new account object)
  
  return (
    <div className="App">
      <h1 className='title'>Recurly Take Home</h1>
      <Route exact path='/'>
        <div className='main-page'>
          <h2 className="welcome">Welcome to Recurly</h2>
          <Link to='/account'>
            <button>Click for Account Info</button>
          </Link>
        </div>
      </Route>
      <Route path='/account'>
        <AccountInfo accountInfo={accountInfo} />
      </Route>
      <Route path='/update'>
        <Form updateAddress={updateAddress} />
      </Route>
    </div>
  )
}

export default App
