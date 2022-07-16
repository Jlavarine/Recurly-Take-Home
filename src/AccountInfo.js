import React, { useEffect, useState }from "react";
const AccountInfo = ({accountInfo}) => {
    if(accountInfo) {
        return(
            <div>
                <h2>Account Info</h2>
                <p>First Name: {accountInfo.first_name}</p>
                <p>Last Name: {accountInfo.last_name}</p>
                <hr></hr>
                <p>Street: {accountInfo.address.street1}</p>
                <p>City: {accountInfo.address.city}</p>
                <p>Country: {accountInfo.address.country}</p>
                <p>Postal Code: {accountInfo.address.postal_code}</p>
                <p>Phone: {accountInfo.address.phone}</p>
            </div>
        )
    }
}
export default AccountInfo