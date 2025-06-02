const requestUrl = 'https://jsonplaceholder.typicode.com/users';


function sendRequest(method, url, body = null) {
    return fetch(url).then(Response => {
        return Response.text()
    })
}

sendRequest('POST', requestUrl, body)
    .then(data => console.log(data))
    .catch(err => console.log(err))

const body = {
    name: 'karim',
    age: 24,
}