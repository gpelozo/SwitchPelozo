import { Button, StyleSheet, Text, View } from 'react-native'
import React, {useState, useEffect} from 'react'
import Card from '../components/Card'

import colors from '../constants/colors'

const GameScreen = ({ handleResult }) => {
    const [currentGuess, setCurrentGuess] = useState()

    useEffect( () => {
        setCurrentGuess(Math.floor(Math.random()*(99-1) + 1))
    }, [] )


  return (
    <View style={styles.container}>
      <Text style={styles.textColor}>Opponents Guess is:</Text>
      <Text style={styles.textColor}>{currentGuess}</Text>
      <Card newStyles={styles.buttonContainer}>
        <Button title="Lower" onPress={ () => handleResult("lower", currentGuess)} />
        <Button title="Higher" onPress={ () => handleResult("higher", currentGuess) } />
      </Card>
    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: "center",
        backgroundColor: colors.primary,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
        width: "80%",
    },
})