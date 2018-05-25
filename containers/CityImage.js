import { connect } from "react-redux"
import CityImage from "../components/CityImage"
import fetchPhoto from "../actions/fetchPhoto"

const mapStateToProps = state => ({
  selectedCity: state.selectedCity,
  photoUrl: state.photoUrl,
})

export default connect(mapStateToProps, { fetchPhoto })(CityImage)
