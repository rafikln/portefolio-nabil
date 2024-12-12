import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

import useOnScreen from '../hooks/useOnScreen'
import MyIcon from './MyIcon'
import MyAnimateTitle from './MyAnimateTitle'
import myProjects from '../misc/projectsArray'

import { DiCode } from 'react-icons/di'
import { IoEarth } from 'react-icons/io5'

const MySelectorButton = (props) => {
  const { title, onClick, isFocus } = props

  const focusedStyle = isFocus ? ` focus:bg-white focus:text-slate-500` : ' '

  return (
    <button
      onClick={onClick}
      className={
        focusedStyle +
        ` focus:animate-none animate-pulse cursor-pointer p-0 px-2 md:p-2 
      md:px-4 font-bold text-base md:text-xl bg-slate-500 text-white shadow rounded-full`
      }
    >
      {title}
    </button>
  )
}
MySelectorButton.propTypes = {
  title: PropTypes.number,
  onClick: PropTypes.func,
  isFocus: PropTypes.bool
}

const MyButton = (props) => {
  const { title, icon, href, className, iconClass } = props
  return (
    <a
      target="_blank"
      href={href}
      className={`${className} text-base md:text-xl mr-5 cursor-pointer flex items-center bg-white hover:bg-slate-500 
      hover:text-white hover:shadow-lg transition-all duration-500 rounded-lg md:px-4 md:py-2 px-2 shadow`}
      rel="noreferrer"
    >
      <span className={`${iconClass} mr-2`}>{icon}</span>
      {title}
    </a>
  )
}
MyButton.propTypes = {
  title: PropTypes.string,
  href: PropTypes.string,
  className: PropTypes.string,
  iconClass: PropTypes.string,
  icon: PropTypes.element
}

const Works = () => {
  const [projectSelected, setProjectSelected] = useState(0)

  const ref = useRef()
  const isVisible = useOnScreen(ref)

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 xl:grid-cols-2 gap-3 md:gap-1 lg:gap-10 mt-40 lg:mt-0"
    >
      <div className=" works rounded-lg mx-auto mt-2 xl:mt-16 xl:ml-16">
        <SwitchTransition>
          <CSSTransition timeout={400} key={projectSelected} classNames="fade2">
            <img
              src={myProjects[projectSelected].image}
              alt="profil"
              className="rounded-lg shadow-xl"
            />
          </CSSTransition>
        </SwitchTransition>
      </div>
      <div className=" md:px-6 mt-2 lg:mt-14 flex flex-col justify-center mb-20">
        <div className="text-3xl md:text-4xl font-bold text-red-500 uppercase flex justify-center lg:justify-start">
          <span>
            {isVisible && <MyAnimateTitle part1="P" part2="rojet" part3="s" />}
          </span>
        </div>
        <div className="flex justify-between w-6/12 md:w-4/12 mx-auto md:mx-0 mt-2 md:mt-5">
          {myProjects.map((_item, index) => {
            return (
              <MySelectorButton
                key={index}
                title={index + 1}
                onClick={() => setProjectSelected(index)}
                isFocus={projectSelected === index ? true : false}
              />
            )
          })}
        </div>
        <div className="flex flex-col  h-full p-2 md:p-0 mt-2 md:mt-0 ">
          <div className="md:mt-8 font-bold text-slate-500 text-xl">
            {myProjects[projectSelected].title}
          </div>
          <p className="text-slate-700 text-base lg:w-9/12 leading-6 md:leading-9 text-justify mt-2">
            {myProjects[projectSelected].description}
            {(projectSelected === 1 || projectSelected === 2) && (
              <>
                <br />
                <span className="text-sm italic text-slate-500">
                  Patience, l&apos;hébergeur met un peu de temps à lancer
                  l&apos;app au démarrage :)
                </span>
              </>
            )}
          </p>
        </div>
        <div className="flex flex-col mt-10 border rounded-2xl px-0 md:px-8 bg-white">
          <p className=" mx-auto px-8 md:px-16 w-max text-slate-700 text-center font-black text-2xl bg-white -translate-y-5">
            Stack
          </p>
          {isVisible && (
            <div className="flex justify-around">
              {myProjects[projectSelected].techArray.map((item, index) => {
                return (
                  <MyIcon
                    key={index}
                    icon={item.icon}
                    type={item.type}
                    duration={item.duration}
                  />
                )
              })}
            </div>
          )}
        </div>
        <div className="text-slate-500 flex mt-10 font-bold text-xl">
          {myProjects[projectSelected].linkSite && (
            <MyButton
              href={myProjects[projectSelected].linkSite}
              icon={<IoEarth />}
              title="Site internet"
              className="mr-5 "
            />
          )}
          <MyButton
            href={myProjects[projectSelected].linkCode}
            icon={<DiCode />}
            title="Code source"
            iconClass="text-4xl"
          />
        </div>
      </div>
    </div>
  )
}

export default Works
