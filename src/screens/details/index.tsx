import React from 'react';
import { Dimensions, Image, Text, View, SafeAreaView, ScrollView } from 'react-native';
import { ProgressChart } from 'react-native-chart-kit';
import { styles, statColours } from './details.styles';
import { getPokemonTypeByName } from '../../helpers';

/* eslint-disable no-unused-vars */
import { Pokemon } from '../../types';
import { Props } from './details.types';
/* eslint-enable no-unused-vars */

function renderTypes (pokemon: Pokemon) {
  return pokemon.types.map(type => {
    const { PRIMARY, SECONDARY } = getPokemonTypeByName(type);
    const testID = `${pokemon.name.toLowerCase()}-details-type-${type.toLowerCase()}`;
    return (
      <Text
        testID={testID}
        key={`${pokemon.name}_${type}`}
        style={[styles.typeText, { color: SECONDARY, backgroundColor: PRIMARY }]}
      >
        {type}
      </Text>
    );
  });
}

function renderStats (pokemon: Pokemon) {
  const stats = Object.keys(pokemon.baseStats);

  return (
    <View style={styles.infoContainer}>
      <Text style={styles.infoTitle}>Stats</Text>
      <View style={styles.chartsContainer}>
        {
          stats.map(stat => {
            const value = pokemon.baseStats[stat];
            const testID = `${pokemon.name.toLowerCase()}-details-stat-${stat.toLowerCase()}`;
            const colourFunc = (opacity = 1) => statColours[stat](opacity);
            const chartConfig = {
              color: colourFunc,
              labelColor: colourFunc,
              backgroundColor: 'white',
              backgroundGradientFrom: 'white',
              backgroundGradientTo: 'white',
              strokeWidth: 0.3
            };

            return (
              <View
                testID={testID}
                key={`chart_${stat}`}
              >
                <ProgressChart
                  key={stat}
                  data={{
                    labels: [stat],
                    data: [value / 255]
                  }}
                  width={100}
                  height={100}
                  hideLegend
                  chartConfig={chartConfig}
                  style={{
                    marginLeft: 20
                  }}
                />
                <Text style={[styles.infoText, { textAlign: 'center' }]}>{stat} ({value})</Text>
              </View>
            );
          })
        }
      </View>
    </View>
  );
}

function renderAbilities (pokemon: Pokemon) {
  const { abilities, types } = pokemon;
  const normalAbilities = abilities.filter(ability => !ability.isHidden);
  const hiddenAbilities = abilities.filter(ability => ability.isHidden);
  const colour = getPokemonTypeByName(types[0]).PRIMARY;
  const testIDPrefix = `${pokemon.name.toLowerCase()}-details-ability`;

  const normalAbilityComponents = normalAbilities.map(ability => {
    const { name, description } = ability;
    return [
      <Text
        testID={`${testIDPrefix}-title-${name}`}
        style={[styles.infoText, { color: colour }]}
        key={name}
      >
        {name}
      </Text>,
      <Text
        testID={`${testIDPrefix}-description-${name}`}
        style={[styles.infoDescription]}
        key={`${name}_desc`}
      >
        {description}
      </Text>
    ];
  });
  const hiddenAbilityComponents = hiddenAbilities.map(ability => {
    const { name, description } = ability;
    return [
      <Text
        testID={`${testIDPrefix}-title-hidden-${name}`}
        style={[styles.infoText, { color: colour }]}
        key={name}
      >
        {name} - Hidden Ability
      </Text>,
      <Text
        testID={`${testIDPrefix}-description-hidden-${name}`}
        style={[styles.infoDescription]}
        key={`${name}_desc`}
      >
        {description}
      </Text>
    ];
  });

  return (
    <View style={styles.infoContainer}>
      <Text style={styles.infoTitle}>Abilities</Text>
      <View>
        {normalAbilityComponents}
        {hiddenAbilityComponents}
      </View>
    </View>
  );
}

