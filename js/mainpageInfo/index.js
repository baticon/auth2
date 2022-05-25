import fetchApi from '../service/index.js';

async function mainpageInfo() {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());

  let skip = 0;
  if (params.page) {
    skip = (Number(params.page) - 1) * 3;
  }

  document.getElementById('addTaskWindow').style.display = 'none';

  let jsonReq = '';
  try {
    const url = `http://10.130.19.30/api/items?skip=${skip}&limit=3`;
    const fetchAPI = new fetchApi();
    jsonReq = await fetchAPI.getFetch(
      url,
      sessionStorage.getItem('access_token')
    );
  } catch (err) {
    alert(err.message);
    throw err;
  }

  let post = document.createElement('div');
  post.classList.add('post');

  let postHeader = document.createElement('div');
  postHeader.classList.add('post-header');
  post.appendChild(postHeader);

  if (jsonReq.length > 0) {
    let skip = 0;
    const limit = 3;

    for (let i = 0; i < jsonReq.length; i++) {
      let postHeaderName = document.createElement('span');
      postHeaderName.classList.add('post-header-name');
      postHeaderName.innerHTML = `${jsonReq[i].owner_name}`;
      postHeader.appendChild(postHeaderName);

      let postHeaderTime = document.createElement('span');
      postHeaderTime.classList.add('post-header-time');
      postHeaderTime.innerHTML += 'time:time';
      postHeader.appendChild(postHeaderTime);

      let postTextContainer = document.createElement('div');
      postTextContainer.classList.add('post-text-container');
      postHeader.appendChild(postTextContainer);

      let postText = document.createElement('span');
      postText.classList.add('post-text');
      postText.innerHTML += jsonReq[i].description;
      postTextContainer.appendChild(postText);
    }
  }
  const postHTML = document.getElementById('posts');
  postHTML.appendChild(post);
}

export default mainpageInfo;
