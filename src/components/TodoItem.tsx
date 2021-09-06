import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faTrashAlt, faEdit} from '@fortawesome/free-regular-svg-icons';
import {ITheme, ITodo} from '../App';
import {colors} from '../styles/Colors';

type TodoItemParams = {
  item: ITodo;
  pressRemoveHandler: (key: string) => void;
  pressCompleteHandler: (key: string) => void;
  theme: ITheme;
};

export default function TodoItem({
  item,
  pressRemoveHandler,
  pressCompleteHandler,
  theme,
}: TodoItemParams) {
  return (
    <TouchableOpacity onPress={() => pressCompleteHandler(item.key)}>
      <View style={[styles.item, {backgroundColor: theme.backgroundCard}]}>
        <Text
          style={[
            styles.itemText,
            {
              textDecorationLine: item.completed ? 'line-through' : 'none',
              color: item.completed ? theme.color : theme.colorCompleted,
            },
          ]}>
          {item.text}
        </Text>
        <View style={styles.itemIcons}>
          <Pressable onPress={() => console.warn('edit pressed', item.key)}>
            <FontAwesomeIcon
              style={styles.itemIcon}
              icon={faEdit}
              size={18}
              color={colors.editIcon}
            />
          </Pressable>
          <Pressable onPress={() => pressRemoveHandler(item.key)}>
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
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: `${colors.primary}`,
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
});
