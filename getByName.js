// Rick and Morty API: https://rickandmortyapi.com/
// Testing an API

// Function that fetches our characters based on the name from the input field
function fetchCharacters() {
  const inputValue = document.getElementById('character-input').value;

  // using Fetch to get the api characters
  fetch(`https://rickandmortyapi.com/api/character/?name=${inputValue}`)
    .then(resp => resp.json())
    .then(data => {
      formatCharacters(data.results);
    });
}

function formatCharacters(characters) {
  const charDiv = document.getElementById('characters');
  charDiv.innerHTML = '';

  characters.forEach(character => {
    const charContainer = document.createElement('div');
    charContainer.className = 'character-container';

    const charImage = document.createElement('div');
    charImage.className = 'character-image';
    const charImageInner = document.createElement('img');
    charImageInner.src = character.image;
    charImageInner.alt = character.name;
    charImage.appendChild(charImageInner);
    charContainer.appendChild(charImage);

    const charInfo = document.createElement('div');
    charInfo.className = 'character-info';

    const charName = document.createElement('h2');
    charName.textContent = character.name;
    charInfo.appendChild(charName);

    const charDetails = document.createElement('ul');

    const charStatus = createCharacterInfoItem('Status', character.status);
    charDetails.appendChild(charStatus);

    const charSpecies = createCharacterInfoItem('Species', character.species);
    charDetails.appendChild(charSpecies);

    const charGender = createCharacterInfoItem('Gender', character.gender);
    charDetails.appendChild(charGender);

    const charOrigin = createCharacterInfoItem('Origin', character.origin.name);
    charDetails.appendChild(charOrigin);

    const charLocation = createCharacterInfoItem('Last Known Location', character.location.name);
    charDetails.appendChild(charLocation);

    charInfo.appendChild(charDetails);
    charContainer.appendChild(charInfo);
    charDiv.appendChild(charContainer);
  });
}

// Helper function to create character info items
function createCharacterInfoItem(label, value) {
  const listItem = document.createElement('li');
  const labelElement = document.createElement('span');
  labelElement.textContent = `${label}: `;
  listItem.appendChild(labelElement);
  listItem.appendChild(document.createTextNode(value));
  return listItem;
}




  // foreach to get all the characters
  characters.forEach(character => {
    charDiv.innerHTML += `<div><img src="${character.image}"><h2>${character.name}</h2></div>`;
  });
