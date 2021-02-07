import React from "react"
import { StyleSheet, View, Button, Text } from "react-native"
import { Link, useHistory } from "react-router-native"

const Navbar = () => {
  const history = useHistory()

  return (
    <>
      <View style={styles.container}>
        <View>
          <Link to="/">
            <Text>Home</Text>
          </Link>
          <Link to="/about">
            <Text>About</Text>
          </Link>
        </View>
        <View>
          <Button title="Home" onPress={() => history.push("/")} />
          <Button title="About" onPress={() => history.push("/about")} />
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
})

export default Navbar
