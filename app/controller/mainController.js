

const pokedex = {
  pokemonList: (request, response) => {
    response.render('pokedex');
  },
  pokemonDetails: (request, response) => {
    response.render('pokemon');
  }
}

module.exports = pokedex;