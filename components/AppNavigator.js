import React from "react"
import { createStackNavigator } from "react-navigation"
import Main from "./Main"
import CityImage from "./CityImage"

export default createStackNavigator(
  {
    Home: Main,
    City: CityImage,
  },
  {
    initialRouteName: "Home",
  }
)
