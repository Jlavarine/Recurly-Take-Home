export const fetchAccountAPI = () => {
    return fetch('http://recurly-be.herokuapp.com/api/v1/account')
    .then(response => response.json())
    .then(resp => {
        console.log(resp)
        return resp
    })
}


// var myHeaders = new Headers();
// myHeaders.append("Accept", "application/vnd.recurly.v2021-02-25");
// myHeaders.append("Content-Type", "application/json");
// // myHeaders.append('X-API-KEY', '90afdca911ff42e79d7a134dcf394c17')
// myHeaders.append("Authorization", "Basic 90afdca911ff42e79d7a134dcf394c17");

// var requestOptions = {
//   method: 'GET',
//   headers: myHeaders,
//   redirect: 'follow'
// };

// export const fetchAccountAPI = () => {
// fetch("https://v3.recurly.com/accounts/code-1612", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error))
// }


// try {
//   const account = await client.getAccount(accountId)
//   console.log('Fetched account: ', account.code)
// } catch (err) {
//   if (err instanceof recurly.errors.NotFoundError) {
//     // If the request was not found, you may want to alert the user or
//     // just return null
//     console.log('Resource Not Found')
//   } else {
//     // If we don't know what to do with the err, we should
//     // probably re-raise and let our web framework and logger handle it
//     console.log('Unknown Error: ', err)
//   }
// }
