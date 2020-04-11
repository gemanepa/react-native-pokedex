import { StyleSheet } from 'react-native'
import { isTablet } from '../../helpers'

const phoneStyle = {
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  searchBar: {
    padding: 10,
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 30,
    marginRight: 30,
    borderColor: 'grey',
    borderRadius: 10,
    borderWidth: 1
  },
  item: {
    height: 100,
    padding: 15,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    overflow: 'hidden'
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
    height: 80
  },
  typeContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  type: {
    width: 25,
    height: 25,
    marginRight: 2
  }
}

const tabletStyle = {
  ...phoneStyle,
  searchBar: {
    ...phoneStyle.searchBar,
    padding: 15,
    marginBottom: 15,
    marginTop: 15,
    marginLeft: 30,
    marginRight: 30,
    borderColor: 'grey',
    borderRadius: 10,
    borderWidth: 1
  }
}

const style = isTablet() ? tabletStyle : phoneStyle

export const styles = StyleSheet.create(style)
