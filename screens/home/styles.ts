import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
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
})
