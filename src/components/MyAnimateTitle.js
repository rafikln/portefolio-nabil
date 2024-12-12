import React from 'react'
import PropTypes from 'prop-types'
import MovingText from 'react-moving-text'

const MyAnimateTitle = (props) => {
  const { part1, part2, part3, classOption } = props
  return (
    <div className="flex">
      <MovingText
        type="slideInFromLeft"
        duration="900ms"
        delay="0s"
        direction="normal"
        timing="ease-in"
        fillMode="none"
        iteration={1}
      >
        <span className={`${classOption}`}>{part1}</span>
      </MovingText>
      <MovingText
        type="slideInFromBottom"
        duration="1800ms"
        delay="0s"
        direction="normal"
        timing="ease"
        fillMode="none"
        iteration={1}
      >
        <span className={`${classOption}`}>{part2}</span>
      </MovingText>
      <MovingText
        type="slideInFromTop"
        duration="2700ms"
        delay="0s"
        direction="normal"
        timing="ease"
        fillMode="none"
        iteration={1}
      >
        <span>{part3}</span>
      </MovingText>
    </div>
  )
}

MyAnimateTitle.propTypes = {
  part1: PropTypes.string,
  part2: PropTypes.string,
  part3: PropTypes.string,
  classOption: PropTypes.string
}

export default MyAnimateTitle
