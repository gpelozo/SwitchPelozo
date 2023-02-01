import { useState } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';

import Header from './src/components/Header';
import GameScreen from './src/screens/GameScreen';
import StartGameScreen from './src/screens/StartGameScreen';
import ResultScreen from './src/screens/ResultScreen';

export default function App() {
  const [loaded] = useFonts({
    DancingScriptRegular: require("./src/assets/fonts/Dancing_Script/static/DancingScript-Regular.ttf"),
  })
  const [userNumber, setUserNumber] = useState()
  const [winOrLose, setWinOrLose] = useState(false)
  const [result, setResult] = useState("")

  const handleStartGame = selectedNumber => {
    setUserNumber(selectedNumber)
  }

  const handleFinishGame = (selection, number) => {
    if (
      (selection === "lower" && userNumber < number) ||
      (selection === "higher" && userNumber > number)
    ) {
      setResult("Win")
    } else {
      setResult("Lose")
    }
    setWinOrLose(true)
  }
  
  let content = <StartGameScreen onStartGame={handleStartGame}/>

  if (userNumber && winOrLose === true) {
    content = <ResultScreen result={result}/>
  } else if (userNumber) {
    content = <GameScreen handleResult={handleFinishGame}/>
  }

  if (!loaded) {
    return null
  }

  return (
    <SafeAreaView style={styles.container}>
    <View >
      <StatusBar style= "auto" />
      <Header title={"Guess the Number"} newStyles={{ fontFamily: "DancingScriptRegular" }} />
      {content}
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
