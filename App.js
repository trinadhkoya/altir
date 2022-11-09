import * as React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import colors from './src/theme/colors';
import ProfileContainer from './src/screens/profile/ProfileContainer';

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle={'dark-content'} translucent={false} />
        <ProfileContainer />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
});
