import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { whiskyOperations } from '../../../../duck'

class Edit extends Component {
  state = { name: '' }

  render() {
    let id = this.props.match.params.id
    let match = this.props.whiskies.filter((whisky) => whisky.id === Number(id))
    let currentName = match.length ? match[0].name : ''
    
    return (
      <div>
        <h1>Edit Whisky - {currentName}</h1>
        <form onSubmit={e => {
          e.preventDefault()
          const name = this.state.name
          if (!name.trim()) {
            return
          }
          this.props.dispatch(whiskyOperations.edit({ name, id }))
          this.setState({ name: '' })
        }}>
          <label htmlFor='whisky-name'>Whisky Name: </label>
          <input type='text' id='whisky-name' value={this.state.name} onChange={e => this.setState({ name: e.target.value })} />
          <br />
          <input type='submit' />
        </form>

        <Link to="/">Home</Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  whiskies: state.whiskies
})

export default connect(mapStateToProps)(Edit)