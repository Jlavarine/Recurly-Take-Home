import React, { useEffect, useState }from "react";
import { Link } from "react-router-dom";
import './AccountInfo.css'
const AccountInfo = ({accountInfo}) => {
    if(accountInfo) {
        return(
            <div className="account-info">
                <div>
                    <h2 className="info-title">Account Info</h2>
                    <p>First Name: {accountInfo.first_name}</p>
                    <p>Last Name: {accountInfo.last_name}</p>
                    <hr></hr>
                    <p>Street: {accountInfo.address.street1}</p>
                    <p>City: {accountInfo.address.city}</p>
                    <p>Country: {accountInfo.address.country}</p>
                    <p>Postal Code: {accountInfo.address.postal_code}</p>
                    <p>Phone: {accountInfo.address.phone}</p>
                </div>
                <div className="info-buttons">
                    <Link to='/update'><button onClick={() => console.log(accountInfo)}>Update address</button></Link>
                    <Link to='/'><button>Homepage</button></Link>
                </div>
            </div>
        )
    }
}
export default AccountInfo