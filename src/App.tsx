/**
 * @format
 */
import React, { useContext } from 'react'
import {
  StyleSheet,
  View,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
  StatusBar,
  StatusBarStyle,
} from 'react-native'
import 'react-native-get-random-values'

import { ThemeContext } from './contexts/theme-context'

import Header from './components/Header'
import TodoItem from './components/TodoItem'
import AddTodo from './components/AddTodo'
import useConnect from './hooks/useConnect'

export interface ITheme {
  primary: string
  backgroundColor: string
  backgroundCard: string
  color: string
  colorCompleted: string
  darkmodeIcon: string
  trackColor: string
  thumbColor: string
  statusBar: StatusBarStyle
}

export default function App() {
  const { dark, theme, toggleDark } = useContext(ThemeContext)
  const todos = useConnect((state) => {
    return state.todos.todos
  })

  return (
    <>
      <StatusBar backgroundColor={theme.primary} barStyle={theme.statusBar} />
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss()
        }}
      >
        <View style={{ flex: 1, backgroundColor: theme.backgroundColor }}>
          <Header dark={dark} toggleDark={toggleDark} theme={theme} />
          <View style={styles.content}>
            <AddTodo theme={theme} />
            <View style={styles.list}>
              <FlatList
                data={todos}
                renderItem={({ item }) => (
                  <TodoItem item={item} theme={theme} />
                )}
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
