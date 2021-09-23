import React, { useState, FunctionComponent, useContext } from 'react'
import {
  Button,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'

import { useDispatch } from 'react-redux'
import { Todo } from '../redux/todo/reducer'
import { actions } from '../redux'

import { ThemeContext } from '../contexts/theme-context'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTrashAlt, faEdit } from '@fortawesome/free-regular-svg-icons'
import { colors } from '../styles/Colors'

type TodoItemParams = {
  item: Todo
}

type Params = TodoItemParams

export const TodoItem: FunctionComponent<Params> = ({ item }) => {
  const dispatch = useDispatch()

  const { theme } = useContext(ThemeContext)

  const [editModal, setEditModal] = useState(false)
  const [editText, setEditText] = useState(item.text)

  const pressCompleteHandler = () => {
    dispatch(actions.todos.todoComplete(item.id))
  }

  const pressRemoveHandler = () => {
    dispatch(actions.todos.todoRemove(item.id))
  }

  const submitEdit = () => {
    dispatch(actions.todos.todoEdit(item.id, editText))
    setEditModal(false)
  }

  const styles = StyleSheet.create({
    item: {
      padding: 16,
      marginTop: 16,
      borderColor: `${theme.primary}`,
      borderWidth: 1,
      borderStyle: 'solid',
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    itemText: {
      flex: 16,
    },
    itemIcons: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      marginLeft: 5,
    },
    itemIcon: {
      margin: 5,
    },
    editModal: {
      marginTop: 70,
      alignSelf: 'center',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 25,
      width: 380,
      height: 300,
      borderStyle: 'solid',
      borderColor: `${theme.primary}`,
      borderWidth: 2,
      borderRadius: 18,
    },
    modalInput: {
      width: 200,
      paddingHorizontal: 8,
      paddingVertical: 6,
      borderBottomWidth: 2,
      borderBottomColor: `${theme.primary}`,
    },
  })

  return (
    <TouchableOpacity onPress={pressCompleteHandler}>
      <View style={[styles.item, { backgroundColor: theme.backgroundCard }]}>
        <Text
          style={[
            styles.itemText,
            {
              textDecorationLine: item.completed ? 'line-through' : 'none',
              color: item.completed ? theme.colorCompleted : theme.color,
            },
          ]}
        >
          {item.text}
        </Text>
        <View style={styles.itemIcons}>
          <Pressable onPress={() => setEditModal(true)}>
            <FontAwesomeIcon
              style={styles.itemIcon}
              icon={faEdit}
              size={18}
              color={colors.editIcon}
            />
            {editModal && (
              <Modal
                visible={editModal}
                onRequestClose={() => setEditModal(false)}
                transparent
              >
                <View
                  style={[
                    styles.editModal,
                    {
                      backgroundColor: theme.backgroundColor,
                    },
                  ]}
                >
                  <Text style={{ color: theme.color, fontSize: 24 }}>
                    Edit todo
                  </Text>
                  <TextInput
                    style={[styles.modalInput, { color: theme.color }]}
                    onChangeText={setEditText}
                    value={editText}
                    placeholder={item.text}
                    placeholderTextColor={theme.color}
                  />
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: 25,
                    }}
                  >
                    <View
                      style={{
                        marginHorizontal: 20,
                        marginBottom: 20,
                        width: 100,
                      }}
                    >
                      <Button
                        title="Cancel"
                        onPress={() => setEditModal(false)}
                        color={theme.primary}
                      />
                    </View>
                    <View
                      style={{
                        marginHorizontal: 20,
                        marginBottom: 20,
                        width: 100,
                      }}
                    >
                      <Button
                        title="Edit"
                        onPress={submitEdit}
                        color={theme.primary}
                      />
                    </View>
                  </View>
                </View>
              </Modal>
            )}
          </Pressable>
          <Pressable onPress={pressRemoveHandler}>
            <FontAwesomeIcon
              style={styles.itemIcon}
              icon={faTrashAlt}
              size={18}
              color={colors.removeIcon}
            />
          </Pressable>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default TodoItem
