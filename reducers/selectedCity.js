import { CITY_CHANGED } from "../actionNames";

export default function(state = 'London', action) {
    switch(action.type) {
        case CITY_CHANGED: return action.payload.cityName
        default: return state
    }
} 