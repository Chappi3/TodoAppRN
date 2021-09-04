import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Button} from 'react-native';

type AddTodoParams = {
  submitHandler: any;
};

export default function AddTodo({submitHandler}: AddTodoParams) {
  const [text, setText] = useState('');

  const changeHandler = (value: string) => {
    setText(value);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="new todo..."
        onChangeText={changeHandler}
      />
      <Button
        onPress={() => submitHandler(text)}
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
