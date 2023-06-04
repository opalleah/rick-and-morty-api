 // Fetch the counts for characters, episodes, and locations
 fetch('https://rickandmortyapi.com/api/character')
 .then(response => response.json())
 .then(data => {
   document.getElementById('character-count').textContent = data.info.count;
 })
 .catch(error => {
   console.log('Error:', error);
 });

fetch('https://rickandmortyapi.com/api/episode')
 .then(response => response.json())
 .then(data => {
   document.getElementById('episode-count').textContent = data.info.count;
 })
 .catch(error => {
   console.log('Error:', error);
 });

fetch('https://rickandmortyapi.com/api/location')
 .then(response => response.json())
 .then(data => {
   document.getElementById('location-count').textContent = data.info.count;
 })
 .catch(error => {
   console.log('Error:', error);
 });