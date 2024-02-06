import React from 'react'
import PropTypes from 'prop-types'

const Test = props => {
  return (
    <div>{props.id}</div>
  )
}

Test.propTypes = {
    id: PropTypes.string
}

export default Test