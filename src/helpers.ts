import * as pokemonTypes from './pokemonTypes';

export const getPokemonTypeByName = (name: string) => {
  return pokemonTypes[name.toUpperCase()];
}
