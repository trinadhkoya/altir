import React, {Component} from 'react';
import {Button, Easing, StyleSheet, Text, View} from 'react-native';
import {TabBar, TabBarItem} from 'react-native-tab-view';
import AddReviewForm from './AddReviewForm';
import ProfileHeader from './components/ProfileHeader';
import {me} from '../../constants';
import FlipComponent from '../../ui-kit/FlipView';
import colors from '../../theme/colors';
import ProfileTabs from './components/ProfileTabs';

const routes = [
  {key: 'first', title: 'Feed'},
  {key: 'second', title: 'My Reward'},
];

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false,
      index: 0,
      routes: routes,
    };
  }

  _renderLabel = ({route}) => {
    return <Text>{route.title}</Text>;
  };

  _renderTabBarItem = props => (
    <TabBarItem {...props} renderLabel={this._renderLabel} />
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

  onPressAdd = () => {
    this.setState({isFlipped: !this.state.isFlipped});
  };

  render() {
    const {isFlipped} = this.state;

    return (
      <View style={styles.container}>
        <ProfileHeader data={me} />
        <FlipComponent
          style={styles.tabStyle}
          front={
            <ProfileTabs
              navigationState={this.state}
              renderTabBar={this._renderTabBar}
              onIndexChange={index => this.setState({index})}
            />
          }
          back={<AddReviewForm />}
          isFlipped={isFlipped}
          flipAxis="y"
          flipEasing={Easing.out(Easing.ease)}
          flipDuration={500}
          perspective={1000}
        />

        <View style={styles.floatingButton}>
          <Button
            onPress={this.onPressAdd}
            title={isFlipped ? 'X' : '+'}
            color={colors.primary}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
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

export default Example;
