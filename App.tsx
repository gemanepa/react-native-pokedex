import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from './src/screens/home'
import DetailsScreen from './src/screens/details'
import { TYPES } from './src/constants'
/* eslint-disable no-unused-vars */
import { RootStackParamList } from './src/types'
/* eslint-enable no-unused-vars */

const Stack = createStackNavigator<RootStackParamList>()

const getDetailsOptions = ({ route }) => {
  const { pokemon } = route.params
  const { name, types } = pokemon
  const { PRIMARY, SECONDARY } = TYPES[types[0].toLowerCase()]
  return {
    title: name,
    headerStyle: {
      backgroundColor: PRIMARY
    },
    headerTitleStyle: {
      textTransform: 'capitalize'
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
          title: 'Pokédex'
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
