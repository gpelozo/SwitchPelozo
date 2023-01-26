import { StyleSheet, TextInput } from 'react-native'
import React from 'react'

const Input = ({ style, ...restProps}) => {
  return 
    <TextInput 
    blurOnSubmit
      autoCapitalization="none"
      autoCorrect={false}
      keyboardType="numeric"
      maxLength={2}
    style={{...styles.input, ...newStyle}}{...restProps}/> //restProps importa el resto de las props
}

export default Input

const styles = StyleSheet.create({
    input: {
        height: 30,
        borderBottomWidth: 2,
        borderBottomColor: "black",
        marginVertical: 10,
        width: 50,
    }
})