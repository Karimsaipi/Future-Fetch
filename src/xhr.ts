const requestUrl = 'https://jsonplaceholder.typicode.com/users';

const body = {
  name: 'karim',
  age: 24,
};

function sendRequest(method: string, url: string | URL | Request, body: any) {
  const headers = {
    'Content-Type': 'application/json',
  };

  return fetch(url, {
    method,
    body: JSON.stringify(body),
    headers,
  }).then(response => {
    return response.json(); // или .text(), если нужно
  });
}

sendRequest('POST', requestUrl, body)
  .then(data => console.log(data))
  .catch(err => console.error(err));
