import { StyleSheet } from 'react-native';
import constants from '../../../constants/constants';

export default StyleSheet.create({
  header: {
    backgroundColor: constants.mainColor,
  },
  headerComponent: {
    flex: 1,
  },
  searchIcon: {
    color: constants.whiteColor,
  },
  title: {
    alignItems: 'center',
    fontSize: constants.fontSizeL,
    fontWeight: 'bold',
    color: constants.whiteColor,
  },
});
