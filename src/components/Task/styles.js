import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  headerTask: {
    marginTop: 20,
    marginHorizontal: 16,
    marginEnd: 10,
    paddingHorizontal: 16,
    height: 64,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
  },
  task: {
    padding: 16,
    color: 'black',
    fontSize: 18,
  },
  checkButton: {
    height: 25,
    width: 25,
    borderWidth: 2,
    borderColor: '#E228F0',
    borderRadius: 50,
  },
});

export default styles;
