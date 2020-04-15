import { getPokemonTypeByName } from './helpers';
import * as PokemonTypes from './pokemonTypes';

describe('Helpers', () => {
  describe('getPokemonTypeByName', () => {
    it('should fetch corrct type info', () => {
      const found = getPokemonTypeByName('grass');
      expect(found).toEqual(PokemonTypes.GRASS);
    });

    it('should fetch grass type info by default', () => {
      const found = getPokemonTypeByName();
      expect(found).toEqual(PokemonTypes.GRASS);
    });
  });
});
