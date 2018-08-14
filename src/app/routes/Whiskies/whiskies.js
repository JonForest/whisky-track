import React from 'react'
import { Link } from 'react-router-dom'
import WhiskyList from './components/WhiskyList'
import { withRouter } from 'react-router-dom'
import {connect} from 'react-redux'

/**
 * This is a Contain component.  It does not concern itself (much) with presentational details, but instead
 * is all about handling data
 */

class ListWhiskiesContainer extends React.Component {
  render () {
    return (
      <div>
        <h1>Whisky List</h1>
        <WhiskyList whiskies={this.props.whiskies} />

        <Link to="/">Home</Link>
        
      </div>
    )
  }
}

const mapStateToProps = state => ({
  whiskies: state.whiskies
})

/**
 * Note how the component is wrapped inside the 'withRouter' higher order component which passes in the
 * history object into the component.  This allows us to use the this.props.history.push function when
 * a todo is clicked to manage navigation
 */
export default withRouter(connect(mapStateToProps)(ListWhiskiesContainer))