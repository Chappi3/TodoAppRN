/**
 * Fix Completed feature
 *
 * @format
 */

import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';
import Sandbox from './components/Sandbox';

export interface ITodo {
  key: string;
  text: string;
  completed: boolean;
}

export default function App() {
  const [todos, setTodos] = useState<ITodo[]>([
    {text: 'buy coffee', key: '1', completed: false},
    {text: 'create an app', key: '2', completed: true},
    {text: 'create another one', key: '3', completed: false},
  ]);

  const pressRemoveHandler = (key: string): void => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key != key);
    });
  };

  const pressAddTodoHandler = (text: string): void => {
    setTodos(prevTodos => {
      return [
        {text: text, key: Math.random().toString(), completed: false},
        ...prevTodos,
      ];
    });
  };

  const pressCompleteHandler = (key: string): void => {
    setTodos(prevTodos => {
      const itemIndex = prevTodos.findIndex(item => item.key === key);
      let updatedTodos = prevTodos;
      updatedTodos[itemIndex] = {
        ...updatedTodos[itemIndex],
        completed: !updatedTodos[itemIndex].completed,
      };
      return [...updatedTodos];
    });
  };

  return (
    // <Sandbox />
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo pressAddTodoHandler={pressAddTodoHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({item}) => (
                <TodoItem
                  item={item}
                  pressRemoveHandler={pressRemoveHandler}
                  pressCompleteHandler={pressCompleteHandler}
                />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
});
