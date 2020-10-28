function request(url, options) {
  return fetch(url, options).then(response => {
    if (!response.ok) {
      const error = new Error('Error!');
      error.status = response.status;
      throw error;
    } else {
      return response.json();
    }
  });
}

function signUp(alias, age, location) {
  return request('https://ceyeber.herokuapp.com/users', {
    method: 'POST',
    body: JSON.stringify({ alias: alias, age: age, location }),
    headers: {
      'content-type': 'application/json'
    }
  });
}

export { signUp };
