const error500 = () => {
  const er500 = document.createElement('div');

  er500.innerHTML = `
  <span class="error-number">500</span>
  <span class="text">Server error ... we are trying to fix it</span>
  <a href="index.html">Back</a>
  `;
  return er500;
};

export default error500;
