import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Button,
  Alert,
  Pressable,
  Text,
} from 'react-native';
import {colors} from '../styles/Colors';

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
    <View
      style={{
        flexDirection: 'column',
      }}>
      <TextInput
        style={styles.input}
        placeholder="New todo..."
        onChangeText={setText}
        value={text}
        placeholderTextColor={colors.fontColorLight}
      />
      <Button
        onPress={() => pressSubmitTodoHandler(text)}
        title="add todo"
        color={colors.primary}
      />
      {/* <View style={{backgroundColor: '#d4d', flexDirection: 'row'}}>
        <Pressable onPress={() => pressSubmitTodoHandler(text)}>
          <View style={{backgroundColor: `${colors.primary}`, flex: 1}}>
            <Text style={{color: colors.fontColorLight}}>Add todo</Text>
          </View>
        </Pressable>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 2,
    borderBottomColor: `${colors.primary}`,
    color: `${colors.fontColorLight}`,
  },
});
