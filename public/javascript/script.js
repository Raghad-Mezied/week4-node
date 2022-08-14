const inputSearch = document.querySelector(".input-search");

const handleSuggestion = (error, data) => {
  if (error) {
    // handle error
  } else {
    // handle  dom for suggestions
  }
};

const handleAutoComplete = () => {
  const inputValue = inputSearch.value;
  fetchXHR("POST", "/suggestions", inputValue, handleSuggestion);
};

inputSearch.addEventListener("input", handleAutoComplete);
