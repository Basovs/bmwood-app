import React from "react"
import { View, Text, Image, Button, StyleSheet } from "react-native"
import Colors from "../constants/colors"

const StartScreen = props => {
  return (
    <View style={styles.screen}>
      <Image
        source={require("../assets/bmwood-logo.png")}
        style={styles.logo}
      />
      <Image
        style={styles.smallCloud}
        source={require("../assets/small-cloud.png")}
      />
      <Image
        style={styles.largeCloud}
        source={require("../assets/large-cloud.png")}
      />
      <Image style={styles.sun} source={require("../assets/sun.png")} />
      <View style={styles.article}>
        <Text style={styles.h1}>Laipni lūgti </Text>
        <Text style={styles.p}>
          Uzziniet sava īpašuma vērtību jau tagad un saņemat naudu jau vakar.
        </Text>
      </View>
      <View style={styles.btn}>
        <Button title="Uz novērtētēšanu" color="white" />
      </View>
      <Image style={styles.forest} source={require("../assets/forest.png")} />
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Mežsaimniecības uzņēmums BM Wood darbību uzsācis 1993.gadā un vairāk
          nekā 22 gadus apsaimnieko meža īpašumus un cirsmas visā Latvijā.
        </Text>
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
    width: 240,
    maxWidth: "80%",
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    marginTop: 50
  },
  h1: {
    fontSize: 24,
    marginBottom: 20,
    color: Colors.dark,
    textAlign: "center"
  },
  p: {
    fontSize: 18,
    fontWeight: "200",
    lineHeight: 24,
    color: Colors.dark,
    textAlign: "center"
  },
  btn: {
    backgroundColor: Colors.dark,
    height: 52,
    width: 320,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 180
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
    bottom: 69,
    width: "100%",
    overflow: "visible",
    zIndex: -1
  },
  footer: {
    position: "absolute",
    bottom: 0,
    height: 70,
    backgroundColor: Colors.accent,
    width: "100%",
    paddingHorizontal: 16,
    paddingVertical: 5
  },
  footerText: {
    fontSize: 12,
    fontWeight: "300",
    lineHeight: 20,
    color: Colors.dark
  }
})

export default StartScreen
