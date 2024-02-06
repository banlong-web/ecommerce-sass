import React from 'react'
import PropTypes from 'prop-types'

const CheckBox = props => {
    const checkRef = React.useRef(null)
    const onChange = () => {
        if(props.onChange) {
            props.onChange(checkRef.current)
        }
    }
  return (
    <label className='custom_checkbox'>
        <input type="checkbox" ref={checkRef} checked={props.checked} onChange={onChange}/>
        <span className='custom_checkbox_checkmark'>
            <i className='bx bx-check'></i>
        </span>
        {props.label}
    </label>
  )
}

CheckBox.propTypes = {
    label: PropTypes.string.isRequired,
    checked: PropTypes.bool
}

export default CheckBox