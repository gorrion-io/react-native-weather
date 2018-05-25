import { connect } from "react-redux"
import SearchBar from "../components/SearchBar"
import selectCity from "../actions/selectCity"

const mapStateToProps = state => ({
    selectedCity: state.selectedCity
})

export default connect(mapStateToProps, { selectCity })(SearchBar)
