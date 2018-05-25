import { connect } from "react-redux"
import Main from "../components/Main"
import fetchGeolocation from "../actions/fetchGeolocation"

export default connect(null, { fetchGeolocation })(Main)
