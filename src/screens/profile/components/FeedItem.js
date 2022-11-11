import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import colors from '../../../theme/colors';

const FeedItem = props => {
  const {data, isSelf} = props;
  let rewardText;
  if (isSelf) {
    rewardText = `rewarded by ${data.rewardedBy}`;
  } else {
    rewardText = `${data.rewardedBy} rewarded by ${data.rewardee.name}`;
  }

  return (
    <View style={styles.container}>
      <View style={styles.imgSec}>
        <Image
          source={{uri: data.url}}
          resizeMode={'contain'}
          style={styles.imageView}
        />
      </View>
      <View style={styles.rewardSec}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.rewardByTextView}>{rewardText}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
  },
  imgSec: {
    flex: 0.3,
    justifyContent: 'center',
  },
  rewardSec: {
    flex: 0.7,
    padding: 10,
  },
  imageView: {
    height: 50,
    width: 50,
    borderRadius: 25,
    alignSelf: 'center',
  },
  rewardByTextView: {
    color: colors.black,
    opacity: 0.5,
    paddingVertical: 10,
    fontSize: 12,
  },
  title: {
    fontWeight: '500',
    paddingTop: 5,
  },
});
FeedItem.propTypes = {
  data: PropTypes.object.isRequired,
  isSelf: PropTypes.bool,
};

FeedItem.defaultProps = {
  isSelf: false,
};
export default FeedItem;
