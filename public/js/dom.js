const input = document.querySelector('#input');
const searchBtn = document.querySelector('#search');

const handleSearch = () => {
  const inputValue = input.value;
  xhrRequest('POST', '/search', inputValue);
};

searchBtn.addEventListener('click', handleSearch);
