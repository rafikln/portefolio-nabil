import React from 'react'
import PropTypes from 'prop-types'

const SocialLink = (props) => {
  const { href, icon } = props
  return (
    <a
      target="_blank"
      className="hover:text-slate-300  hover:animate-pulse hover:scale-125 transition-all duration-300"
      href={href}
      rel="noreferrer"
    >
      {icon}
    </a>
  )
}

SocialLink.propTypes = {
  icon: PropTypes.element,
  href: PropTypes.string
}

export default SocialLink
