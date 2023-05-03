let searchInputE1 = document.getElementById("searchInput");
let searchResultsE1 = document.getElementById("searchResults");
let spinnerE1 = document.getElementById("spinner");

function createAndAppendResults(result) {
  let { title, link, description } = result;

  let titleAnchorElement = document.createElement("a"); // create titleAchorElement
  titleAnchorElement.classList.add("result-title");
  titleAnchorElement.textContent = title;
  titleAnchorElement.href = link;
  titleAnchorElement.target = "_blank";
  searchResultsE1.appendChild(titleAnchorElement);

  let breakElement = document.createElement("br"); //create breakElement
  searchResultsE1.appendChild(breakElement);

  let linkAchorE1 = document.createElement("a");
  linkAchorE1.classList.add("result-url");
  linkAchorE1.textContent = link;
  linkAchorE1.href = link;
  linkAchorE1.target = "_blank";
  searchResultsE1.appendChild(linkAchorE1);

  let breakE1 = document.createElement("br"); //create breakElement
  searchResultsE1.appendChild(breakE1);

  let paragraphElement = document.createElement("p");
  paragraphElement.textContent = description;
  paragraphElement.classList.add("link-description");
  paragraphElement.target = "_blank";
  searchResultsE1.appendChild(paragraphElement);
}

function displaySearchItems(searchResults) {
  spinnerE1.classList.toggle("d-none");
  for (let result of searchResults) {
    createAndAppendResults(result);
  }
}

function wikipediaSearch(event) {
  if (event.key === "Enter") {
    searchResultsE1.textContent = "";
    spinnerE1.classList.toggle("d-none");
    let searchInputVal = searchInputE1.value;
    let url = "https://apis.ccbp.in/wiki-search?search=" + searchInputVal;
    let objects = {
      method: "GET",
    };
    fetch(url, objects)
      .then(function (responce) {
        return responce.json();
      })
      .then(function (jsonData) {
        let { search_results } = jsonData;

        console.log(jsonData);
        displaySearchItems(search_results);
      });
  }
}

searchInputE1.addEventListener("keydown", wikipediaSearch);
