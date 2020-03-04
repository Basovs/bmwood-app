import React from "react"
import { View, Text, Image, Button, StyleSheet } from "react-native"
import Colors from "../constants/colors"

const StartScreen = props => {
  return (
    <View style={styles.screen}>
      <Image source={require("../assets/bmwood-logo.png")} />
      <Image
        style={styles.smallCloud}
        source={require("../assets/small-cloud.png")}
      />
      <Image
        style={styles.largeCloud}
        source={require("../assets/large-cloud.png")}
      />
      <Image style={styles.sun} source={require("../assets/sun.png")} />
      <Image style={styles.forest} source={require("../assets/forest.png")} />
      <View style={styles.article}>
        <Text style={styles.h1}>Laipni lūgti </Text>
        <Text style={styles.p}>
          Uzziniet sava īpašuma vērtību jau tagad un saņemat naudu jau vakar.
        </Text>
      </View>
      <View style={styles.btn}>
        <Button title="Uz novērtētēšanu" color="#fff" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    paddingTop: 126,
    position: "relative"
  },
  article: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    marginBottom: 100
  },
  h1: {
    fontSize: 24,
    marginBottom: 20
  },
  p: {
    fontSize: 18,
    fontWeight: "200",
    lineHeight: 24
  },
  btn: {
    backgroundColor: Colors.accent,
    height: 52,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    paddingHorizontal: 40,
    marginBottom: 200
  },
  smallCloud: {
    position: "absolute",
    top: 60,
    right: 160,
    zIndex: -1
  },
  largeCloud: {
    position: "absolute",
    top: 200,
    right: 160,
    zIndex: -1
  },
  sun: {
    position: "absolute",
    left: 250,
    zIndex: -1
  },
  forest: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    overflow: "visible"
  }
})

export default StartScreen
