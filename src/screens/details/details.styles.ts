import { StyleSheet } from 'react-native';

const fontSize = 15;

export const statColours = {
  hp: (opacity = 1) => `rgba(99, 187, 91, ${opacity})`,
  attack: (opacity = 1) => `rgba(206, 64, 105, ${opacity})`,
  defense: (opacity = 1) => `rgba(243, 210, 59, ${opacity})`,
  'sp. atk': (opacity = 1) => `rgba(171, 106, 200, ${opacity})`,
  'sp. def': (opacity = 1) => `rgba(236, 143, 230, ${opacity})`,
  speed: (opacity = 1) => `rgba(116, 206, 192, ${opacity})`
};

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white'
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'column'
  },
  imageContainer: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 5,
    paddingTop: 5
  },
  mainImage: {
    backgroundColor: 'white'
  },
  typeText: {
    width: '100%',
    textTransform: 'uppercase',
    fontSize,
    fontWeight: 'bold',
    lineHeight: (fontSize * 0.5) + (fontSize * 2),
    textAlign: 'center'
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 7.5,
    paddingBottom: 7.5,
    marginLeft: 20,
    marginRight: 20
  },
  infoTitle: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  infoText: {
    textTransform: 'capitalize',
    fontWeight: 'bold',
    paddingTop: 5,
    paddingBottom: 5
  },
  infoDescription: {
    paddingTop: 5,
    paddingBottom: 5
  },
  chartsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignContent: 'flex-start',
    flexWrap: 'wrap'
  }
});
