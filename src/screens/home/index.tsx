import React from 'react'
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  View,
  TouchableOpacity
} from 'react-native'
// import Pokedex from 'pokedex-promise-v2'
import { TYPES } from '../../constants'
import { styles } from './styles'
// import { getPokemonUrls } from './helpers'

/* eslint-disable no-unused-vars */
import { Props } from './componentTypes'
/* eslint-enable no-unused-vars */

class HomeScreen extends React.Component<Props> {
  constructor (props) {
    super(props)
    this.state = {
      data: [],
      loading: true,
    }

    this.renderPokemon = this.renderPokemon.bind(this)
  }

  componentDidMount () {
    const { pokemon } = require('../../../assets/data/json/pokemonList.json')
    this.setState({
      loading: false,
      data: pokemon
    })
  }

  renderPokemon (toRender) {
    const pokemon = toRender.item
    const types = pokemon.types.map(typeName => {
      const type = typeName.toLowerCase()
      return (
        <Image
          key={`${pokemon.name}_${type}`}
          style={styles.type}
          source={TYPES[type].image} />
      )
    })

    const onPress = () => this.props.navigation.navigate('Details', { pokemon })

    return (
      <TouchableOpacity key={`${pokemon.name}_touch`} onPress={onPress}>
        <View style={styles.item}>
          <View>
            <Text
              style={styles.itemNumber}
              id={pokemon.index}
              key={pokemon.index}>
              #{pokemon.number}
            </Text>
            <Text
              style={styles.itemName}
              id={pokemon.name}
              key={pokemon.name}>
              {pokemon.name}
            </Text>
            <View style={styles.typeContainer}>
              {types}
            </View>
          </View>
          <Image
            style={styles.itemImage}
            source={{ uri: pokemon.sprites.home }}
          />
        </View>
      </TouchableOpacity>
    )
  }

  render () {
    const { data } = this.state
    return (
      <View style={styles.container}>
        {this.state.loading ? <ActivityIndicator /> : <FlatList data={data} renderItem={this.renderPokemon} />}
      </View>
    )
  }
}

export default HomeScreen
