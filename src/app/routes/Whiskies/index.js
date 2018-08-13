import {connect} from 'react-redux'
import ListWhiskiesContainer from './whiskies'


const mapStateToProps = state => ({
  whiskies: state.whiskies
})

/**
 * Note how the component is wrapped inside the 'withRouter' higher order component which passes in the
 * history object into the component.  This allows us to use the this.props.history.push function when
 * a todo is clicked to manage navigation
 */
export default connect(mapStateToProps)(ListWhiskiesContainer)