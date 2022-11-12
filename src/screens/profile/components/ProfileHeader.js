import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';

const ProfileHeader = ({data}) => (
  <View style={styles.container}>
    <View style={styles.imgSec}>
      <Image
        style={styles.img}
        source={{
          uri: data?.url,
        }}
      />
    </View>
    <View style={styles.profile}>
      <Text style={styles.nameStyle}>{data?.name}</Text>
      <View style={styles.rewards}>
        <Text>{`Given $${data?.rewardInfo?.given}/ `}</Text>
        <Text>{`Received $${data?.rewardInfo?.taken}`}</Text>
      </View>
    </View>
  </View>
);

ProfileHeader.defaultProps = {
  data: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
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
