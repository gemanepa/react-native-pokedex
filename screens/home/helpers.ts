import { MAXIMUM_POKEMON_NUM } from '../../constants'

export function getPokemonUrls () {
  const pokemonUrls = []
  for (let i = 1; i < MAXIMUM_POKEMON_NUM; i++) {
    pokemonUrls.push(`/api/v2/pokemon/${i}`)
  }
  return pokemonUrls
}
