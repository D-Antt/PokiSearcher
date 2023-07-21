function getPokemon(nameOrId) {
    fetch('https://pokeapi.co/api/v2/pokemon/' + nameOrId)
      .then(response => response.json())
      .then(data => updatePage(data))
      .catch(error => console.error('Error:', error));
  }
  
  function getRandomPokemon() {
    const maxPokemonId = 898;  // As of my knowledge cutoff in September 2021, there are 898 Pokemon.
    const randomId = Math.floor(Math.random() * maxPokemonId) + 1;
    getPokemon(randomId);
  }
  
  function updatePage(data) {
    document.getElementById('pokemon-name').textContent = data.name;
    document.getElementById('pokemon-image').src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/' + data.id + '.svg';
    document.getElementById('pokemon-base-experience').textContent = 'Base Experience: ' + data.base_experience;
    document.getElementById('pokemon-height').textContent = 'Height: ' + data.height;
    document.getElementById('pokemon-order').textContent = 'Order: ' + data.order;
    document.getElementById('pokemon-weight').textContent = 'Weight: ' + data.weight;
    document.getElementById('pokemon-abilities').textContent = 'Abilities: ' + data.abilities.map(ability => ability.ability.name).join(', ');
  }