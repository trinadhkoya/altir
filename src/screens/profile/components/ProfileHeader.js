import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {PROFILE_URL, REWARDS_GIVEN, REWARDS_TAKEN} from '../../../constants';
import colors from '../../../theme/colors';

const ProfileHeader = () => (
  <View style={styles.container}>
    <View style={styles.imgSec}>
      <Image
        style={styles.img}
        source={{
          uri: PROFILE_URL,
        }}
      />
    </View>
    <View style={styles.profile}>
      <Text style={styles.nameStyle}>Jane Doe</Text>
      <View style={styles.rewards}>
        <Text>{`Given $${REWARDS_GIVEN}/ `}</Text>
        <Text>{`Received $${REWARDS_TAKEN}`}</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.secondary,
    paddingVertical: 15,
  },
  imgSec: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: 'center',
  },
  profile: {
    flex: 0.7,
    justifyContent: 'center',
  },
  rewards: {
    flexDirection: 'row',
  },
  nameStyle: {
    fontWeight: 'bold',
  },
});

export default ProfileHeader;
