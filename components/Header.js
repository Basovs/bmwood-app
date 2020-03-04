import React from "react"
import { View, Text, StyleSheet } from "react-native"

import Colors from "../constants/colors"

const Header = props => {
  return (
    <View style={{ ...styles.header, ...props.style }}>
      <Text style={{ ...styles.title, ...props.style }}>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 20,
    color: Colors.primary
  }
})

export default Header
