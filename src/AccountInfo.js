import React from "react";
import { Link } from "react-router-dom";
import './AccountInfo.css'
const AccountInfo = ({accountInfo}) => {
    if(accountInfo) {
// checking to make sure that accountInfo is defined to avoid a broken page
        return(
            <div className="account-info">
                <div>
                    <h2 className="info-title">Account Information</h2>
                    <p><span>First Name:</span> {accountInfo.first_name}</p>
                    <p><span>Last Name:</span> {accountInfo.last_name}</p>
                    <hr></hr>
                    <p><span>Street:</span> {accountInfo.address.street1}</p>
                    <p><span>City:</span> {accountInfo.address.city}</p>
                    <p><span>Country:</span> {accountInfo.address.country}</p>
                    <p><span>Postal Code:</span> {accountInfo.address.postal_code}</p>
                    <p><span>Phone:</span> {accountInfo.address.phone}</p>
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