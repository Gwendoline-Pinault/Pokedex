const client = require('./client');

const dataMapper = {
  findAllPokemon: async () => {
    const queryAllPokemon = 'SELECT * FROM "pokemon";'
    const pokemonList = await client.query(queryAllPokemon);
    const pokemons = pokemonList.rows;
    return pokemons;
  },
  findOnePokemon: async (id) => {
    const queryOnePokemon = `SELECT * FROM "pokemon" WHERE numero = ${id};`;
    const findPokemon = await client.query(queryOnePokemon);
    const pokemon = findPokemon.rows[0];
    return pokemon;
  }
}

module.exports = dataMapper;