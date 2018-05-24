import React from "react";
import { View, Text, Image } from "react-native";

export default class CityImage extends React.Component {
  state = {
    photoUrl: null
  };
  location = this.props.navigation.getParam("location");

  async componentDidMount() {
    const result = await (await fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${
      this.location.title
    }&key=AIzaSyAKw3RKEBcPT86tF3Y0-bZs1wqB4q1Ty9E`)).json();
    const photoRefId = result.results[0].photos[0].photo_reference;
    this.setState({
      photoUrl: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoRefId}&key=AIzaSyAKw3RKEBcPT86tF3Y0-bZs1wqB4q1Ty9E`
    });
  }

  render() {
    //const location = this.props.navigation.getParam("location");
    return (
      <View style={{flex: 1}}>
        <Text style={{flex: 1, textAlign: 'center', fontSize: 40}}>{this.location.title}</Text>
        <Image
          source={{ uri: `${this.state.photoUrl}` }}
          style={{ flex: 6 }}
        />
      </View>
    );
  }
}
