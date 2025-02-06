import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { GayaButton } from "../../src/components/GayaButton/GayaButton" 
import { GayaProvider } from "../../src/common/providers/GayaProvider" 
import {Image} from "../../src/components/Image/Image" 
import GayaImagem from "../../src/assets/images/nat_avatar.jpg"
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Result: Teste</Text>
      <GayaProvider brand="consultoriaDeBeleza_v2">

      <GayaButton onPress={() => ''} text="GaYa" iconName='filled-alert-info' />
        <View style={{width: 100, height: 100}}>
          <Image source={GayaImagem} variant="standard" fade="bottom" radius="circle"/>
        </View>
      </GayaProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10
  },
  imagem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
