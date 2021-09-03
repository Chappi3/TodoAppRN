/**
 * React Native Tutorial - Todo App (part 2)
 * - https://www.youtube.com/watch?v=SGEitne8N-Q
 *
 * @format
 */

import React, {useState} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';

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

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        {/* to form */}
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
