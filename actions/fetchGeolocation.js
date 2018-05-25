import { CITY_CHANGED } from "../actionNames"

export default function(position) {
  const payload = fetch(
    `https://www.metaweather.com/api/location/search/?lattlong=${position.coords.latitude},${
      position.coords.longitude
    }`
  )
    .then(response => response.json())
    .then(cities => {
      return { cityName: cities[0].title, weather: null }
    })
  return {
    type: CITY_CHANGED,
    payload,
  }
}
