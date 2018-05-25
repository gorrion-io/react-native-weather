import React from "react"
import { View, Text, Image } from "react-native"

export default class CityImage extends React.Component {
   
  componentDidMount() {
    this.props.fetchPhoto(this.props.selectedCity)
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text style={{ flex: 1, textAlign: "center", fontSize: 40 }}>{this.props.selectedCity}</Text>
        <Image source={{ uri: `${this.props.photoUrl}` }} style={{ flex: 6 }} />
      </View>
    )
  }
}
