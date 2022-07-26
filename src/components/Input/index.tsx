import { TextInput , TextInputProps , StyleSheet} from "react-native";



export  function Input({...rest}: TextInputProps){
  return(
    <TextInput style={styles.input} placeholderTextColor="#000" {...rest}>
      
    </TextInput>
  )
}


const styles = StyleSheet.create({
  input:{
    width: '100%',
    height: 50,
    borderRadius:50,
    paddingLeft:21,
    marginBottom:10,
    backgroundColor: 'rgba(255, 255, 255, 0.58)',
    borderWidth: 2  ,
    borderColor: '#000'
  }
})