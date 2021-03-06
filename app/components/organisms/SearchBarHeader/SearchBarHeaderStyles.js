import { StyleSheet } from 'react-native';
import constants from '../../../constants/constants';

export default StyleSheet.create({
  headerContainer: {
    backgroundColor: constants.mainColor,
    alignItems: 'center',
  },
  searchBarContainer: {
    flex: 3,
    backgroundColor: constants.lightPinkColor,
    borderRadius: 5,
  },
  searchIcon: {
    color: constants.whiteColor,
  },
  searchInput: {
    fontSize: constants.fontSizeM,
  },
  cancelButtonContainer: {
    flex: 1,
  },
  cancelButton: {
    color: constants.whiteColor,
  },
});
