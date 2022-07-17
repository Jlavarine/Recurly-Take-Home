import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Form.css'
const Form = ({ updateAddress }) => {
  const [street1, setStreet1] = useState('');
  const [street2, setStreet2] = useState('');
  const [city, setCity] = useState('');
  const [region, setRegion] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false)
  const [inputs, setInputs] = useState(false)

  const clearInputs = () => {
    setStreet1('')
    setStreet2('')
    setCity('')
    setRegion('')
    setPostalCode('')
    setCountry('')
    setPhone('')
  }
  // resets the inputs after submission

  const submitUpdate = (event) => {
    if (street1 && street2 && city && region && postalCode && phone) {
      // checking to make sure every field is filled out
      event.preventDefault()
      updateAddress(street1, street2, city, region, postalCode, country, phone)
      setSubmitted(true)
      setInputs(false)
      clearInputs()
    } else {
      event.preventDefault()
      setInputs(true)
    }
  }
  return (
    <div className='form-container'>
      <form className='form' onSubmit={(event) => submitUpdate(event)}>
        <h2>Update Address</h2>
        <input
          type='text'
          placeholder='Street 1'
          value={street1}
          onChange={(event) => setStreet1(event.target.value)}
        >
        </input>
        <input
          type='text'
          placeholder='Street 2'
          value={street2}
          onChange={(event) => setStreet2(event.target.value)}
        >
        </input>
        <input
          type='text'
          placeholder='City'
          value={city}
          onChange={(event) => setCity(event.target.value)}
        >
        </input>
        <input
          type='text'
          placeholder='Region'
          value={region}
          onChange={(event) => setRegion(event.target.value)}
        >
        </input>
        <input
          type='text'
          placeholder='Postal Code'
          value={postalCode}
          onChange={(event) => setPostalCode(event.target.value)}
        >
        </input>
        <input
          type='text'
          placeholder='Country'
          value={country}
          onChange={(event) => setCountry(event.target.value)}
        >
        </input>
        <input
          type='text'
          placeholder='Phone'
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        >
        </input>
        <input type="submit" placeholder="Register Pet" />
      </form>
      {submitted && <p>You updated your address</p>}
      {inputs && <p>Please fill all fields</p>}
      {/* conditionally rendering the above messages if either condition is met */}
      <Link to='/account'><button>Return to account info</button></Link>
    </div>

  )
}

export default Form
