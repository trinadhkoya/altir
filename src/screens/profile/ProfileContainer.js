import React, {PureComponent} from 'react';
import ProfileHeader from './components/ProfileHeader';
import {Button, Dimensions, StyleSheet, Text, View} from 'react-native';
import {SceneMap, TabBar, TabBarItem, TabView} from 'react-native-tab-view';
import colors from '../../theme/colors';
import FeedContainer from './FeedContainer';
import RewardContainer from './RewardContainer';
import {me} from '../../constants';

const routes = [
  {key: 'first', title: 'Feed'},
  {key: 'second', title: 'My Reward'},
];

class ProfileContainer extends PureComponent {
  constructor() {
    super();
    this.state = {
      index: 0,
      routes: routes,
    };
  }

  _renderLabel = ({route}) => {
    return <Text>{route.title}</Text>;
  };

  _renderTabBarItem = props => (
    <View>
      <TabBarItem {...props} renderLabel={this._renderLabel} />
    </View>
  );

  _renderTabBar = props => {
    return (
      <TabBar
        {...props}
        activeColor={colors.primary}
        pressColor={colors.secondary}
        inactiveColor={colors.secondary}
        indicatorStyle={styles.indicator}
        style={styles.tabBar}
        renderTabBarItem={this._renderTabBarItem}
      />
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <ProfileHeader data={me} />
        <View style={styles.tabStyle}>
          <TabView
            navigationState={this.state}
            renderScene={SceneMap({
              first: FeedContainer,
              second: RewardContainer,
            })}
            indicatorStyle={styles.indicatorStyle}
            renderTabBar={this._renderTabBar}
            onIndexChange={index => this.setState({index})}
            initialLayout={{width: Dimensions.get('window').width}}
            style={styles.container}
          />
        </View>
        <View style={styles.floatingButton}>
          <Button title={'+'} color={colors.primary} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
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
  indicatorStyle: {
    height: 0,
    width: 0,
    opacity: 0,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: colors.black,
    borderRadius: 15,
    height: 40,
    width: 50,
    marginHorizontal: 20,
    justifyContent: 'center',
  },
  tabStyle: {
    backgroundColor: colors.primary,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 0,
    overflow: 'hidden',
    flex: 1,
  },
});

ProfileContainer.propTypes = {};

export default ProfileContainer;
