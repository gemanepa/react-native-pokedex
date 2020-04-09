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
  }
})
