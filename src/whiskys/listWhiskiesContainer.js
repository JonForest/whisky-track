import React from 'react'
import { Link } from 'react-router-dom'
import WhiskyList from './whiskyList'
import { withRouter } from 'react-router-dom'

/**
 * This is a Contain component.  It does not concern itself (much) with presentational details, but instead
 * is all about handling data
 */

class ListWhiskiesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { whiskies: [{
      id: 1,
      name: 'Whisky 1'
    }] }
  }

  onWhiskyClick = (id) => {
    // Navigate to the edit screen
    this.props.history.push(`/whiskys/${id}/edit`)
  }

  render () {
    return (
      <span>
        <h1>Whisky List</h1>
        <WhiskyList whiskies={this.state.whiskies} onWhiskyClick={this.onWhiskyClick} />

        <Link to="/">Home</Link>
        
      </span>
    )
  }
}

/**
 * Note how the component is wrapped inside the 'withRouter' higher order component which passes in the
 * history object into the component.  This allows us to use the this.props.history.push function when
 * a todo is clicked to manage navigation
 */
export default withRouter(ListWhiskiesContainer)