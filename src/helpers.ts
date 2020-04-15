import * as pokemonTypes from './pokemonTypes';

export const getPokemonTypeByName = (name: string = 'grass') => {
  return pokemonTypes[name.toUpperCase()];
};
