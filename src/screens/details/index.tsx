import React from 'react'
import { Dimensions, Image, Text, View, ScrollView } from 'react-native'
import Pokedex from 'pokedex-promise-v2'
import { TYPES } from '../../constants'
import { styles } from './styles'

/* eslint-disable no-unused-vars */
import { Pokemon } from '../../types'
import { Props } from './componentTypes'
/* eslint-enable no-unused-vars */

function renderTypes (pokemon) {
  const types = pokemon.types.map(type => type.toLowerCase())
  const typeComponents = types.map(type => {
    const { PRIMARY, SECONDARY, image } = TYPES[type]
    return (
      <View
        key={`${pokemon.name}_${type}`}
        style={[styles.typeContainer, { backgroundColor: PRIMARY }]}>
        <Image
          style={styles.typeIcon}
          source={image} />
        <Text
          style={[styles.typeText, { color: SECONDARY }]}>
          {type}
        </Text>
      </View>
    )
  })
  return (
    <View style={styles.typesContainer}>
      {typeComponents}
    </View>
  )
}

function renderAbilities (pokemon) {
  const { abilities, types } = pokemon
  const normalAbilities = abilities.filter(ability => !ability.isHidden)
  const hiddenAbilities = abilities.filter(ability => ability.isHidden)
  const colour = TYPES[types[0].toLowerCase()].PRIMARY
  const normalAbilityComponents = normalAbilities.map(ability => {
    console.log(ability)
    const { name, description } = ability
    return [
      <Text style={[styles.abilityText, { color: colour }]} key={name}>
        {name}
      </Text>,
      <Text style={[styles.abilityDescription]} key={`${name}_desc`}>
        {description}
      </Text>
    ]
  })
  const hiddenAbilityComponents = hiddenAbilities.map(ability => {
    const { name, description } = ability
    return [
      <Text style={[styles.abilityText, { color: colour }]} key={name}>
        {name} - Hidden Ability
      </Text>,
      <Text style={[styles.abilityDescription]} key={`${name}_desc`}>
        {description}
      </Text>
    ]
  })

  return (
    <View style={styles.abilitiesContainer}>
      <Text style={styles.abilitiesTitle}>Abilities</Text>
      <View>
        {normalAbilityComponents}
        {hiddenAbilityComponents}
      </View>
    </View>
  )
}

function DetailsScreen (props: Props) {
  const { route } = props
  const { pokemon } = route.params
  const { width } = Dimensions.get('window')
  const uri = pokemon.sprites.artwork

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          resizeMethod={'scale'}
          resizeMode={'contain'}
          style={[styles.mainImage, { width, height: 250 }]}
          source={{ uri }} />
      </View>
      {renderTypes(pokemon)}
      {renderAbilities(pokemon)}
    </ScrollView>
  )
}

export default DetailsScreen
