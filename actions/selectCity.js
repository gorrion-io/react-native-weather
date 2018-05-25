import { CITY_CHANGED } from "../actionNames"

export default function(cityName) {
  const promisePayload = fetch(`https://www.metaweather.com/api/location/search/?query=${cityName}`)
    .then(result => {
      return result.json()
    })
    .then(city => {
      return fetch(`https://www.metaweather.com/api/location/${city[0].woeid}/`)
    })
    .then(result => result.json())
    .then(weather => {
      return { cityName, weather: weather.consolidated_weather }
    })
  return {
    type: CITY_CHANGED,
    payload: promisePayload,
  }
}
