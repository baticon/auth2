class fetchApi {
  constructor() {}

  async getFetch(url, token) {
    const req = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const jsonReq = await req.json();
    return jsonReq;
  }

  async postFetch(url, obj) {
    const req = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(obj),
    });
    const jsonReq = await req.json();
    sessionStorage.setItem('access_token', jsonReq.access_token);
  }

  async postFetchReg(url, obj) {
    const req = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    });
    const jsonReq = await req.json();
    return jsonReq;
  }
}

export default fetchApi;
