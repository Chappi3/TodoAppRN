import React, { useContext } from 'react'
import {
  StyleSheet,
  View,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
  StatusBar,
} from 'react-native'
import 'react-native-get-random-values'

import { ThemeContext } from './contexts/theme-context'

import Header from './components/Header'
import TodoItem from './components/TodoItem'
import AddTodo from './components/AddTodo'
import useConnect from './hooks/useConnect'

export default function App() {
  const { theme } = useContext(ThemeContext)
  const todos = useConnect((state) => {
    return state.todos.todos
  })

  return (
    <>
      <StatusBar backgroundColor={theme.primary} barStyle={theme.statusBar} />
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={{ flex: 1, backgroundColor: theme.backgroundColor }}>
          <Header />
          <View style={styles.content}>
            <AddTodo />
            <View style={styles.list}>
              <FlatList
                data={todos}
                renderItem={({ item }) => <TodoItem item={item} />}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  )
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 20,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
})
