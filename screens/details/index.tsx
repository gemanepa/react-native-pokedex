import React from 'react'
import { ActivityIndicator, Dimensions, Image, Text, View, ScrollView } from 'react-native'
import Pokedex from 'pokedex-promise-v2'
import { TYPES } from '../../constants'
import { styles } from './styles'

/* eslint-disable no-unused-vars */
import { Pokemon } from '../../types'
import { Props } from './componentTypes'
/* eslint-enable no-unused-vars */

class DetailsScreen extends React.Component<Props> {
  constructor (props) {
    super(props)
    this.state = {
      abilities: [],
      loading: true,
      pokedex: new Pokedex({ cacheLimit: 120 * 1000 })
    }
  }

  componentDidMount () {
    this.state.pokedex
      .resource(this.props.route.params.item.abilities.map(({ ability }) => ability.url))
      .then(response => this.setState({ abilities: response, loading: false }))
  }

  renderTypes ({ types }: Pokemon) {
    const typeOne = types.find(t => t.slot === 1)
    const typeOneColours = TYPES[typeOne.type.name]
    const typeTwo = types.find(t => t.slot === 2)
    const typeTwoColours = typeTwo ? TYPES[typeTwo.type.name] : {}
    const typeTwoComponent = !typeTwo ? null : (
      <View
        style={[styles.typeContainer, { backgroundColor: typeTwoColours.PRIMARY }]}>
        <Image
          style={styles.typeIcon}
          source={TYPES[typeTwo.type.name].image} />
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
          <Image
            style={styles.typeIcon}
            source={TYPES[typeOne.type.name].image} />
          <Text
            style={[styles.typeText, { color: typeOneColours.SECONDARY }]}>
            {typeOne.type.name}
          </Text>
        </View>
        {typeTwoComponent}
      </View>
    )
  }

  renderAbilities ({ abilities, types }: Pokemon) {
    const sortedAbilities = abilities.sort((a, b) => a.slot - b.slot)
    const type = types.sort((a, b) => a.slot - b.slot)[0].type.name
    const typeColour = TYPES[type].PRIMARY
    /* eslint-disable */
    const abilityComponents = sortedAbilities.map(({ ability, is_hidden }) => {
      const abilityDesc = this.state.abilities.filter(({ name }) => name.toLowerCase() === ability.name.toLowerCase())
      if (abilityDesc.length === 0) return null
      return [
        <Text style={[styles.abilityText, { color: typeColour }]} key={ability.name}>
          {ability.name} {is_hidden ? ' - Hidden Ability' : ''}
        </Text>,
        <Text style={[styles.abilityDescription]} key={`${ability.name}_desc`}>
          {abilityDesc[0].effect_entries[0].effect.replace('\n', '')}
        </Text>
      ]
    })
    /* eslint-enable */

    return (
      <View style={styles.abilitiesContainer}>
        <Text style={styles.abilitiesTitle}>Abilities</Text>
        <View>
          {this.state.loading ? <ActivityIndicator /> : abilityComponents}
        </View>
      </View>
    )
  }

  renderStats ({ stats }: Pokemon) {
    return null
  }

  render () {
    const { route } = this.props
    const { item } = route.params
    const { width } = Dimensions.get('window')
    const uri = `https://img.pokemondb.net/artwork/large/${item.name}.jpg`

    return (
      <ScrollView style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            resizeMethod={'scale'}
            resizeMode={'contain'}
            style={[styles.mainImage, { width, height: 250 }]}
            source={{ uri }} />
        </View>
        {this.renderTypes(item)}
        {this.renderAbilities(item)}
        {this.renderStats(item)}
      </ScrollView>
    )
  }
}

export default DetailsScreen
