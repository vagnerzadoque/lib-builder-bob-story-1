import { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Result: Teste</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
