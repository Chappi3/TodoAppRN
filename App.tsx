/**
 * React Native Tutorial - Alerts
 * - https://www.youtube.com/watch?v=oVA9JgTTiT0
 *
 * @format
 */

import React, {useState} from 'react';
import {StyleSheet, View, FlatList, Alert} from 'react-native';
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
    if (text.length > 3) {
      setTodos(prevTodos => {
        return [{text: text, key: Math.random().toString()}, ...prevTodos];
      });
    } else {
      Alert.alert('OOPS!', 'Todos must be over 3 chars long', [
        {text: 'Understood', onPress: () => {}}, // onPress: () => console.log('alert closed')
      ]);
    }
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
