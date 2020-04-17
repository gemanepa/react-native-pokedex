import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TextInput
} from 'react-native';
import PokemonListItem from './children/PokemonListItem';

import { styles } from './home.styles';

/* eslint-disable no-unused-vars */
import { Props, State } from './home.types';
import { Pokemon } from '../../types';
/* eslint-enable no-unused-vars */

class HomeScreen extends React.Component<Props, State> {
  constructor (props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
      searchText: ''
    };
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

  getFilteredData (): Pokemon[] {
    if (this.state.searchText.trim().toLowerCase() === '') return this.state.data;
    const data = this.state.data.filter(pokemon => {
      return pokemon.name.toLowerCase().includes(this.state.searchText.toLowerCase());
    });
    return data;
  }

  render () {
    return (
      <SafeAreaView
        testID='home'
        style={styles.container}
      >
        <StatusBar
          barStyle='dark-content'
          hidden={false}
          backgroundColor='white'
          translucent={false}
          networkActivityIndicatorVisible
        />
        <TextInput
          testID='search-bar'
          style={styles.searchBar}
          onChangeText={this.handleChangeText}
          value={this.state.searchText}
          clearButtonMode='always'
          maxLength={15}
          placeholder='Search by name'
          placeholderTextColor='grey'
        />
        {
          this.state.loading ? <ActivityIndicator /> : (
            <FlatList<Pokemon>
              testID='pokemon-list'
              data={this.getFilteredData()}
              renderItem={({ item }) => <PokemonListItem data={item} navigation={this.props.navigation} />}
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
      </SafeAreaView>
    );
  }
}

export default HomeScreen;
