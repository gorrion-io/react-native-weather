import React from "react"
import SearchBar from "../containers/SearchBar"
import { StyleSheet, Text, View, Button, Alert } from "react-native"
import WeatherList from "../containers/WeatherList"
import LocationId from "../containers/LocationId"

export default class Main extends React.Component {
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(async (position) => {
      this.props.fetchGeolocation(position)
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text>MATEK TO FAJNY GOŚĆ</Text>
        </View>
        <SearchBar />
        <LocationId />
        <WeatherList />
        <CityButton navigation={this.props.navigation} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
  },
  textContainer: {
    flex: 1,
    backgroundColor: "powderblue",
    alignItems: "center",
    justifyContent: "center",
  },
})
