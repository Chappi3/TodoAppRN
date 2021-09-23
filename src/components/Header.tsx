import React, { useContext } from 'react'
import { View, Text, StyleSheet, Switch } from 'react-native'

import { ThemeContext } from '.././contexts/theme-context'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'

export default function header() {
  const { dark, theme, toggleDark } = useContext(ThemeContext)

  const styles = StyleSheet.create({
    header: {
      height: 40,
      paddingTop: 8,
      backgroundColor: `${theme.primary}`,
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
  })

  return (
    <View style={styles.header}>
      <View style={styles.titleContainer}>
        <Text style={[styles.title, { color: theme.color }]}>My Todos</Text>
      </View>
      <View style={styles.buttonContainer}>
        <FontAwesomeIcon
          style={styles.icon}
          icon={faLightbulb}
          color={theme.darkmodeIcon}
        />
        <Switch
          trackColor={{ false: theme.trackColor, true: theme.trackColor }}
          thumbColor={theme.thumbColor}
          onChange={toggleDark}
          value={dark}
        />
      </View>
    </View>
  )
}
