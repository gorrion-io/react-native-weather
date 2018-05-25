import { CITY_CHANGED } from "../actionNames"

export default function(state = null, action) {
  switch (action.type) {
    case CITY_CHANGED:
      return action.payload.weather
    default:
      return state
  }
}
