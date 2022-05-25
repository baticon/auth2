const error404 = () => {
  const er404 = document.createElement('div');

  er404.innerHTML = `
    <span class="error-number">404</span>
        <span class="text">Page not found</span>
        <!-- <button class="go-somewhere-button">Back</button> -->
        <a href='/'>Back</a>
  `;
  return er404;
};

export default error404;
