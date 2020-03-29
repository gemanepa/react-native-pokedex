export type RootStackParamList = {
  Home: undefined;
  Details: { item: object };
};

export interface PokemonProperty {
  name: string;
  url: string;
};

export interface PokemonType {
  slot: number;
  type: PokemonProperty;
};

export interface PokemonAbility {
  /* eslint-disable-next-line */
  is_hidden: boolean;
  slot: number;
  ability: PokemonProperty;
};

export interface PokemonStat {
  /* eslint-disable-next-line */
  base_stat: number;
  effort: number;
  stat: PokemonProperty;
}

export interface Pokemon {
  abilities: PokemonAbility[];
  types: PokemonType[];
  stats: PokemonStat[];
};
