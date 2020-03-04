import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { SocialIcon, PricingCard } from "react-native-elements"

import Header from "./components/Header"
import StartScreen from "./screens/StartScreen"
import Colors from "./constants/colors"

export default function App() {
  return (
    <View style={styles.screen}>
      <StartScreen />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.light,
    alignItems: "center",
    justifyContent: "center",
    position: "relative"
  }
})
