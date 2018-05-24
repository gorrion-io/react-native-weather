import React from "react";
import { StyleSheet, TextInput, Button, View, Text, Alert } from "react-native";
import WeatherListItem from './WeatherListItem';

export default class SearchBar extends React.Component {
  state = {
    term: "London",
    locationId: null,
    weatherList: null
  };

  componentDidMount() {
      Alert.alert('ELO', 'Zrobiliśmy apkę w native',[
          {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {text: 'No elo', onPress: () => console.log('Ask me later pressed')},
      ],
      { cancelable: false })
  }

  handleInputChange = text => {
    this.setState({ term: text });
  };

  handleSearchPress = async () => {
    const response = await fetch(
      `https://www.metaweather.com/api/location/search/?query=${
        this.state.term
      }`
    );
    const json = await response.json();
    const weatherObject = await (await fetch(
      `https://www.metaweather.com/api/location/${json[0].woeid}/`
    )).json();
    const weather = weatherObject.consolidated_weather;
    this.setState({ weatherList: weather, locationId: json[0].woeid });
  };

  render() {
    return (
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <TextInput
            value={this.state.term}
            onChangeText={this.handleInputChange}
            style={{ flex: 3 }}
          />
          <Button
            title="Szukaj beta"
            onPress={this.handleSearchPress}
            style={{ flex: 1 }}
          />
        </View>
        {this.state.locationId && (
          <View style={styles.idContainer}>
            <Text>{this.state.locationId}</Text>
          </View>
        )}
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap'}}>
          {this.state.weatherList &&
            this.state.weatherList.map(w => (
              <WeatherListItem key={w.id} date={w.applicable_date} temp={w.the_temp} />
            ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchContainer: {
    flex: 4,
    padding: 10
  },
  searchBar: {
    flexDirection: "row"
  },
  idContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 25,
    marginTop: 5,
    backgroundColor: "pink"
  }
});
