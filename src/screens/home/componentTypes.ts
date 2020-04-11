/* eslint-disable no-unused-vars */
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types';
/* eslint-enable no-unused-vars */

export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>

export interface Props {
  navigation: HomeScreenNavigationProp;
}
