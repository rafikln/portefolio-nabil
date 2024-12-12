import React from 'react'
import PropTypes from 'prop-types'
import MovingText from 'react-moving-text'

const MyIcon = (props) => {
  const { icon, type, duration } = props
  return (
    <MovingText
      type={type}
      duration={duration}
      delay="0s"
      direction="normal"
      timing="ease-in"
      fillMode="none"
      iteration={1}
    >
      <div className="m-2 md:m-3">
        <span className="text-4xl md:text-7xl text-slate-800">{icon}</span>
      </div>
    </MovingText>
  )
}
MyIcon.propTypes = {
  icon: PropTypes.element,
  type: PropTypes.string,
  duration: PropTypes.string
}

export default MyIcon
