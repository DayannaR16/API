const contentCard = document.getElementById("content");
const searchCharacter = document.getElementById("search");

searchCharacter.addEventListener("input", (e) => {
  const nameSearch = searchCharacter.value;
  if (nameSearch.length > 0) {
    fetch(`https://rickandmortyapi.com/api/character/?name=${nameSearch}`)
      .then((res) => res.json())
      .then((data) => {
        removeChildNodes(content);
        data.results.map((personaje) => {
          return createCardCharacter(personaje);
        });
      });
  }
});

function getAllCharacter() {
  fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) =>
      data.results.map((personaje) => {
        return createCardCharacter(personaje);
      })
    );
}

function createCardCharacter(character) {
  const card = document.createElement("article");
  card.classList.add("characterCard");

  const characterHMTL = `
    <div class="characterCard__Img">
        <img src="${character.image}">
    </div>
    <div class="characterCard__Content">   
    <div class="section">
            <h2>${character.name}</h2>
        <span class="status"></span> ${character.status} - ${character.species}
        </span>
    </div>
    <div class="section">
        <span class="text-gray">Last known location:</span>
        <p>${character.location.name}</p>
    </div>  
`;

  card.innerHTML = characterHMTL;

  contentCard.appendChild(card);
}

function removeChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

getAllCharacter();
