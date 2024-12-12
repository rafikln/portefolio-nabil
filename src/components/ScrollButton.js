import React from 'react'
import PropTypes from 'prop-types'

import { BsArrowDownCircle, BsArrowUpCircle } from 'react-icons/bs'

const ScrollButton = (props) => {
  const { mode, href } = props
  return (
    <a href={href} className="flex items-center text-slate-500 ">
      {mode === 'up' ? <BsArrowUpCircle /> : <BsArrowDownCircle />}
      <span className="ml-3">Scroll {mode}</span>
    </a>
  )
}
ScrollButton.propTypes = {
  mode: PropTypes.string,
  href: PropTypes.string
}

export default ScrollButton
