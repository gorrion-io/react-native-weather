import React from "react"
import SearchBar from "./SearchBar"
import { StyleSheet, Text, View, Button, Alert } from "react-native"
import WeatherList from "./WeatherList"
import LocationId from "./LocationId"

export default class Main extends React.Component {
  state = {
    term: "London",
    location: null,
    weatherList: null,
  }

  componentDidMount() {
    Alert.alert(
      "ELO",
      "Zrobiliśmy apkę w native",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "No elo", onPress: () => console.log("Ask me later pressed") },
      ],
      { cancelable: false }
    )
    navigator.geolocation.getCurrentPosition(async (position) => {
      const cities = await (await fetch(`https://www.metaweather.com/api/location/search/?lattlong=${position.coords.latitude},${position.coords.longitude}`)).json()
      this.setState({term: cities[0].title})
    })
    
  }

  handleInputChange = text => {
    this.setState({ term: text })
  }

  handleSearchPress = async () => {
    const response = await fetch(
      `https://www.metaweather.com/api/location/search/?query=${this.state.term}`
    )
    const json = await response.json()
    const weatherObject = await (await fetch(
      `https://www.metaweather.com/api/location/${json[0].woeid}/`
    )).json()
    const weather = weatherObject.consolidated_weather
    this.setState({ weatherList: weather, location: json[0] })
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text>MATEK TO FAJNY GOŚĆ</Text>
        </View>
        <SearchBar
          term={this.state.term}
          handleInputChange={this.handleInputChange}
          handleSearchPress={this.handleSearchPress}
        />
        {this.state.location && <LocationId location={this.state.location} />}
        <WeatherList weatherList={this.state.weatherList} />
        {this.state.location && (
          <CityButton navigation={this.props.navigation} location={this.state.location} />
        )}
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
