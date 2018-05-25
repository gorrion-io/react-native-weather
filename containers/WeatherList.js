import { connect } from "react-redux"
import WeatherList from "../components/WeatherList"

const mapStateToProps = state => ({
  weatherList: state.weather,
})

export default connect(mapStateToProps)(WeatherList)
