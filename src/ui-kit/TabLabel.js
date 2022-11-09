import React from 'react';
import {StyleSheet, Text} from 'react-native';
import PropTypes from 'prop-types';
import colors from '../theme/colors';

const TabLabel = props => {
  const {label, style} = props;
  return <Text style={[styles.label, style]}>{label}</Text>;
};

TabLabel.propTypes = {
  label: PropTypes.string,
  isSpecial: PropTypes.bool,
  isSelected: PropTypes.bool,
  isLoading: PropTypes.bool,
  shouldShowHorizontalRule: PropTypes.bool,
  selectedColor: PropTypes.any,
  defaultColor: PropTypes.any,
};

TabLabel.defaultProps = {
  label: 'TITLE PLEASE',
  isSpecial: false,
  isSelected: false,
  isLoading: false,
  shouldShowHorizontalRule: false,
  selectedColor: colors.black,
  defaultColor: colors.secondary,
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 15,
    textAlign: 'center',
    textTransform: 'capitalize',
    fontWeight: '400',
  },
  iconCustom: {
    marginBottom: 6,
  },
  horizontalRule: {
    position: 'absolute',
    height: 1,
    top: 12,
    left: 0,
    width: '100%',
  },
});
export default TabLabel;
