import { PHOTO_FETCHED } from "../actionNames"

export default function(cityName) {
  const payload = fetch(
    `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${cityName}&key=AIzaSyAKw3RKEBcPT86tF3Y0-bZs1wqB4q1Ty9E`
  )
    .then(response => response.json())
    .then(placeInfo => {
      const photoRefId = placeInfo.results[0].photos[0].photo_reference
      return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoRefId}&key=AIzaSyAKw3RKEBcPT86tF3Y0-bZs1wqB4q1Ty9E`
    })
  return {
    type: PHOTO_FETCHED,
    payload,
  }
}
