import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'column'
  },
  imageContainer: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 25,
    paddingTop: 15
  },
  mainImage: {
    backgroundColor: 'white'
  },
  typesContainer: {
    flex: 0.125,
    flexDirection: 'row',
    justifyContent: 'center',
    height: 50
  },
  typeContainer: {
    borderRadius: 25,
    borderWidth: 0,
    height: 50,
    marginLeft: 5,
    marginRight: 5,
    flex: 0.4,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  typeIcon: {
    flex: 0.25,
    width: 35,
    height: 35,
    marginLeft: 20,
    marginTop: 7.5
  },
  typeText: {
    flex: 0.75,
    textTransform: 'capitalize',
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold',
    height: 50,
    textAlign: 'center',
    marginRight: 25,
    marginTop: 2
  },
  abilitiesContainer: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 10,
    margin: 20
  },
  abilitiesTitle: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  abilityText: {
    textTransform: 'capitalize',
    fontWeight: 'bold',
    paddingTop: 5,
    paddingBottom: 5
  },
  abilityDescription: {
    paddingTop: 5,
    paddingBottom: 5
  }
})
