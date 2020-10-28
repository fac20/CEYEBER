const url = process.env.REACT_APP_DB_URL;

function request(path, options) {
  return fetch(url + path, options).then(response => {
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
  return request('user', {
    method: 'POST',
    body: JSON.stringify({
      alias: alias,
      age: age,
      location: location,
      created_at: '2020-10-28 14:33:57'
    }),
    headers: {
      'content-type': 'application/json'
    }
  });
}

export { signUp };
