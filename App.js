import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "./components/SearchBar";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text>MATEK TO FAJNY GOŚĆ</Text>
        </View>
        <SearchBar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25
  },
  textContainer: {
    flex: 1,
    backgroundColor: 'powderblue',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