function renderBasicInfo (pokemon: Pokemon) {
  const colour = getPokemonTypeByName(pokemon.types[0]).PRIMARY;
  const testIDPrefix = `${pokemon.name.toLowerCase()}-details`;
  return (
    <View style={styles.infoContainer}>
      <Text style={styles.infoTitle}>About {pokemon.name}</Text>
      <View testID={`${testIDPrefix}-galar-no`}>
        <Text style={[styles.infoText, { color: colour }]}>
          Galar Dex
        </Text>
        <Text style={[styles.infoDescription]}>
          #{pokemon.localNumber}
        </Text>
      </View>
      <View testID={`${testIDPrefix}-national-no`}>
        <Text style={[styles.infoText, { color: colour }]}>
          National Dex
        </Text>
        <Text style={[styles.infoDescription]}>
          #{pokemon.number}
        </Text>
      </View>
      <View testID={`${testIDPrefix}-species`}>
        <Text style={[styles.infoText, { color: colour }]}>
          Species
        </Text>
        <Text style={[styles.infoDescription]}>
          {pokemon.species}
        </Text>
      </View>
      <View testID={`${testIDPrefix}-height`}>
        <Text style={[styles.infoText, { color: colour }]}>
          Height
        </Text>
        <Text style={[styles.infoDescription]}>
          {pokemon.height}
        </Text>
      </View>
      <View testID={`${testIDPrefix}-weight`}>
        <Text style={[styles.infoText, { color: colour }]}>
          Weight
        </Text>
        <Text style={[styles.infoDescription]}>
          {pokemon.weight}
        </Text>
      </View>
      <View testID={`${testIDPrefix}-growth-rate`}>
        <Text style={[styles.infoText, { color: colour }]}>
          Growth Rate
        </Text>
        <Text style={[styles.infoDescription]}>
          {pokemon.growthRate}
        </Text>
      </View>
      <View testID={`${testIDPrefix}-egg-cycles`}>
        <Text style={[styles.infoText, { color: colour }]}>
          Egg Cycles
        </Text>
        <Text style={[styles.infoDescription]}>
          {pokemon.eggCycles}
        </Text>
      </View>
      <View testID={`${testIDPrefix}-egg-groups`}>
        <Text style={[styles.infoText, { color: colour }]}>
          Egg Groups
        </Text>
        <Text style={[styles.infoDescription]}>
          {pokemon.eggGroups.join(', ')}
        </Text>
      </View>
    </View>
  );
}

function renderPokedexEntries (pokemon: Pokemon) {
  const colour = getPokemonTypeByName(pokemon.types[0]).PRIMARY;
  const testIDName = pokemon.name.toLowerCase();
  return (
    <View style={styles.infoContainer}>
      <Text style={styles.infoTitle}>#{pokemon.localNumber}</Text>
      <View>
        <Text style={[styles.infoText, { color: colour }]}>
          Sword
        </Text>
        <Text
          testID={`${testIDName}-details-entries-sword`}
          style={[styles.infoDescription]}
        >
          {pokemon.pokedexEntries.sword}
        </Text>
      </View>
      <View>
        <Text style={[styles.infoText, { color: colour }]}>
          Shield
        </Text>
        <Text
          testID={`${testIDName}-details-entries-shield`}
          style={[styles.infoDescription]}
        >
          {pokemon.pokedexEntries.shield}
        </Text>
      </View>
    </View>
  );
}

function DetailsScreen (props: Props) {
  const { route } = props;
  const { pokemon } = route.params;
  const { width } = Dimensions.get('window');
  const uri = pokemon.sprites.artwork;
  const testIDName = pokemon.name.toLowerCase();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        testID={`${testIDName}-details`}
        style={styles.container}
      >
        <View
          testID={`${testIDName}-details-image-container`}
          style={styles.imageContainer}
        >
          <Image
            testID={`${testIDName}-details-image`}
            resizeMethod='scale'
            resizeMode='contain'
            style={[styles.mainImage, { width, height: 250 }]}
            source={{ uri }}
          />
        </View>
        {renderTypes(pokemon)}
        {renderPokedexEntries(pokemon)}
        {renderStats(pokemon)}
        {renderAbilities(pokemon)}
        {renderBasicInfo(pokemon)}
      </ScrollView>
    </SafeAreaView>
  );
}

export default React.memo(DetailsScreen);
