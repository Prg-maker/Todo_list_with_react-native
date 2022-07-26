import React from 'react';
import { Button, Modal, ModalProps , Text, TouchableOpacity, View} from 'react-native';
import CircleX from '../../assets/CircleX.svg'
import { styles } from './styles';

type Props = ModalProps & {

}


export function ModalViewTask({...rest}:Props) {
  return (
    <Modal transparent  animationType="slide" statusBarTranslucent {...rest}>
      <View style={styles.container}>
        <Text style={styles.title}>Tasks List</Text>
        <View style={styles.contentTask}>
         
          <View style={styles.header}>

            <Text style={styles.subTitle}>Daily Tasks</Text>

            <TouchableOpacity>
              <CircleX
                width={30}
                height={30}
              />
            </TouchableOpacity>

          </View>


          <View style={styles.containerTask}>
            
          </View>

        </View>
      </View>
    </Modal>
  );
}