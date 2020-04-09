import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from './src/screens/home'
import DetailsScreen from './src/screens/details'
import { getPokemonTypeByName } from './src/helpers'
/* eslint-disable no-unused-vars */
import { RootStackParamList, Pokemon } from './src/types'
/* eslint-enable no-unused-vars */

const Stack = createStackNavigator<RootStackParamList>()

interface StackScreenProps {
  route: {
    params: {
      pokemon: Pokemon;
    };
  };
}

const getDetailsOptions = ({ route }: StackScreenProps) => {
  const { pokemon } = route.params
  const { name, types } = pokemon
  const { PRIMARY, SECONDARY } = getPokemonTypeByName(types[0])
  return {
    title: name,
    headerStyle: {
      backgroundColor: PRIMARY,
    },
    headerTitleStyle: {
      textTransform: 'capitalize',
    },
    headerTintColor: SECONDARY
  }
}

const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen
        name='Home'
        component={HomeScreen}
        options={{
          title: 'Sword & Shield Pokédex'
        }}
      />
      <Stack.Screen
        name='Details'
        component={DetailsScreen}
        options={getDetailsOptions}
      />
    </Stack.Navigator>
  </NavigationContainer>
)

export default App
