import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default (WeatherListItem = ({ date, temp }) => (
  <View style={styles.itemContainer}>
    <View style={styles.dataText}>
      <Text>{date}</Text>
    </View>
    <View style={styles.tempText}>
      <Text>{Number(temp).toFixed(2)} &deg;C</Text>
    </View>
  </View>
));

const styles = StyleSheet.create({
  itemContainer: {
    width: '30%',
    height: 100,
    backgroundColor: 'skyblue',
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  dateText: {
    //flex: 1
  },
  tempText: {
    //flex: 1
  }
});
