import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import colors from '../theme/colors';
import TabLabel from './TabLabel';

const TabBar = props => {
  const [activeIndex, setActiveIndex] = useState(0);
  const {tab1Label, tab2Label} = props;

  useEffect(() => {}, [activeIndex]);

  function onPressSegmented(index) {
    setActiveIndex(index);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => onPressSegmented(0)}
        style={[
          styles.tabStyle,
          activeIndex === 0 ? styles.active : styles.inActive,
        ]}>
        <TabLabel
          isSelected={activeIndex === 0}
          label={tab1Label}
          style={styles.tabText}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => onPressSegmented(1)}
        style={[
          styles.tabStyle,
          activeIndex === 1 ? styles.active : styles.inActive,
        ]}>
        <TabLabel
          isSelected={activeIndex === 1}
          label={tab2Label}
          style={styles.tabText}
        />
      </TouchableOpacity>
    </View>
  );
};

TabBar.propTypes = {
  onPressSegmented: PropTypes.func,
  tab1Label: PropTypes.string,
  tab2Label: PropTypes.string,
};

TabBar.defaultProps = {
  tab1Label: '',
  tab2Label: '',
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  tabStyle: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    borderTopEndRadius: 10,
  },
  tabText: {
    fontSize: 16,
  },
  inActive: {
    backgroundColor: colors.tabBgInActiveColor,
  },
  active: {
    backgroundColor: colors.primary,
  },
});

export {TabBar};
