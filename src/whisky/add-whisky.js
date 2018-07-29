import React from 'react'
import { Link } from 'react-router-dom'


const AddWhisky = ({match}) => (
  <span>
    <h1>Add Whisky - {match.params.id}</h1>
    <Link to="/">Home</Link>
  </span>
)

export default AddWhisky