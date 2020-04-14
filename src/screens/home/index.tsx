import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

import { getPokemonTypeByName } from '../../helpers';
import { styles } from './styles';

/* eslint-disable no-unused-vars */
import { Props, State } from './componentTypes';
/* eslint-enable no-unused-vars */

class HomeScreen extends React.Component<Props, State> {
  constructor (props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
      searchText: ''
    };

    this.renderPokemon = this.renderPokemon.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
  }

  componentDidMount () {
    const { pokemon } = require('../../../assets/data/json/pokemonList.json');
    this.setState({
      loading: false,
      data: pokemon
    });
  }

  handleChangeText (text) {
    this.setState({ searchText: text });
  }

  getFilteredData () {
    if (this.state.searchText.trim().toLowerCase() === '') return this.state.data;
    const data = this.state.data.filter(pokemon => {
      return pokemon.name.toLowerCase().includes(this.state.searchText.toLowerCase());
    });
    return data;
  }

  renderPokemon (toRender) {
    const pokemon = toRender.item;
    const types = pokemon.types.map(typeName => {
      return (
        <Image
          key={`${pokemon.name}_${typeName}`}
          style={styles.type}
          source={getPokemonTypeByName(typeName).image}
        />
      );
    });

    const onPress = () => this.props.navigation.navigate('Details', { pokemon });

    return (
      <TouchableOpacity key={`${pokemon.name}_touch`} onPress={onPress}>
        <View style={styles.item}>
          <View>
            <Text
              style={styles.itemNumber}
              key={pokemon.index}
            >
              #{pokemon.localNumber}
            </Text>
            <Text
              style={styles.itemName}
              key={pokemon.name}
            >
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
    );
  }

  render () {
    return (
      <View
        testID='home'
        style={styles.container}
      >
        <TextInput
          testID='search-bar'
          style={styles.searchBar}
          onChangeText={this.handleChangeText}
          value={this.state.searchText}
          clearButtonMode='always'
          maxLength={15}
          placeholder='Search by name'
        />
        {
          this.state.loading ? <ActivityIndicator /> : (
            <FlatList
              testID='pokemon-list'
              data={this.getFilteredData()}
              renderItem={this.renderPokemon}
              keyExtractor={(item, index) => `${index}`}
            />
          )
        }
        <View style={styles.copyrightContainer}>
          <Text testID='copyright-disclaimer' style={styles.copyright}>
            This unofficial app is not supported or approved by Nintento, Game Freak,
            or The Pokémon Company. It is not affiliated with either of these companies.

            Pokémon images & names © 1995-2020 Nintendo/Game Freak.
          </Text>
        </View>
      </View>
    );
  }
}

export default HomeScreen;
