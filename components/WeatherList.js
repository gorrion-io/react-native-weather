import React from "react"
import { View } from "react-native"
import WeatherListItem from "./WeatherListItem"

export default (WeatherList = props => (
  <View
    style={{
      flex: 2,
      flexDirection: "row",
      justifyContent: "space-between",
      flexWrap: "wrap",
    }}>
    {props.weatherList &&
      props.weatherList.map(w => (
        <WeatherListItem key={w.id} date={w.applicable_date} temp={w.the_temp} />
      ))}
  </View>
))
