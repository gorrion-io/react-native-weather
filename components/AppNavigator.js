import React from "react"
import { createStackNavigator } from "react-navigation"
import Main from "../containers/Main"
import CityImage from "../containers/CityImage"

export default createStackNavigator(
  {
    Home: Main,
    City: CityImage,
  },
  {
    initialRouteName: "Home",
  }
)
