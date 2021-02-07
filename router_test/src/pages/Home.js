import React from "react"
import { StyleSheet, View, Text, Button } from "react-native"

const Home = ({ history }) => {
  return (
    <>
      <View style={styles.container}>
        <Text>Home</Text>
        <Button title="About" onPress={() => history.push("/about")} />
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

export default Home
