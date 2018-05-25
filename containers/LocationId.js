import { connect } from "react-redux"
import LocationId from "../components/LocationId"

const mapStateToProps = state => ({
  selectedCity: state.selectedCity,
})

export default connect(mapStateToProps)(LocationId)
