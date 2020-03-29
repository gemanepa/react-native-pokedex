import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
/* eslint-disable no-unused-vars */
import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList, Pokemon } from '../types'
/* eslint-enable no-unused-vars */
import { TYPE_COLOURS } from '../constants'

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>
type DetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Details'>

interface Props {
  route: ProfileScreenRouteProp;
  navigation: DetailsScreenNavigationProp;
}

const commonContainerStyle = {
  borderTopColor: '#c9cfcb',
  borderTopWidth: 2,
  paddingTop: 15
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'column'
  },
  imageContainer: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 25,
    paddingBottom: 25
  },
  mainImage: {
    width: 180,
    height: 180,
    resizeMode: 'stretch',
    backgroundColor: 'white'
  },
  typesContainer: {
    flex: 0.125,
    flexDirection: 'row',
    justifyContent: 'center',
    height: 50,
    ...commonContainerStyle
  },
  typeContainer: {
    borderRadius: 25,
    borderWidth: 0,
    height: 50,
    marginLeft: 5,
    marginRight: 5
  },
  typeText: {
    textTransform: 'capitalize',
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold',
    height: 50,
    width: 100,
    textAlign: 'center'
  },
  abilitiesContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    ...commonContainerStyle
  },
  abilitiesTitle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  abilityText: {
    textTransform: 'capitalize',
    padding: 5
  }
})

function renderTypes ({ types }: Pokemon) {
  const typeOne = types.find(t => t.slot === 1)
  const typeOneColours = TYPE_COLOURS[typeOne.type.name]
  const typeTwo = types.find(t => t.slot === 2)
  const typeTwoColours = typeTwo ? TYPE_COLOURS[typeTwo.type.name] : {}
  const typeTwoComponent = !typeTwo ? null : (
    <View
      style={[styles.typeContainer, { backgroundColor: typeTwoColours.PRIMARY }]}>
      <Text
        style={[styles.typeText, { color: typeTwoColours.SECONDARY }]}>
        {typeTwo.type.name}
      </Text>
    </View>
  )

  return (
    <View style={styles.typesContainer}>
      <View
        style={[styles.typeContainer, { backgroundColor: typeOneColours.PRIMARY }]}>
        <Text
          style={[styles.typeText, { color: typeOneColours.SECONDARY }]}>
          {typeOne.type.name}
        </Text>
      </View>
      {typeTwoComponent}
    </View>
  )
}

function renderAbilities ({ abilities }: Pokemon) {
  const sortedAbilities = abilities.sort((a, b) => a.slot - b.slot)
  const abilityComponents = sortedAbilities.map(({ ability }) => {
    return (
      <Text style={styles.abilityText} key={ability.name}>
        {ability.name}
      </Text>
    )
  })

  return (
    <View style={styles.abilitiesContainer}>
      <Text style={styles.abilitiesTitle}>Abilities</Text>
      <View>
        {abilityComponents}
      </View>
    </View>
  )
}

function renderStats ({ stats }: Pokemon) {
  return null
}

function DetailsScreen ({ route, navigation }: Props) {
  const { item } = route.params
  const uri = `https://img.pokemondb.net/artwork/large/${item.name}.jpg`
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.mainImage}
          source={{ uri }} />
      </View>
      {renderTypes(item)}
      {renderAbilities(item)}
      {renderStats(item)}
    </View>
  )
}

export default DetailsScreen
