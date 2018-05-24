import React from "react"
import { StyleSheet, TextInput, Button, View, Text, Alert } from "react-native"
import WeatherListItem from "./WeatherListItem"
import CityButton from "./CityButton"

export default (SearchBar = props => (
  <View style={styles.searchBar}>
    <TextInput value={props.term} onChangeText={props.handleInputChange} style={{ flex: 3 }} />
    <Button title="Szukaj beta" onPress={props.handleSearchPress} style={{ flex: 1 }} />
  </View>
))

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: "row",
    paddingTop: 10,
    paddingBottom: 10,
  },
})
