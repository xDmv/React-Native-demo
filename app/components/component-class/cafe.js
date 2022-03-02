import React, {Component} from 'react';
import {Button, Text, View, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const isDark = useColorScheme === 'dark';

class Cat extends Component {
  state = {
    isHungry: true,
  };

  render() {
    return (
      <View
        style={[
          {
            backgroundColor: isDark ? Colors.lighter : Colors.darker,
          },
        ]}>
        <Text style={[{color: isDark ? 'cornflowerblue' : '#f2f2f2'}]}>
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
        <Cat name="Sony" />
        <Cat name="Helen" />
      </>
    );
  }
}

export default Cafe;
