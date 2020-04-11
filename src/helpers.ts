import Constants from 'expo-constants';
import * as pokemonTypes from './pokemonTypes';

export const getPokemonTypeByName = (name: string) => {
  return pokemonTypes[name.toUpperCase()];
};

export const isIos = () => !!Constants.platform.ios;

export const isTablet = () => {
  if (isIos()) {
    return Constants.platform.ios.userInterfaceIdiom === 'tablet';
  }
  return false;
};
