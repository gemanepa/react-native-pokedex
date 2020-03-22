import React from 'react';
import { FlatList, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Pokedex from 'pokedex-promise-v2';

const MAXIMUM_POKEMON_NUM = 152;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  item: {
    height: 100,
    padding: 15,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  itemNumber: {
    fontSize: 15,
    color: 'grey'
  },
  itemName: {
    textTransform: 'capitalize',
    fontSize: 22,
    color: 'black'
  },
  itemImage: {
    width: 80,
    height: 80,
  },
  typeContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  type: {
    fontSize: 10,
    textTransform: 'uppercase',
    paddingRight: 2
  }
});

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
      pokedex: new Pokedex({
        cacheLimit: 120 * 1000 // 120secs
      }),
      pokemonUrls: this.getPokemonUrls()
    }

    this.renderItem = this.renderItem.bind(this);
  }

  getPokemonUrls() {
    const pokemonUrls = [];
    for(let i = 1; i < MAXIMUM_POKEMON_NUM; i++) {
      pokemonUrls.push(`/api/v2/pokemon/${i}`);
    }
    return pokemonUrls;
  }

  componentDidMount() {
    const { pokedex, pokemonUrls } = this.state;
    pokedex.resource(pokemonUrls)
      .then(response => {
        this.setState({
          data: response,
          loading: false
        });
      });
  }

  renderItem({ item }) {
    const transformedId = `${item.id}`
      .padStart(3, '0')
      .padStart(4, '#');

    const uri = item.sprites.front_default;

    const types = item.types.map(({ type }) => {
      const { name } = type;
      return (
        <Text style={styles.type}>{name}</Text>
      );
    });

    const onPress = () => {
      this.props.navigation.navigate('Details', { item });
    }

    return (
      <TouchableOpacity onPress={onPress}>
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
            source={{uri}}
          />
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    const { data } = this.state;
    return this.state.loading ? <Text>Loading ...</Text> : (
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

export default HomeScreen;
