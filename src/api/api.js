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
  return request('https://ceyeber.herokuapp.com/user', {
    method: 'POST',
    body: JSON.stringify({
      alias: alias,
      age: age,
      location: location,
      created_at: 'Thu Oct 29 2015 08:46:30 GMT+0100'
    }),
    headers: {
      'content-type': 'application/json'
    }
  });
}

export { signUp };
