import { StyleSheet, Dimensions } from 'react-native'
import { isTablet } from '../../helpers'

const { width } = Dimensions.get('window')

const fontSize = 15

const phoneStyle = {
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
  }
}

const tabletStyle = {
  ...phoneStyle
}

const style = isTablet() ? tabletStyle : phoneStyle

export const styles = StyleSheet.create(style)
