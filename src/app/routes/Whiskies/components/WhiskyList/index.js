import React from 'react'
import { withRouter } from 'react-router-dom'

/**
 * Note: when passing arguments into the component, they get passed in as a single object
 * Therefore, need to destructure them into our variable names inside the function declaration
 */
const WhiskyList = ({
  whiskies = [],
  history
}) => (
    <ul className='whisky-list'>
      {whiskies.map(whisky => (
        <li key={whisky.id} onClick={() => {
          // Navigate to the edit screen
          history.push(`/whiskies/${whisky.id}/edit`)
        }}>
          {whisky.name}
        </li>
      ))}
    </ul>
  )

export default withRouter(WhiskyList)