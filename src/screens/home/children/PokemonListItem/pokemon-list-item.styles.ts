import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
  type: {
    width: 25,
    height: 25,
    marginRight: 2
  },
  typeContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  }
});
