import React from "react";

const AccountInfo = ({account}) => {
    if(account) {
        return(
            <div>
                <h2>Account Info</h2>
                <p>First Name: {account.first_name}</p>
                <p>Last Name: {account.last_name}</p>
                <p>Address:</p><hr></hr>
                <p>Street: {account.street1}</p>
                <p>City: {account.city}</p>
                <p>Country: {account.country}</p>
                <p>Postal Code: {account.postal_code}</p>
                <p>Phone: {account.phone}</p>
            </div>
        )
    }
}
export default AccountInfo