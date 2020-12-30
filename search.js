// Get search text from input box
var searchInput = document.querySelector("#searchInput");
var searchForm = document.querySelector("#searchForm");

// Create an array to store searches
var searches = [];

init();

function renderSearches() {
  // Clear searchHistory element
  searchHistory.innerHTML = "";

  // Render a new li for each search
  for (var i = 0; i < searches.length; i++) {
    var search = searches[i];

    var li = document.createElement("li");
    li.textContent = search;
    li.setAttribute("data-index", i);
    li.setAttribute("class", "list-group-item");

    searchHistory.appendChild(li);
  }
}

function init() {
  // Get stored searches from localStorage
  // Parsing the JSON string to an object
  var storedSearch = JSON.parse(localStorage.getItem("searches"));

  // If searches were retrieved from localStorage, update the search array to it
  if (storedSearch !== null) {
    searches = storedSearch;
  }

  // Render searches to the DOM
  renderSearches();
}

function storeSearches() {
  // Stringify and set "searches" key in localStorage to search array
  localStorage.setItem("searches", JSON.stringify(searches));
}

// When form is submitted...
searchForm.addEventListener("submit", function(event) {
  event.preventDefault();

  var searchText = searchInput.value.trim();

  // Return from function early if submitted blank
  if (searchInput === "") {
    return;
  }

  // Add new searches to the array, clear the input field
  searches.push(searchText);
  searchInput.value = "";

  // Store updated searches in localStorage, re-render the list
  storeSearches();
  renderSearches();
});

console.log("The user's search history: " + searches);