import React from 'react';
import PropTypes from 'prop-types';
import { Header, Item, Icon, Input, Button, Text } from 'native-base';
import styles from './SearchBarHeaderStyles';

function SearchBarHeader(props) {
  const {
    hintText,
    onChangeText,
    onCancel,
  } = props;
  return (
    <Header
      searchBar
      style={styles.headerContainer}
    >
      <Item style={styles.searchBarContainer}>
        <Icon
          style={styles.searchIcon}
          name="ios-search"
        />
        <Input
          style={styles.searchInput}
          placeholder={hintText}
          onChangeText={onChangeText}
          returnKeyType="done"
        />
      </Item>
      <Button
        transparent
        onPress={() => {
          onCancel();
        }}
      >
        <Text style={styles.cancelButton}>キャンセル</Text>
      </Button>
    </Header>
  );
}

SearchBarHeader.propTypes = {
  hintText: PropTypes.string,
  onChangeText: PropTypes.func,
  onCancel: PropTypes.func,
};

SearchBarHeader.defaultProps = {
  hintText: '',
  onChangeText: () => {
  },
  onCancal: () => {

  },
};

export default SearchBarHeader;

