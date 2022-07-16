export const fetchAccount = () => {
    return fetch('https://v3.recurly.com/accounts/code-1612')
    .then(response => response.json())
    .then(resp => console.log(resp))
}