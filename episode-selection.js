// Fetch all episodes from the API
function fetchEpisodes() {
    const apiUrl = 'https://rickandmortyapi.com/api/episode';
    const allEpisodes = [];
  
    // Recursive function to fetch episodes from all pages
    function fetchEpisodesRecursive(url) {
      fetch(url)
        .then(response => response.json())
        .then(data => {
          allEpisodes.push(...data.results);
  
          if (data.info.next) {
            fetchEpisodesRecursive(data.info.next);
          } else {
            displayEpisodes(allEpisodes);
          }
        })
        .catch(error => {
          console.log('Error:', error);
        });
    }
  
    // Display the episodes
    function displayEpisodes(episodes) {
    const episodeListContainer = document.getElementById('episode-list');
    episodes.forEach(episode => {
      const episodeLink = document.createElement('a');
      episodeLink.href = `episode-details.html?id=${episode.id}`;
      episodeLink.className = 'episode-link';
  
      const episodeTitle = document.createElement('span');
      episodeTitle.textContent = `${episode.episode} - ${episode.name}`;
      episodeLink.appendChild(episodeTitle);
  
      episodeListContainer.appendChild(episodeLink);
    });
  }
  
  
    // Start fetching episodes
    fetchEpisodesRecursive(apiUrl);
  }
  
  // Call the fetchEpisodes function to start fetching and displaying all episodes
  fetchEpisodes();

  
  
  
  