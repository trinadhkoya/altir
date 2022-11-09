import {StatusBar, StyleSheet, View} from 'react-native';
import React from 'react';
import colors from '../../theme/colors';

const RewardContainer = () => (
  <View style={[styles.scene, {backgroundColor: '#ffffff'}]} />
);

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
