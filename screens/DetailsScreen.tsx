import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TYPE_COLOURS } from '../constants';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'column'
  },
  imageContainer: {
    backgroundColor: 'white',
    justifyContent:  'center',
    alignItems: 'center',
    paddingTop: 25,
    paddingBottom: 25
  },
  mainImage: {
    width: 180,
    height: 180,
    resizeMode: 'stretch',
    backgroundColor: 'white'
  },
  typesContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    height: 50
  },
  typeContainer: {
    borderRadius: 25,
    borderWidth: 0,
    height: 50,
    marginLeft: 5,
    marginRight: 5
  },
  typeText: {
    textTransform: 'capitalize',
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold',
    height: 50,
    width: 100,
    textAlign: 'center'
  }
});

function renderTypes({ types }) {
  const typeOne = types.find(t => t.slot === 1);
  const typeOneColours = TYPE_COLOURS[typeOne.type.name];
  const typeTwo = types.find(t => t.slot === 2);
  const typeTwoColours = typeTwo ? TYPE_COLOURS[typeTwo.type.name] : {};
  const typeTwoComponenmt = !typeTwo ? null : (
    <View
      style={[styles.typeContainer, { backgroundColor: typeTwoColours.PRIMARY }]}>
      <Text
        style={[styles.typeText, { color: typeTwoColours.SECONDARY }]}>
          {typeTwo.type.name}
      </Text>
    </View>
  );

  return (
    <View style={styles.typesContainer}>
      <View
        style={[styles.typeContainer, { backgroundColor: typeOneColours.PRIMARY}]}>
        <Text
          style={[styles.typeText, { color: typeOneColours.SECONDARY }]}>
          {typeOne.type.name}
        </Text>
      </View>
      {typeTwoComponenmt}
    </View>
  )
}

function DetailsScreen({ route, navigation }) {
  const { item } = route.params;
  const uri = `https://img.pokemondb.net/artwork/large/${item.name}.jpg`;
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.mainImage}
          source={{ uri }} />
      </View>
      {renderTypes(item)}
    </View>
  )
}

export default DetailsScreen;
