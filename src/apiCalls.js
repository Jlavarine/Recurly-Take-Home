export const fetchAccountAPI = () => {
    return fetch('http://recurly-be.herokuapp.com/api/v1/account')
        .then(response => response.json())
        .then(resp => {
            return resp
        })
}
