import { createStore, combineReducers, applyMiddleware } from "redux"
import selectedCity from "./reducers/selectedCity"
import weather from "./reducers/weather"
import photoUrl from "./reducers/photoUrl"
import promise from "redux-promise"

const middlewares = applyMiddleware(promise)

export default createStore(
  combineReducers({
    selectedCity,
    weather,
    photoUrl,
  }),
  middlewares
)
