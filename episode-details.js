function fetchEpisodeDetails() {
    // Get the episode ID from the query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const episodeId = urlParams.get('id');
  
    // Fetch episode details from the API
    fetch(`https://rickandmortyapi.com/api/episode/${episodeId}`)
      .then(response => response.json())
      .then(data => {
        // Display the episode details
        const episodeDetailsContainer = document.getElementById('episode-details-container');
        episodeDetailsContainer.innerHTML = `
          <h2>${data.name}</h2>
          <p>Air Date: ${data.air_date}</p>
          <p>Episode: ${data.episode}</p>
          <p>Characters:</p>
          <div id="characters-list"></div>
          <p>URL: ${data.url}</p>
          <p>Created: ${data.created}</p>
        `;
  
        // Fetch and display character details
        const charactersList = document.getElementById('characters-list');
        data.characters.forEach(characterUrl => {
          fetch(characterUrl)
            .then(response => response.json())
            .then(characterData => {
              const characterDiv = document.createElement('div');
              characterDiv.className = 'character-container';
  
              const characterImage = document.createElement('div');
              characterImage.className = 'character-image';
              const characterImageInner = document.createElement('img');
              characterImageInner.src = characterData.image;
              characterImageInner.alt = characterData.name;
              characterImage.appendChild(characterImageInner);
              characterDiv.appendChild(characterImage);
  
              const characterInfo = document.createElement('div');
              characterInfo.className = 'character-info';
  
              const characterName = document.createElement('h3');
              characterName.textContent = characterData.name;
              characterInfo.appendChild(characterName);
  
              const characterDetails = document.createElement('ul');
  
              const characterStatus = createCharacterInfoItem('Status', characterData.status);
              characterDetails.appendChild(characterStatus);
  
              const characterSpecies = createCharacterInfoItem('Species', characterData.species);
              characterDetails.appendChild(characterSpecies);
  
              const characterGender = createCharacterInfoItem('Gender', characterData.gender);
              characterDetails.appendChild(characterGender);
  
              const characterOrigin = createCharacterInfoItem('Origin', characterData.origin.name);
              characterDetails.appendChild(characterOrigin);
  
              const characterLocation = createCharacterInfoItem('Location', characterData.location.name);
              characterDetails.appendChild(characterLocation);
  
              characterInfo.appendChild(characterDetails);
              characterDiv.appendChild(characterInfo);
              charactersList.appendChild(characterDiv);
            })
            .catch(error => {
              console.log('Error:', error);
            });
        });
      })
      .catch(error => {
        console.log('Error:', error);
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
  
  // Call the fetchEpisodeDetails function to start fetching the episode details
  fetchEpisodeDetails();
  
  