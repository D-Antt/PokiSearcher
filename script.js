
function getPokemon(nameOrId) {
    fetch('https://pokeapi.co/api/v2/pokemon/' + nameOrId)
      .then(response => response.json())
      .then(data => updatePage(data))
      .catch(error => console.error('Error:', error));
  }
  
function getRandomPokemon() {
    const maxPokemonId = 1008;
    const randomId = Math.floor(Math.random() * maxPokemonId) + 1;
    getPokemon(randomId);
  }
  
function updatePage(data) {
    document.getElementById('pokemonName').textContent = data.name;
    if (data.sprites.other.dream_world.front_default) {
      document.getElementById('pokemonImage').src = data.sprites.other.dream_world.front_default;
  } else if (data.sprites.front_default) {
      document.getElementById('pokemonImage').src = data.sprites.front_default;
  } else {
      document.getElementById('pokemonImage').src = 'path/to/default/image.png';
  }

    document.getElementById('pokemonBaseExperience').textContent = 'Base Experience: ' + data.base_experience;
    document.getElementById('pokemonHeight').textContent = 'Height: ' + data.height;
    document.getElementById('pokemonOrder').textContent = 'Order: ' + data.order;
    document.getElementById('pokemonWeight').textContent = 'Weight: ' + data.weight;
    document.getElementById('pokemonAbilities').textContent = 'Abilities: ' + data.abilities.map(ability => ability.ability.name).join(', ');
    let pokemonName = data.name.toUpperCase();
    document.getElementById('pokemonName').textContent = pokemonName;
    let pokemonAbilities = data.abilities.map(ability => ability.ability.name.toUpperCase()).join(', ');
    document.getElementById('pokemonAbilities').textContent = 'Abilities: ' + pokemonAbilities;

  }

  getPokemon('pikachu');
