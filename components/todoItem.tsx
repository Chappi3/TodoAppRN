import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

// class Todo {
//   constructor(public text: string, public key: string) {
//     this.text = text;
//     this.key = key;
//   }
// }

export default function TodoItem({item, pressHandler}) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <Text style={styles.item}>{item.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
  },
});
