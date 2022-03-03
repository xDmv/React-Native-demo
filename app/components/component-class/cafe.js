import React, {Component} from 'react';
import {Button, Text, View, useColorScheme} from 'react-native';

class Cat extends Component {
  state = {
    isHungry: true,
  };
  Sos = () => {
    return useColorScheme === 'dark';
  };

  render() {
    return (
      <View>
        <Text
          style={[
            {
              color: this.isHungry ? '#0F9F00' : '#000',
              fontSize: 16,
            },
          ]}>
          I am {this.props.name}, and I am
          {this.state.isHungry ? ' hungry' : ' full'}!
        </Text>
        <Button
          onPress={() => {
            this.isHungry = !this.isHungry;
            this.setState({isHungry: !this.isHungry});
          }}
          title={
            this.state.isHungry ? 'Pour me some meat, please!' : 'Thank you!'
          }
        />
      </View>
    );
  }
}

class Cafe extends Component {
  render() {
    return (
      <>
        {/*<Cat name="Sony" />*/}
        <Cat name="Helen" />
      </>
    );
  }
}

export default Cafe;
