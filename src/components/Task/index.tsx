import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import theme from '../../theme';
import { CheckBox } from '../CheckBox';

interface Props{
  title: string;

}


export function Task({title}:Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.titleTask}>{title}.</Text>
      <CheckBox/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom: 21
  },
  titleTask:{
    fontFamily: theme.fonts.fontsMedium
  }
})