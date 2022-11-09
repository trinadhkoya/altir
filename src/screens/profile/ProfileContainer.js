import React, {PureComponent} from 'react';
import ProfileHeader from './components/ProfileHeader';
import {Dimensions, StatusBar, StyleSheet, Text, View} from 'react-native';
import {SceneMap, TabBar, TabBarItem, TabView} from 'react-native-tab-view';
import colors from '../../theme/colors';
import FeedContainer from './FeedContainer';
import RewardContainer from './RewardContainer';

class ProfileContainer extends PureComponent {
  state = {
    index: 0,
    routes: [
      {key: 'first', title: 'First', bgColor: 'white'},
      {key: 'second', title: 'Second', bgColor: colors.secondary},
    ],
  };

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
      <View style={{flex: 1}}>
        <ProfileHeader />
        <TabView
          navigationState={this.state}
          renderScene={SceneMap({
            first: FeedContainer,
            second: RewardContainer,
          })}
          indicatorStyle={{height: 0, width: 0, opacity: 0}}
          renderTabBar={this._renderTabBar}
          onIndexChange={index => this.setState({index})}
          initialLayout={{width: Dimensions.get('window').width}}
          style={styles.container}
        />
      </View>
    );
  }
}

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

ProfileContainer.propTypes = {};

export default ProfileContainer;
