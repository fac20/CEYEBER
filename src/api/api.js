const url = process.env.REACT_APP_DB_URL;

function request(path, options) {
  return fetch(url + path, options).then(response => {
    if (!response.ok && response.status !== 409) {
      const error = new Error('Error!');
      error.status = response.status;
      throw error;
    } else {
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

function sendAnswers({ q1a1, q1a2, q2a1, q2a2, q3a1, q3a2 }) {
  const id = window.sessionStorage.getItem('user_id');
  return request('answers', {
    method: 'POST',
    body: JSON.stringify({
      user_id: id,
      q1a1: q1a1,
      q1a2: q1a2,
      q2a1: q2a1,
      q2a2: q2a2,
      q3a1: q3a1,
      q3a2: q3a2
    }),
    headers: {
      'content-type': 'application/json'
    }
  });
}

export { signUp, sendSkills, sendAnswers };
