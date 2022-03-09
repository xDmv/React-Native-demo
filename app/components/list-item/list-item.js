import React from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';

const GoalItem = props => {
  return (
    <TouchableOpacity>
      <View style={styles.listItem}>
        <Text style={styles.textelement}>{props.title}</Text>
        <Button
          style={styles.listItem}
          title="Delete"
          color="red"
          onPress={props.onDelete.bind(this, props.id)}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  textelement: {
    width: '80%',
  },
  btn: {
    paddingVertical: 10,
    borderRadius: 15,
  },
});

export default GoalItem;
