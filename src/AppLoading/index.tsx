import {View , ActivityIndicator , StyleSheet} from 'react-native'


export function AppLoading(){
  return(
    <View style={styled.container}>
      <ActivityIndicator size={34}/>
    </View>
  )
}

const styled = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  }
})