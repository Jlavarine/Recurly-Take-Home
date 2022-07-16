import React, { useState } from 'react'


const Form = ({ user, registerDog }) => {
    const [ streetOne, setStreetOne] = useState('');
    const [ streetTwo, setStreetTwo] = useState('');
    const [ city, setCity] = useState('');
    const [ region, setRegion] = useState('');
    const [ postalCode, setPostalCode] = useState('');
    const [ country, setCountry] = useState('');
    const [ phone, setPhone] = useState('');



//  [...skills, new skill]

// const submitDog = (event) => {
//   event.preventDefault();
//   registerDog(name,age,breed,skills);
// }

    return (
        <div className='form-container'>
          <form>
            <h2>Update Address</h2>
            <input
            type='text'
            placeholder='Street 1'
            value={streetOne}
            onChange={(event) => setStreetOne(event.target.value)}
            >
            </input>
            <input
            type='text'
            placeholder='Street 2'
            value={streetTwo}
            onChange={(event) => setStreetTwo(event.target.value)}
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
            type='number'
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
            type='number'
            placeholder='Phone'
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            >
            </input>
            <input type="submit" placeholder="Register Pet" />
          </form>
        </div>
    )
}

export default Form
