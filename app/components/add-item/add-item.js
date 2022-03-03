import React from 'react';
import type {Node} from 'react';
import {useColorScheme, View, TextInput, Button} from 'react-native';

const AddItem = ({title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={{padding: 25}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignContent: 'center',
        }}>
        <TextInput
          style={{
            borderColor: 'red',
            borderWidth: 2,
            backgroundColor: '#c2c2c2',
            width: '85%',
          }}
          placeholder="Input text"
        />
        <Button
          onPress={() => {
            this.isHungry = !this.isHungry;
            this.setState({isHungry: !this.isHungry});
          }}
          title="Add"
          color="green"
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignContent: 'center',
          }}
        />
      </View>
    </View>
  );
};

export default AddItem;
