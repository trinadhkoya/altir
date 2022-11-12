import {FlatList, StatusBar, StyleSheet, View} from 'react-native';
import React from 'react';
import colors from '../../theme/colors';
import rewardsData from '../../data/feed.data';
import FeedItem from './components/FeedItem';
import {me} from '../../constants';

const RewardContainer = () => {
  const _renderItem = ({item}) => <FeedItem isSelf={true} data={item} />;
  return (
    <View style={[styles.scene, {backgroundColor: colors.primary}]}>
      <FlatList
        data={rewardsData.filter(item => item?.rewardee?.id === me.id)}
        renderItem={_renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
  scene: {
    flex: 1,
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
export default RewardContainer;
