/**
 * @format
 */

import React, { useContext, useState } from 'react'
import {
  StyleSheet,
  View,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
  StatusBar,
  StatusBarStyle,
} from 'react-native'

import Header from './components/Header'
import TodoItem from './components/TodoItem'
import AddTodo from './components/AddTodo'
import { ThemeContext } from './contexts/theme-context'
import { colors } from './styles/Colors'

export interface ITodo {
  key: string
  text: string
  completed: boolean
}

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
  const [todos, setTodos] = useState<ITodo[]>([
    { text: 'buy coffee', key: '1', completed: false },
    { text: 'create an app', key: '2', completed: true },
    { text: 'create another one', key: '3', completed: false },
  ])
  const { dark, theme, toggleDark } = useContext(ThemeContext)

  const pressRemoveHandler = (key: string): void => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key)
    })
  }

  const pressAddTodoHandler = (text: string): void => {
    setTodos((prevTodos) => {
      return [
        { text: text, key: Math.random().toString(), completed: false },
        ...prevTodos,
      ]
    })
  }

  const pressCompleteHandler = (key: string): void => {
    setTodos((prevTodos) => {
      const itemIndex = prevTodos.findIndex((item) => item.key === key)
      let updatedTodos = prevTodos
      updatedTodos[itemIndex] = {
        ...updatedTodos[itemIndex],
        completed: !updatedTodos[itemIndex].completed,
      }
      return [...updatedTodos]
    })
  }

  const pressEditHandler = (key: string, text: string): void => {
    setTodos((prevTodos) => {
      const itemIndex = prevTodos.findIndex((item) => item.key === key)
      let updatedTodos = prevTodos
      updatedTodos[itemIndex] = {
        ...updatedTodos[itemIndex],
        text: text,
      }
      return [...updatedTodos]
    })
  }

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
            <AddTodo pressAddTodoHandler={pressAddTodoHandler} theme={theme} />
            <View style={styles.list}>
              <FlatList
                data={todos}
                renderItem={({ item }) => (
                  <TodoItem
                    item={item}
                    theme={theme}
                    pressRemoveHandler={pressRemoveHandler}
                    pressCompleteHandler={pressCompleteHandler}
                    pressEditHandler={pressEditHandler}
                  />
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
