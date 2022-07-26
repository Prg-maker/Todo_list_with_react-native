import React from 'react';
import { Image, Text, View } from 'react-native';
import { ModalViewTask } from '../../components/ModalViewTask';
import { styles } from './styles';
export function Tasks() {


  return (
    <View style={styles.container}>
      

      <View style={styles.header}>
        <Image  style={styles.avatar} source={{uri:'https://github.com/prg-maker.png'}}/>
        <Text style={styles.name}>Welcome Daniel</Text>
      </View>

      <ModalViewTask/>

    </View>
  );
}