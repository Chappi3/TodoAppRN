import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Button, Alert} from 'react-native';

type AddTodoParams = {
  pressAddTodoHandler: any;
};

export default function AddTodo({pressAddTodoHandler}: AddTodoParams) {
  const [text, setText] = useState('');

  const pressSubmitTodoHandler = (input: string): void => {
    if (text.length > 3) {
      pressAddTodoHandler(input);
      setText('');
    } else {
      Alert.alert('OOPS!', 'Todos must be over 3 chars long', [
        {text: 'Understood', onPress: () => {}},
      ]);
    }
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="New todo..."
        onChangeText={setText}
        value={text}
      />
      <Button
        onPress={() => pressSubmitTodoHandler(text)}
        title="add todo"
        color="coral"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});
