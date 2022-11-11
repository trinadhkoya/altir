import {FlatList, StatusBar, StyleSheet, View} from 'react-native';
import React from 'react';
import colors from '../../theme/colors';
import rewardsData from '../../data/feed.data';
import FeedItem from './components/FeedItem';

const MY_USER_ID = 1253; //JUST identify myself(hardcoded)

const RewardContainer = () => {
  const _renderItem = ({item}) => <FeedItem isSelf={true} data={item} />;
  return (
    <View style={[styles.scene, {backgroundColor: colors.primary}]}>
      <FlatList
        data={rewardsData.filter(item => item?.rewardee?.id === MY_USER_ID)}
        renderItem={_renderItem}
      />
    </View>
  );
};

export default RewardContainer;
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
