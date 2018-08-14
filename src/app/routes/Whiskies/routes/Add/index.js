import React, { Component } from 'react'
import { connect } from 'react-redux'
import { whiskyOperations } from '../../duck/index'
import WhiskyList from '../../components/WhiskyList';
import { withRouter } from 'react-router-dom'

class AddWhisky extends Component {
  constructor (props) {
    super(props)
    this.state = { name: '' }
  }

  render() {
    return (
      <div className='layout-sidebar'>
        <div className='sidebar'>
          <h3>Whisky List</h3>
          <WhiskyList whiskies={this.props.whiskies} onWhiskyClick={id => alert(`The ID for this whisky is ${id}`)} />
        </div>
        <div>
          <h1>Add New Whisky</h1>
          <h4>Add a new whisky here</h4>
          <br />
          <form onSubmit={e => {
            e.preventDefault()
            const name = this.state.name
            if (!name.trim()) {
              return
            }
            this.props.dispatch(whiskyOperations.add(name))
            this.setState({ name: '' })
          }}>
            <label htmlFor='whisky-name'>Whisky Name: </label>
            <input type='text' id='whisky-name' value={this.state.name} onChange={e => this.setState({ name: e.target.value })} />
            <br />
            <input type='submit' />
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  whiskies: state.whiskies
})

export default withRouter(connect(mapStateToProps)(AddWhisky))
// export default AddWhisky