import React from "react"
import { View, Button } from "react-native"

export default (CityButton = props => (
  <View style={{ marginBottom: 25 }}>
    <Button
      title="Idź do fotki"
      onPress={() => {
        props.navigation.navigate("City")
      }}
    />
  </View>
))
