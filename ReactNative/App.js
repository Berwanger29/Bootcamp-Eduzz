import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import { useState } from 'react';

import profileImage from './assets/profile.jpg'

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <View style={styles.hedaer}>
          <Image source={profileImage} style={styles.profileImage} />
          <Text style={styles.nome}>Vinicius Berwanger</Text>
          <Text style={styles.profissao}>Desenvolvedor</Text>
          <View style={styles.icons}>
            <Text>GitHub</Text>
            <Text>Instagram</Text>
            <Text>Linkedin</Text>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50
  },
  hedaer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  profileImage: {
    width: 250,
    height: 250,
    borderRadius: 125
  },
  nome: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 25
  },
  profissao: {
    fontSize: 24,
    marginBottom: 10
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
