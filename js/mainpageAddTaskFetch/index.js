async function mainpageAddTaskFetch(e) {
  e.preventDefault();

  const postTitle = 'title';
  const postDescription = document.getElementById('new-post-input').value;

  const obj = {
    title: postTitle,
    description: postDescription,
  };

  const req = await fetch('http://10.130.19.30/api/items', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
    },
    body: JSON.stringify(obj),
  });

  const jsonReq = await req.json();
  console.log('test from mainpageAddTaskFetch ' + jsonReq);
}

export default mainpageAddTaskFetch;
