import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// import TitleText from './TitleText';
import Colors from '../constants/colors';

const Header = props => {
  const colorStyle = {
    color: props.isDark ? '#ffffff' : '#000000',
    fontSize: 18,
  };

  return (
    <View style={{colorStyle, ...styles.header}}>
      <Text style={colorStyle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Header;
