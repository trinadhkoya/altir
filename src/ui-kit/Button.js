import PropTypes from 'prop-types';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import colors from '../theme/colors';
import {SCREEN_WIDTH} from '../utils/screen.utils';

const Button = ({onPress, title, extraStyles}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[styles.container, extraStyles]}>
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  extraStyles: PropTypes.object,
};

Button.defaultProps = {
  onPress: () => {},
  extraStyles: {},
};

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    height: 40,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    borderRadius: 30,
  },
  btnText: {
    color: colors.btnText,
    alignSelf: 'center',
    fontWeight: '500',
    fontSize: 16,
  },
});
export default Button;
