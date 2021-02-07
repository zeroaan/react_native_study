import React from "react"
import { StyleSheet, View, Text, Button } from "react-native"

const About = ({ history }) => {
  return (
    <>
      <View style={styles.container}>
        <Text>About</Text>
        <Button title="Home" onPress={() => history.push("/")} />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})

export default About
