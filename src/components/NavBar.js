import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { CSSTransition } from 'react-transition-group'

import { BsMenuUp } from 'react-icons/bs'

const MyLink = (props) => {
  const { title, href } = props
  return (
    <a
      href={href}
      className="block mt-4 lg:inline-block lg:mt-0 text-slate-500 pr-16 mr-4 pb-1
      hover:text-slate-300 focus:text-red-400 hover:animate-pulse hover:scale-110 hover:font-bold
      transition-all duration-200"
    >
      {title}
    </a>
  )
}

MyLink.propTypes = {
  title: PropTypes.string,
  href: PropTypes.string
}

const LinksDisplayer = () => {
  return (
    <div className="text-sm lg:flex-grow ">
      <MyLink title="Accueil" href="/" />
      <MyLink title="A propos" href="#about" />
      <MyLink title="Compétences" href="#skills" />
      <MyLink title="Projets" href="#works" />
      <MyLink title="Contact" href="#contact" />
    </div>
  )
}

const NavBar = () => {
  const [show, setShow] = useState(false)
  const [showButton, setShowButton] = useState(true)

  return (
    <nav className="flex items-center justify-between flex-wrap p-4 md:p-6">
      {/* responsive button  */}
      {showButton && (
        <div className="block lg:hidden">
          <button onClick={() => setShow(true)} className=" text-slate-400">
            <BsMenuUp />
          </button>
        </div>
      )}

      {/* responsive navbar  */}
      <CSSTransition
        in={show}
        timeout={300}
        classNames="myNavbar"
        unmountOnExit
        onEnter={() => setShowButton(false)}
        onExited={() => setShowButton(true)}
      >
        {show ? (
          <div
            className="w-full block lg:hidden "
            onClick={() => setShow(false)}
          >
            <LinksDisplayer />
          </div>
        ) : (
          <div></div>
        )}
      </CSSTransition>

      {/* desktop navbar  */}
      <div className="w-full hidden flex-grow lg:flex lg:items-center lg:w-auto ">
        <div className="text-sm lg:flex-grow">
          <LinksDisplayer />
        </div>
      </div>
    </nav>
  )
}

export default NavBar
