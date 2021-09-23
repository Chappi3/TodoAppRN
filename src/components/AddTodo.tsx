import React, { useState, useContext } from 'react'
import {
  View,
  TextInput,
  StyleSheet,
  Button,
  Alert,
  Pressable,
  Text,
} from 'react-native'

import { useDispatch } from 'react-redux'
import { actions } from '../redux'

import { ThemeContext } from '../contexts/theme-context'

type AddTodoParams = {}

export default function AddTodo({}: AddTodoParams) {
  const dispatch = useDispatch()

  const { theme } = useContext(ThemeContext)

  const [text, setText] = useState('')

  const pressSubmitTodoHandler = (input: string): void => {
    if (text.length > 3) {
      dispatch(actions.todos.todoAdd(input))
      setText('')
    } else {
      Alert.alert('OOPS!', 'Todos must be over 3 chars long', [
        { text: 'Understood', onPress: () => {} },
      ])
    }
  }

  const styles = StyleSheet.create({
    input: {
      marginBottom: 10,
      paddingHorizontal: 8,
      paddingVertical: 6,
      borderBottomWidth: 2,
      borderBottomColor: `${theme.primary}`,
    },
  })

  return (
    <View
      style={{
        flexDirection: 'column',
      }}
    >
      <TextInput
        style={[styles.input, { color: theme.color }]}
        placeholder="New todo..."
        onChangeText={setText}
        value={text}
        placeholderTextColor={theme.color}
      />
      <Button
        onPress={() => pressSubmitTodoHandler(text)}
        title="add todo"
        color={theme.primary}
      />
      {/* TODO: Change from normal button to change font color */}
      {/* <View style={{flex: 1}}>
        <Pressable onPress={() => pressSubmitTodoHandler(text)}>
          <View
            style={{
              backgroundColor: `${theme.primary}`,
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: theme.color, fontSize: 16}}>Add todo</Text>
          </View>
        </Pressable>
      </View> */}
    </View>
  )
}
