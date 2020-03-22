import React from 'react';
import { createStackNavigator, StackView } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import { TYPE_COLOURS } from './constants';

const Stack = createStackNavigator();

const getDetailsOptions = ({ route }) => {
  const { type } = route.params.item.types.find(t => t.slot === 1);
  const { PRIMARY, SECONDARY } = TYPE_COLOURS[type.name];
  return {
    title: route.params.item.name,
    headerStyle: {
      backgroundColor: PRIMARY,
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
          title: 'Pokedex',
          headerStyle: {
            backgroundColor: '#99ccff'
          }
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

export default App;
