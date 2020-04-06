import React from 'react'
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  View,
  TouchableOpacity
} from 'react-native'
import Pokedex from 'pokedex-promise-v2'
import { TYPES } from '../../constants'
import { styles } from './styles'
import { getPokemonUrls } from './helpers'

/* eslint-disable no-unused-vars */
import { Props } from './componentTypes'
/* eslint-enable no-unused-vars */

class HomeScreen extends React.Component<Props> {
  constructor (props) {
    super(props)
    this.state = {
      data: [],
      loading: true,
      pokedex: new Pokedex({ cacheLimit: 120 * 1000 }),
      pokemonUrls: getPokemonUrls()
    }

    this.renderItem = this.renderItem.bind(this)
  }

  componentDidMount () {
    const { pokedex, pokemonUrls } = this.state
    pokedex
      .resource(pokemonUrls)
      .then(response => this.setState({ data: response, loading: false }))
  }

  renderItem ({ item }) {
    const transformedId = `${item.id}`
      .padStart(3, '0')
      .padStart(4, '#')

    const uri = `https://img.pokemondb.net/sprites/home/normal/${item.name}.png`

    const types = item.types.sort((a, b) => a.slot - b.slot).map(({ type }) => {
      const { name } = type
      return (
        <Image
          key={`${uri}_${name}`}
          style={styles.type}
          source={TYPES[name].image} />
      )
    })

    const onPress = () => this.props.navigation.navigate('Details', { item })

    return (
      <TouchableOpacity key={`${item.name}_touch`} onPress={onPress}>
        <View style={styles.item}>
          <View>
            <Text
              style={styles.itemNumber}
              id={item.id}
              key={item.id}>
              {transformedId}
            </Text>
            <Text
              style={styles.itemName}
              id={item.name}
              key={item.name}>
              {item.name}
            </Text>
            <View style={styles.typeContainer}>
              {types}
            </View>
          </View>
          <Image
            style={styles.itemImage}
            source={{ uri }}
          />
        </View>
      </TouchableOpacity>
    )
  }

  render () {
    const { data } = this.state
    return (
      <View style={styles.container}>
        {this.state.loading ? <ActivityIndicator /> : <FlatList data={data} renderItem={this.renderItem} />}
      </View>
    )
  }
}

export default HomeScreen
