import React from 'react'

/**
 * Note: when passing arguments into the component, they get passed in as a single object
 * Therefore, need to destructure them into our variable names inside the function declaration
 */
const WhiskyList = ({
  whiskies = [],
  onWhiskyClick
}) => (
  <ul>
    {whiskies.map(whisky => (
      <li key={whisky.id} onClick={() => onWhiskyClick(whisky.id)}>
        {whisky.name}
      </li>
    ))}
  </ul>
)

export default WhiskyList