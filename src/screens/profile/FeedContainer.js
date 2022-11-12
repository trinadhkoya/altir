import {FlatList, StatusBar, StyleSheet, View} from 'react-native';
import React from 'react';
import colors from '../../theme/colors';
import rewardsData from '../../data/feed.data';
import FeedItem from './components/FeedItem';

const FeedContainer = () => {
  const renderPlace = ({item}) => <FeedItem data={item} />;
  return (
    <View style={[styles.scene, {backgroundColor: colors.primary}]}>
      <FlatList data={rewardsData} renderItem={renderPlace} />
    </View>
  );
};
export default FeedContainer;

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
  scene: {
    flexGrow: 1,
    backgroundColor: colors.primary,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
    backgroundColor: colors.secondary,
  },
  tabBar: {
    backgroundColor: colors.secondary,
    elevation: 1,
  },
  indicator: {
    backgroundColor: colors.primary,
    borderBottomColor: colors.primary50,
    borderBottomWidth: 2,
    height: 56,
  },
});
