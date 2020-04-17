import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
    borderWidth: 1,
    color: 'black'
  },
  item: {
    padding: 5,
    marginBottom: 5,
    marginLeft: 15,
    marginRight: 15,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    overflow: 'hidden',
    backgroundColor: 'rgba(247, 247, 247, 0.5)',
    borderRadius: 10
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
  },
  copyright: {
    fontSize: 12,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 5,
    backgroundColor: 'white',
    color: 'black',
    textAlign: 'center'
  },
  copyrightContainer: {
    borderTopColor: 'black',
    borderTopWidth: 1
  }
});
