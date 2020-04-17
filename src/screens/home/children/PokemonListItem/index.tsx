import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { getPokemonTypeByName } from '../../../../helpers';
import { styles } from './pokemon-list-item.styles';

function PokemonListItem (props) {
  const pokemon = props.data;
  const types = pokemon.types.map(typeName => {
    return (
      <Image
        key={`${pokemon.name}_${typeName}`}
        style={styles.type}
        source={getPokemonTypeByName(typeName).image}
      />
    );
  });

  const onPress = () => props.navigation.navigate('Details', { pokemon });
  const testIDPrefix = `list-${pokemon.name.toLowerCase()}`;
  return (
    <TouchableOpacity
      testID={testIDPrefix}
      key={`${pokemon.name}_touch`}
      onPress={onPress}
    >
      <View style={styles.item}>
        <View>
          <Text
            testID={`${testIDPrefix}-number`}
            style={styles.itemNumber}
            key={pokemon.index}
          >
              #{pokemon.localNumber}
          </Text>
          <Text
            testID={`${testIDPrefix}-name`}
            style={styles.itemName}
            key={pokemon.name}
          >
            {pokemon.name}
          </Text>
          <View
            testID={`${testIDPrefix}-types`}
            style={styles.typeContainer}
          >
            {types}
          </View>
        </View>
        <Image
          testID={`${testIDPrefix}-image`}
          style={styles.itemImage}
          source={{ uri: pokemon.sprites.home }}
        />
      </View>
    </TouchableOpacity>
  );
}

export default React.memo(PokemonListItem);
