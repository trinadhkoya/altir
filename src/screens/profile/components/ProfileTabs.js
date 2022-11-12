import React, {Component} from 'react';
import {SceneMap, TabView} from 'react-native-tab-view';
import FeedContainer from '../FeedContainer';
import RewardContainer from '../RewardContainer';
import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../../theme/colors';

class ProfileTabs extends Component<{
  navigationState: Readonly<S>,
  renderTabBar: props => any,
  onIndexChange: index => void,
}> {
  render() {
    return (
      <TabView
        navigationState={this.props.navigationState}
        renderScene={SceneMap({
          first: FeedContainer,
          second: RewardContainer,
        })}
        indicatorStyle={styles.indicatorStyle}
        renderTabBar={this.props.renderTabBar}
        onIndexChange={this.props.onIndexChange}
        initialLayout={{width: Dimensions.get('window').width}}
        style={styles.container}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});
export default ProfileTabs;
