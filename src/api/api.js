const url = process.env.REACT_APP_DB_URL;

function request(path, options) {
  return fetch(url + path, options).then(response => {
    if (!response.ok && response.status !== 409) {
      const error = new Error('Error!');
      error.status = response.status;
      throw error;
    } else {
      console.log(response)
      return response.json();
    }
  });
}

function signUp(agent, age, location) {
  return request('user', {
    method: 'POST',
    body: JSON.stringify({
      agent: agent,
      age: age,
      location: location
    }),
    headers: {
      'content-type': 'application/json'
    }
  });
}

function sendSkills({
  Facebook,
  Whatsapp,
  Twitter,
  Instagram,
  Snapchat,
  TikTok,
  Youtube
}) {
  const id = window.sessionStorage.getItem('user_id');
  console.log(id, Youtube)
  return request('skills', {
    method: 'POST',
    body: JSON.stringify({
      user_id: id,
      facebook: Facebook,
      instagram: Instagram,
      snapchat: Snapchat,
      tiktok: TikTok,
      twitter: Twitter,
      whatsapp: Whatsapp,
      youtube: Youtube
    }),
    headers: {
      'content-type': 'application/json'
    }
  });
}

export { signUp, sendSkills };
