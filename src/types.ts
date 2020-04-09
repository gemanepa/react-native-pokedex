export type RootStackParamList = {
  Home: undefined;
  Details: { item: object };
};

export interface PokemonAbility {
  name: string;
  description: string;
  isHidden: boolean;
}

export interface PokemonPokedexEntries {
  sword: string;
  shield: string;
}

export interface Pokemon {
  name: string;
  sprites: {
    artwork: string;
    home: string;
  };
  baseStats: {
    [key: string]: number;
  };
  number: string;
  index: number;
  types: string[];
  species: string;
  height: string;
  weight: string;
  abilities: PokemonAbility[];
  catchRate: string;
  baseFriendship: string;
  baseExp: string;
  growthRate: string;
  eggGroups: string[];
  genders: string[];
  eggCycles: string;
  isInSwSh: boolean;
  localNumber: string;
  localIndex: number;
  pokedexEntries: PokemonPokedexEntries;
}
