/* eslint-disable no-unused-vars */
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList, Pokemon } from '../../types';
/* eslint-enable no-unused-vars */

export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>

export interface Props {
  navigation: HomeScreenNavigationProp;
}

export interface State {
  data: Pokemon[];
  loading: boolean;
  searchText: string;
}

export interface PokemonListItemProps {
  data: Pokemon,
  navigation: HomeScreenNavigationProp;
}
