import React from 'react';
import {StyleSheet, View} from 'react-native';
import Button from '../../ui-kit/Button';
import colors from '../../theme/colors';
import Input from '../../ui-kit/Input';
import {SCREEN_WIDTH} from '../../utils/screen.utils';

const AddReviewForm = () => (
  <View style={styles.container}>
    <Input value={''} title={'Email'} onChangeText={() => {}} />
    <Input value={''} title={'Amount'} onChangeText={() => {}} />
    <Input value={''} title={'Message'} onChangeText={() => {}} />
    <Button title={'Give'} extraStyles={styles.btn} />
  </View>
);

AddReviewForm.propTypes = {};
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 15,
  },
  btn: {
    justifyContent: 'center',
    backgroundColor: colors.primary,
    width: SCREEN_WIDTH * 0.9,
    alignSelf: 'center',
    marginTop: 10,
  },
});

export default AddReviewForm;
