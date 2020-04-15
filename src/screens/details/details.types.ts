/* eslint-disable no-unused-vars */
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types';
/* eslint-enable no-unused-vars */

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>

export interface Props {
  route: DetailsScreenRouteProp;
}
