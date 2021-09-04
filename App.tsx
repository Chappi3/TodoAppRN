/**
 * React Native Tutorial - Todo App (part 3)
 * - https://www.youtube.com/watch?v=LH_SoXiu_Hk
 *
 * @format
 */

import React, {useState} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';

export interface ITodo {
  key: string;
  text: string;
}

export default function App() {
  const [todos, setTodos] = useState<ITodo[]>([
    {text: 'buy coffee', key: '1'},
    {text: 'create an app', key: '2'},
    {text: 'create another one', key: '3'},
  ]);

  const pressHandler = (key: string): void => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key != key);
    });
  };

  const submitHandler = (text: string): void => {
    setTodos(prevTodos => {
      return [{text: text, key: Math.random().toString()}, ...prevTodos];
    });
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({item}) => (
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
