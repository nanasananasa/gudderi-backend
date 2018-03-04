import React from 'react';
import { Container, Content } from 'native-base';
import MainHeader from '../../../components/organisms/MainHeader/MainHeader';
import MainTabFooter from '../../../components/organisms/MainTabFooter/MainTabFooter';
import styles from './TopPageStyle';

function TopPage(props) {
  const {
    navigation,
    dispatch,
  } = props;
  return (
    <Container style={styles.container}>
      <MainHeader
        onClickSearchIcon={() => {
          navigation.navigate('ArtistSearch');
        }}
      />
      <Content />
      <MainTabFooter />
    </Container>
  );
}

export default TopPage;