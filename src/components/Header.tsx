import React from 'react';
import {View, Text, StyleSheet, Pressable, Switch} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faLightbulb} from '@fortawesome/free-solid-svg-icons';
import {colors} from '../styles/Colors';
import {ITheme} from '../App';

type HeaderParams = {
  dark: boolean;
  toggleDark: () => void;
  theme: ITheme;
};

export default function header({dark, toggleDark, theme}: HeaderParams) {
  return (
    <View style={styles.header}>
      <View style={styles.titleContainer}>
        <Text style={[styles.title, {color: theme.color}]}>My Todos</Text>
      </View>
      <View style={styles.buttonContainer}>
        <FontAwesomeIcon
          style={styles.icon}
          icon={faLightbulb}
          color={theme.darkmodeIcon}
        />
        <Switch
          trackColor={{false: '#313131', true: '#ccc'}}
          thumbColor={dark ? '#313131' : '#f4f3f4'}
          onChange={toggleDark}
          value={dark}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 40,
    paddingTop: 8,
    backgroundColor: `${colors.primary}`,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  titleContainer: {
    flex: 2,
    marginStart: 20,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    marginEnd: 20,
    marginLeft: 20,
    position: 'relative',
  },
  title: {
    textAlign: 'right',
    fontSize: 20,
    fontWeight: 'bold',
  },
  icon: {
    alignSelf: 'center',
    position: 'absolute',
  },
});
