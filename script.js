
function getPokemon(nameOrId) {
    fetch('https://pokeapi.co/api/v2/pokemon/' + nameOrId)
      .then(response => response.json())
      .then(data => updatePage(data))
      .catch(error => console.error('Error:', error));
  }
  
function getRandomPokemon() {
    const maxPokemonId = 1008; //some still don't have photos
    const randomId = Math.floor(Math.random() * maxPokemonId) + 1;
    getPokemon(randomId);
  }
  
function updatePage(data) {
    document.getElementById('pokemonName').textContent = data.name;
    document.getElementById('pokemonImage').src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/' + data.id + '.svg';
    document.getElementById('pokemonBaseExperience').textContent = 'Base Experience: ' + data.base_experience;
    document.getElementById('pokemonHeight').textContent = 'Height: ' + data.height;
    document.getElementById('pokemonOrder').textContent = 'Order: ' + data.order;
    document.getElementById('pokemonWeight').textContent = 'Weight: ' + data.weight;
    document.getElementById('pokemonAbilities').textContent = 'Abilities: ' + data.abilities.map(ability => ability.ability.name).join(', ');
  }

  getPokemon('pikachu');
