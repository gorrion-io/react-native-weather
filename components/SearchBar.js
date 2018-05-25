import React from "react"
import { StyleSheet, TextInput, Button, View, Text, Alert } from "react-native"
import WeatherListItem from "./WeatherListItem"
import CityButton from "./CityButton"

export default class SearchBar extends React.Component {
  state = {
    term: this.props.selectedCity,
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if(prevState.term === nextProps.selectedCity) return null
    return {
      term: nextProps.selectedCity
    }
  }

  handleInputChange = text => this.setState({ term: text })

  handlePress = () => {
    this.props.selectCity(this.state.term)
  }

  render() {
    return (
      <View style={styles.searchBar}>
        <TextInput
          value={this.state.term}
          onChangeText={this.handleInputChange}
          style={{ flex: 3 }}
        />
        <Button title="Szukaj beta" onPress={this.handlePress} style={{ flex: 1 }} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: "row",
    paddingTop: 10,
    paddingBottom: 10,
  },
})
