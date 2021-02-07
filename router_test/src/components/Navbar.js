import React from "react"
import { StyleSheet, View, Button, Text } from "react-native"
import { Link, useHistory } from "react-router-native"

const Navbar = () => {
  const history = useHistory()

  return (
    <>
      <View style={styles.container}>
        <View style={styles.nav}>
          <Link to="/">
            <Text>Home</Text>
          </Link>
          <Link to="/about">
            <Text>About</Text>
          </Link>
        </View>
        <View style={styles.nav}>
          <Button title="Home" onPress={() => history.push("/")} />
          <Button title="About" onPress={() => history.push("/about")} />
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  nav: {
    flexDirection: "row",
  },
})

export default Navbar
