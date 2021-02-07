import React from "react"
import { NativeRouter, Route } from "react-router-native"

import Home from "~/pages/Home"
import About from "~/pages/About"

const Router = () => {
  return (
    <>
      <NativeRouter>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </NativeRouter>
    </>
  )
}

export default Router
