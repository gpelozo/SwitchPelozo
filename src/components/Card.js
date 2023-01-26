import { StyleSheet, View, Dimensions } from 'react-native'
import React from 'react'
import colors from '../constants/colors'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const Card = ({ newStyles, children }) => {
  return <View style={{...styles.inputContainer, ...newStyles }}>{children}</View>
}

export default Card

const styles = StyleSheet.create({
    container: {
        width:300,
        maxWidth: "80%",
        padding: 20,
        alignItems: "center",
        shadowColor: "black",
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 10,
        shadowOpacity: 0.3,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: colors.secondary,
    }
})