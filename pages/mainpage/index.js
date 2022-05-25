export const mainPagePosts = () => {
  const mainPagePost = document.createElement('div');
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());
  const page = params.page ? params.page : 1;
  mainPagePost.innerHTML = `
  <form class="mainpage">
  <div class="mainpage-header">
    <span class="bestMVP">👍Best MVP</span>
    <button class="mainpage-button">🚀 Main page</button>
    <span>|</span>
    <button id="mainpageAddPost" class="mainpage-button">✅ Add a post</button>
    <span>|</span>
    <button id="mainpageExit" class="mainpage-button">🔴 Exit</button>
  </div>
  <div class="postwire-header">
    <span class="postwire-header-text">Postwire</span>
    <div class="postwire-header-message"></div>
  </div>
  <div class="posts-container">
    <div id="posts" class="posts"></div>
  </div>
  <div id="addTaskWindow" class="add-post-window">
    <div class="add-post-header-container">
      <span class="add-post-header">Add a post</span>
    </div>
    <div class="new-post-input-container">
      <input class="new-post-border" type="text" id="new-post-input" />
    </div>
    <div class="add-post-button-container">
      <button id="add-post-button" class="add-post-button">Add</button>
    </div>
  </div>
</form>
<div class="pagination">
  <a href="/mainpage?page=${Number(page) - 1}" id='previousPage'>&laquo;</a>
  <span id='pageNumber'>${Number(page)}</span>
  <a href="/mainpage?page=${Number(page) + 1}" id='nextPage'>&raquo;</a>
</div>       

    `;
  return mainPagePost;
};

export default mainPagePosts;
