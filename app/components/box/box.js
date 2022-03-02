import React from 'react';
import type {Node} from 'react';
import {Text, useColorScheme, View} from 'react-native';

const Box = ({title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View>
      <Text
        style={[
          {
            fontWeight: '800',
            fontSize: 12,
            alignItems: 'center',
            color: isDarkMode ? 'red' : '#000000',
          },
        ]}>
        {title}
      </Text>
    </View>
  );
};

export default Box;
