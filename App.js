/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import type {Node} from 'react';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, StatusBar, useColorScheme, View} from 'react-native';
import ProfileContainer from './src/screens/profile/ProfileContainer';
import {TabBar} from './src/ui-kit/TabBar';
import colors from './src/theme/colors';

const App: () => Node = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {}, [isFlipped]);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.secondary}}>
      <StatusBar barStyle={'light-content'} />
      <>
        <ProfileContainer />

      </>
      <View
        style={{
          backgroundColor: 'white',
          height: '80%',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}>
        <TabBar
          onPressSegmented={() => {}}
          tab1Label={'Feed'}
          tab2Label={'My Rewards'}
          tabLength={2}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
