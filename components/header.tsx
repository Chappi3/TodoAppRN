import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../styles/Colors';

export default function header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Todos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 40,
    paddingTop: 8,
    backgroundColor: `${colors.primary}`,
  },
  title: {
    textAlign: 'center',
    color: `${colors.fontColorLight}`,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
