import React from "react"
import { StyleSheet, View, Text } from "react-native"
import { Link } from "react-router-native"

const Navbar = () => {
  return (
    <>
      <View style={styles.container}>
        <Link to="/">
          <Text>Home</Text>
        </Link>
        <Link to="/about">
          <Text>About</Text>
        </Link>
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

export default Navbar
