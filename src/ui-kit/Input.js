import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import PropTypes from 'prop-types';
import colors from '../theme/colors';

function Input(props) {
  return (
    <View>
      <Text style={styles.label}>{props.title}</Text>
      <TextInput
        {...props}
        style={[styles.default, props.style]}
        value={props.value}
        keyboardType={props.keyboardType}
        onChangeText={props.onChangeText}
      />
    </View>
  );
}

Input.propTypes = {
  styles: PropTypes.object,
  onChangeText: PropTypes.func,
  value: PropTypes.string,
};
Input.defaultProps = {
  styles: {},
  onChangeText: () => {},
  value: 'TITLE PLEASE',
};

const styles = StyleSheet.create({
  default: {
    height: 55,
    color: colors.primary,
    borderColor: '#e6be8a',
    borderWidth: 1,
    justifyContent: 'flex-start',
    marginVertical: 10,
  },
  label: {
    color: '#e6be8a',
    fontWeight: '500',
    paddingVertical: 5,
  },
});

export default Input;
