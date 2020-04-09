import React from 'react'
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native'
import { getPokemonTypeByName } from '../../helpers'
import { styles } from './styles'

/* eslint-disable no-unused-vars */
import { Props } from './componentTypes'
/* eslint-enable no-unused-vars */

class HomeScreen extends React.Component<Props> {
  constructor (props) {
    super(props)
    this.state = {
      data: [],
      loading: true,
      searchText: ''
    }

    this.renderPokemon = this.renderPokemon.bind(this)
    this.onChangeSearchText = this.onChangeSearchText.bind(this)
  }

  componentDidMount () {
    const { pokemon } = require('../../../assets/data/json/pokemonList.json')
    this.setState({
      loading: false,
      data: pokemon
    })
  }

  onChangeSearchText (text) {
    this.setState({ searchText: text })
  }

  getFilteredData () {
    if (this.state.searchText.trim().toLowerCase() === '') return this.state.data;
    const data = this.state.data.filter(pokemon => {
      return pokemon.name.toLowerCase().includes(this.state.searchText.toLowerCase())
    })
    return data;
  }

  renderPokemon (toRender) {
    const pokemon = toRender.item
    const types = pokemon.types.map(typeName => {
      return (
        <Image
          key={`${pokemon.name}_${typeName}`}
          style={styles.type}
          source={getPokemonTypeByName(typeName).image} />
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
              #{pokemon.localNumber}
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
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.searchBar}
          onChangeText={this.onChangeSearchText}
          value={this.state.searchText}
          clearButtonMode={'always'}
          maxLength={15}
          placeholder={'Search by name'}
        />
        {
          this.state.loading
            ? <ActivityIndicator />
            : <FlatList
                data={this.getFilteredData()}
                renderItem={this.renderPokemon}
                keyExtractor={(item, index) => `${index}`}
              />
        }
      </View>
    )
  }
}

export default HomeScreen
