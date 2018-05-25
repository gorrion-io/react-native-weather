import { PHOTO_FETCHED } from "../actionNames"

export default function(state = null, action) {
  switch (action.type) {
    case PHOTO_FETCHED:
      return action.payload
    default:
      return state
  }
}
