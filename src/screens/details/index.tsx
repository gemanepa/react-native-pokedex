import React from 'react'
import { Dimensions, Image, Text, View, ScrollView } from 'react-native'
import { ProgressChart } from 'react-native-chart-kit'
import { getPokemonTypeByName } from '../../helpers'
import { styles } from './styles'

/* eslint-disable no-unused-vars */
import { Pokemon } from '../../types'
import { Props } from './componentTypes'
/* eslint-enable no-unused-vars */

const statColours = {
  'hp': (opacity = 1) => `rgba(99, 187, 91, ${opacity})`,
  'attack': (opacity = 1) => `rgba(206, 64, 105, ${opacity})`,
  'defense': (opacity = 1) => `rgba(243, 210, 59, ${opacity})`,
  'sp. atk': (opacity = 1) => `rgba(171, 106, 200, ${opacity})`,
  'sp. def': (opacity = 1) => `rgba(236, 143, 230, ${opacity})`,
  'speed': (opacity = 1) => `rgba(116, 206, 192, ${opacity})`,
};

function renderTypes (pokemon) {
  const typeComponents = pokemon.types.map(type => {
    const { PRIMARY, SECONDARY, image } = getPokemonTypeByName(type)
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

function renderStats (pokemon) {
  const stats = Object.keys(pokemon.baseStats);
  const { width } = Dimensions.get('window');
  const { PRIMARY } = getPokemonTypeByName(pokemon.types[0]);

  return (
    <View style={styles.infoContainer}>
      <Text style={styles.infoTitle}>Stats</Text>
      <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignContent: 'flex-start',
        flexWrap: 'wrap'
      }}>
        {
          stats.map(stat => {
            const value = pokemon.baseStats[stat];
            return (
              <View>
                <ProgressChart
                  key={stat}
                  data={{
                    labels: [stat],
                    data: [value / 255]
                  }}
                  width={100}
                  height={100}
                  hideLegend={true}
                  chartConfig={{
                    color: (opacity = 1) => statColours[stat](opacity),
                    labelColor: (opacity = 1) => statColours[stat](opacity),
                    backgroundColor: 'white',
                    backgroundGradientFrom: 'white',
                    backgroundGradientTo: 'white',
                    strokeWidth: 0.3
                  }}
                  style={{
                    marginLeft: 20
                  }}
                />
                <Text style={[styles.infoText, { textAlign: 'center' }]}>{stat} ({value})</Text>
              </View>
            )
          })
        }
      </View>
    </View>
  )
}

function renderAbilities (pokemon) {
  const { abilities, types } = pokemon
  const normalAbilities = abilities.filter(ability => !ability.isHidden)
  const hiddenAbilities = abilities.filter(ability => ability.isHidden)
  const colour = getPokemonTypeByName(types[0]).PRIMARY
  const normalAbilityComponents = normalAbilities.map(ability => {
    const { name, description } = ability
    return [
      <Text style={[styles.infoText, { color: colour }]} key={name}>
        {name}
      </Text>,
      <Text style={[styles.infoDescription]} key={`${name}_desc`}>
        {description}
      </Text>
    ]
  })
  const hiddenAbilityComponents = hiddenAbilities.map(ability => {
    const { name, description } = ability
    return [
      <Text style={[styles.infoText, { color: colour }]} key={name}>
        {name} - Hidden Ability
      </Text>,
      <Text style={[styles.infoDescription]} key={`${name}_desc`}>
        {description}
      </Text>
    ]
  })

  return (
    <View style={styles.infoContainer}>
      <Text style={styles.infoTitle}>Abilities</Text>
      <View>
        {normalAbilityComponents}
        {hiddenAbilityComponents}
      </View>
    </View>
  )
}

function renderBasicInfo (pokemon: Pokemon) {
  const colour = getPokemonTypeByName(pokemon.types[0]).PRIMARY
  return (
    <View style={styles.infoContainer}>
      <Text style={styles.infoTitle}>About {pokemon.name}</Text>
      <View>
        <Text style={[styles.infoText, { color: colour }]}>
          Galar Dex
        </Text>
        <Text style={[styles.infoDescription]}>
          #{pokemon.localNumber}
        </Text>
      </View>
      <View>
        <Text style={[styles.infoText, { color: colour }]}>
          National Dex
        </Text>
        <Text style={[styles.infoDescription]}>
          #{pokemon.number}
        </Text>
      </View>
      <View>
        <Text style={[styles.infoText, { color: colour }]}>
          Species
        </Text>
        <Text style={[styles.infoDescription]}>
          {pokemon.species}
        </Text>
      </View>
      <View>
        <Text style={[styles.infoText, { color: colour }]}>
          Height
        </Text>
        <Text style={[styles.infoDescription]}>
          {pokemon.height}
        </Text>
      </View>
      <View>
        <Text style={[styles.infoText, { color: colour }]}>
          Weight
        </Text>
        <Text style={[styles.infoDescription]}>
          {pokemon.weight}
        </Text>
      </View>
      <View>
        <Text style={[styles.infoText, { color: colour }]}>
          Growth Rate
        </Text>
        <Text style={[styles.infoDescription]}>
          {pokemon.growthRate}
        </Text>
      </View>
      <View>
        <Text style={[styles.infoText, { color: colour }]}>
          Egg Cycles
        </Text>
        <Text style={[styles.infoDescription]}>
          {pokemon.eggCycles}
        </Text>
      </View>
      <View>
        <Text style={[styles.infoText, { color: colour }]}>
          Egg Groups
        </Text>
        <Text style={[styles.infoDescription]}>
          {pokemon.eggGroups.join(', ')}
        </Text>
      </View>
    </View>
  )
}

function renderPokedexEntries (pokemon: Pokemon) {
  const colour = getPokemonTypeByName(pokemon.types[0]).PRIMARY
  return (
    <View style={styles.infoContainer}>
      <Text style={styles.infoTitle}>#{pokemon.localNumber}</Text>
      <View>
        <Text style={[styles.infoText, { color: colour }]}>
          Sword
        </Text>
        <Text style={[styles.infoDescription]}>
          {pokemon.pokedexEntries.sword}
        </Text>
      </View>
      <View>
        <Text style={[styles.infoText, { color: colour }]}>
          Shield
        </Text>
        <Text style={[styles.infoDescription]}>
          {pokemon.pokedexEntries.shield}
        </Text>
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
      {renderPokedexEntries(pokemon)}
      {renderStats(pokemon)}
      {renderAbilities(pokemon)}
      {renderBasicInfo(pokemon)}
    </ScrollView>
  )
}

export default DetailsScreen
