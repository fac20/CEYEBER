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
  return request('skills', {
    method: 'POST',
    body: JSON.stringify({
      user_id: id,
      facebook: Facebook,
      instagram: Instagram,
      snapchat: Snapchat,
      tiktok: TikTok,
      twitter: Twitter,
      whatsApp: Whatsapp,
      youtube: Youtube
    }),
    headers: {
      'content-type': 'application/json'
    }
  });
}

export { signUp, sendSkills };
