import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default (LocationId = props => (
  <View style={styles.idContainer}>
    <Text>{props.location.title}</Text>
  </View>
));

const styles = StyleSheet.create({
  idContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 25,
    marginTop: 5,
    backgroundColor: "pink"
  }
});
