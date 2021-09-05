import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faSquare,
  faCheckSquare,
  faTrashAlt,
  faEdit,
} from '@fortawesome/free-regular-svg-icons';
import {IconDefinition} from '@fortawesome/fontawesome-common-types';
import {ITodo} from '../App';

type TodoItemParams = {
  item: ITodo;
  pressRemoveHandler: any;
  pressCompleteHandler: any;
};

export default function TodoItem({
  item,
  pressRemoveHandler,
  pressCompleteHandler,
}: TodoItemParams) {
  let itemCompleted = (): IconDefinition => {
    if (item.completed) {
      return faCheckSquare;
    } else {
      return faSquare;
    }
  };

  return (
    <TouchableOpacity>
      <View style={styles.item}>
        <Text style={styles.itemText}>{item.text}</Text>
        <View style={styles.itemIcons}>
          <Pressable onPress={() => pressCompleteHandler(item.key)}>
            <FontAwesomeIcon
              style={styles.itemIcon}
              icon={itemCompleted()}
              size={18}
              color={'black'}
            />
          </Pressable>
          {/* <Pressable onPress={() => pressHandler(item.key)}>
            <FontAwesomeIcon
              style={styles.itemIcon}
              icon={faEdit}
              size={18}
              color={'skyblue'}
            />
          </Pressable> */}
          <Pressable onPress={() => pressRemoveHandler(item.key)}>
            <FontAwesomeIcon
              style={styles.itemIcon}
              icon={faTrashAlt}
              size={18}
              color={'red'}
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
    borderColor: 'coral',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f4f4f4',
  },
  itemText: {
    textDecorationLine: 'line-through',
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
