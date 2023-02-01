import { StyleSheet, Text, View, Button, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, ScrollView, Dimensions } from 'react-native'
import React, { useState } from 'react'
import Card from '../components/Card'
import colors from "../constants/colors"
import Input from "../components/Input"

const width = Dimensions.get("window").width
const height = Dimensions.get("window").height 

const StartGameScreen = () => {
    const [value, setValue] = useState("")
    const [confirmed, setConfirmed] = useState(false)
    const [selectedNumber, setSelectedNumber] = useState("")

    const handleConfirmation = () => {
        const newValue = parseInt(value)
        if (newValue === NaN || newValue <= 0 || newValue > 99) return

        setConfirmed(true)
        setSelectedNumber(newValue)
        setValue("")
        Keyboard.dismiss()
    }

    const handleInput = text => {
        console.log(text)
        setValue(text.replace(/[^0-9]/g, ""))
    }

    const handleResetInput = () => {
        setValue("")
        setConfirmed(false)
    }


  return (
    <KeyboardAvoidingView style={{flex:1}} behavior={"ios" === "ios" ? "padding" : "height"}>
    <ScrollView styles={{ backgroundColor: colors.primary}}>
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View style={styles.container}>
      <Text style={styles.title}>Start Game</Text>
      <Card>
        <Text style={styles.subtitle}>Choose a Number</Text>
        <Input blurOnSubmit autoCapitalize="none" autoCorrect={false} keyboardType="numeric" maxLength={2} value={value} onChangeText={handleInput}/>
        <Card style={styles.buttonContainer}>
            <View style={styles.cleanButton}>
            <Button title="Clean" onPress={() => console.log("limpiar")} color={"#7D7D8B"}/>
            </View>
            <View>
            <Button title= "Confirm" onPress={() => console.log("confirmar")} color={"#fff"}/>
            </View>
        </Card>
      </Card>
      {confirmed && (
        <Card newStyles={styles.selectedCard}>
        <Text style={{color: "white"}}>Your Number Is:</Text>
        <Text style={styles.selectedNumber}>{selectedNumber}</Text>
        <View style={styles.confirmStyle}>
            <Button title="Start game" color={"#fff"} onPress= {() => onStartGame(selectedNumber)}/>
        </View>
        </Card>
      )}
    </View>
    </TouchableWithoutFeedback>
    </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default StartGameScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: "center",
        backgroundColor: colors.primary,
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
        color: "white", 
    },
    subtitle: {
        color: "white",
    },
    buttonContainer: {
        flexDirection: "row",
        width: width < 400 ? "100%" : 500,
        justifyContent: "space-between",
        paddingHorizontal: 15,
        marginTop: 20,
    },
    cleanButton: {
        width: 100,
        backgroundColor: colors.disableColor,
        borderRadius: 10,
    },
    confirmStyle: {
        width: 100,
        backgroundColor: colors.actionColor,
        borderRadius: 10,
    },
    selectedCard: {
        marginTop: 50,
        width: "50%",
    },
    selectedNumber: {
        color: "white", 
        marginVertical: 20, 
        fontSize: 35,
    },
})