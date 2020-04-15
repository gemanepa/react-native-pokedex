import React from 'react';
import { render } from 'react-native-testing-library';
import DetailsScreen from './index';

describe('<DetailsScreen />', () => {
  const props = {
    route: {
      params: {
        pokemon: {
          name: 'Grookey',
          sprites: {
            artwork: 'https://img.pokemondb.net/artwork/large/grookey.jpg',
            home: 'https://img.pokemondb.net/sprites/home/normal/grookey.png'
          },
          number: '810',
          index: 810,
          types: [
            'Grass'
          ],
          species: 'Chimp Pokémon',
          height: '0.3 m (1′00″)',
          weight: '5.0 kg (11.0 lbs)',
          abilities: [
            {
              name: 'Overgrow',
              description: 'Powers up Grass-type moves in a pinch.',
              isHidden: false
            },
            {
              name: 'Grassy Surge',
              description: 'The Pokémon creates a Grassy Terrain when it enters a battle.',
              isHidden: true
            }
          ],
          isInSwSh: true,
          localNumber: '001',
          localIndex: 1,
          catchRate: '—',
          baseFriendship: '—',
          baseExp: '—',
          growthRate: 'Medium Slow',
          eggGroups: [
            'Field',
            'Grass'
          ],
          genders: [],
          eggCycles: '20 (4,884–5,140 steps)',
          baseStats: {
            hp: 50,
            attack: 65,
            defense: 50,
            'sp. atk': 40,
            'sp. def': 40,
            speed: 65
          },
          pokedexEntries: {
            sword: 'When it uses its special stick to strike up a beat, the sound waves produced carry revitalizing energy to the plants and flowers in the area.',
            shield: 'It attacks with rapid beats of its stick. As it strikes with amazing speed, it gets more and more pumped.'
          }
        }
      }
    }
  };

  // @ts-ignore
  const { getByTestId } = render(<DetailsScreen {...props} />);

  it('should render', () => {
    expect(getByTestId('grookey-details')).toBeDefined();
  });

  it('should render a preview image', () => {
    expect(getByTestId('grookey-details-image')).toBeDefined();
  });

  it('should render the pokemon types', () => {
    const typeInfo = getByTestId('grookey-details-type-grass');
    expect(typeInfo).toBeDefined();
    expect(typeInfo.props.children).toEqual(
      props.route.params.pokemon.types[0]
    );
  });

  it('should render pokedex entries for the pokemon', () => {
    ['sword', 'shield'].forEach(game => {
      const entry = getByTestId(`grookey-details-entries-${game}`);
      expect(entry).toBeDefined();
      expect(entry.props.children).toEqual(
        props.route.params.pokemon.pokedexEntries[game]
      );
    });
  });

  it('should render graphs for each stat', () => {
    ['attack', 'defense', 'sp. atk', 'sp. def', 'speed'].forEach(stat => {
      expect(getByTestId(`grookey-details-stat-${stat}`)).toBeDefined();
    });
  });

  it('should render the abilities', () => {
    props.route.params.pokemon.abilities.forEach(ability => {
      let abilityTitle, abilityDescription;
      if (ability.isHidden) {
        abilityTitle = getByTestId(`grookey-details-ability-title-hidden-${ability.name}`);
        abilityDescription = getByTestId(`grookey-details-ability-description-hidden-${ability.name}`);
      } else {
        abilityTitle = getByTestId(`grookey-details-ability-title-${ability.name}`);
        abilityDescription = getByTestId(`grookey-details-ability-description-${ability.name}`);
      }

      expect(abilityTitle).toBeDefined();
      expect(abilityDescription).toBeDefined();
      expect(abilityTitle.props.children).toContain(
        ability.name
      );
      expect(abilityDescription.props.children).toEqual(
        ability.description
      );
    });
  });

  it('should render basic info', () => {
    const testIDPrefix = 'grookey-details-';
    ['galar-no', 'national-no', 'species', 'height', 'weight', 'growth-rate', 'egg-cycles', 'egg-groups']
      .forEach(id => {
        const testID = `${testIDPrefix}${id}`;
        expect(getByTestId(testID)).toBeDefined();
      });
  });
});
