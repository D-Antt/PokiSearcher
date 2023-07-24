
function getPokemon(nameOrId) {
    fetch('https://pokeapi.co/api/v2/pokemon/' + nameOrId)
      .then(response => response.json())
      .then(data => updatePage(data))
      .catch(error => console.error('Error:', error));
  }

  document.getElementById('pokemonInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        getPokemon(document.getElementById('pokemonInput').value);
    }
});  
  
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

  fetch('https://pokeapi.co/api/v2/pokemon?limit=1200')
    .then(response => response.json())
    .then(data => {
        const dataList = document.getElementById('pokemonNames');
        for (let i = 0; i < data.results.length; i++) {
            const option = document.createElement('option');
            option.value = data.results[i].name;
            dataList.appendChild(option);
        }
    });


  getPokemon('pikachu');
