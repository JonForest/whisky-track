import React from 'react'
import { Link } from 'react-router-dom'


const Edit = ({match}) => (
  <div>
    <h1>Edit Whisky - {match.params.id}</h1>
    <Link to="/">Home</Link>
  </div>
)

export default Edit