import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import colors from '../../../theme/colors';
import {PROFILE_URL} from 'src/constants';

function ProfileHeader() {
  return (
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
        <Text>Jane Doe</Text>
        <View style={styles.rewards}>
          <Text>{'Given 100$ /'}</Text>
          <Text>Given 100$</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.primary,
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
});

ProfileHeader.propTypes = {};

export default ProfileHeader;
