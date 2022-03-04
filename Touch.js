import React from "react";
import { TouchableHighlight, Text, StyleSheet } from "react-native";

function Touch({ title, showDetails }) {
  return (
    <TouchableHighlight
      style={styles.touch}
      onPress={() => showDetails()}
      underlayColor="#ffffff"
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableHighlight>
  )
}

export default Touch

const styles = StyleSheet.create({
  touch: {
    padding: 20
  },
  text: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    color: "maroon"
    
  }
})