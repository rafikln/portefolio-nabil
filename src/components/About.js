import React, { useRef } from 'react'
import MovingText from 'react-moving-text'

import useOnScreen from '../hooks/useOnScreen'
import MyAnimateTitle from './MyAnimateTitle'
import profil from './assets/profil1.jpg'

import Mypdf from "../blue professional modern CV resume.pdf"

const About = () => {
  const ref = useRef()
  const isVisible = useOnScreen(ref)

  return (
    <div className="flex flex-col lg:flex-row items-center md:mt-28">
      <div className="skewed mt-10 border-4 border-white border-dotted ml-3 md:ml-0">
        <img
          src={profil}
          alt="profil"
          className="grayscale border-4 border-black border-dotted"
        />
      </div>
      <div className="p-1 md:p-10 pl-0 lg:pl-20 mt-3 md:mt-0 flex flex-col justify-center ">
        <div className="text-3xl md:text-4xl font-bold text-red-500 uppercase flex justify-center md:justify-start">
          <span ref={ref}>
            {isVisible && (
              <MyAnimateTitle
                part1="À"
                part2="propos"
                part3="de moi"
                classOption="mr-2"
              />
            )}
          </span>
        </div>
        <p
  ref={ref}
  className="text-slate-700 md:mt-10 
  text-base lg:w-9/12 leading-6 
  md:leading-9 text-justify p-4 md:p-0"
>
  Depuis plusieurs années, je me suis immergé dans l&apos;univers fascinant du développement web, motivé par une soif d&apos;apprendre et une curiosité sans limite. Après avoir exploré divers projets personnels pour affiner mes compétences, je m&apos;efforce de transformer mes passions en expertise. Mon parcours est marqué par une détermination constante à relever des défis, à maîtriser de nouveaux outils et à créer des solutions innovantes. Plus qu&apos;un simple apprentissage, chaque projet est pour moi une opportunité de m&apos;épanouir et de m&apos;amuser dans ce domaine en constante évolution.
</p>



        {isVisible && (
          <MovingText
            type="slideInFromTop"
            duration="3600ms"
            delay="0"
            direction="normal"
            timing="ease"
            fillMode="none"
            iteration={1}
          >
            <a href={Mypdf} download="CV_Bakhelal nabil.pdf">
              <button
                ref={ref}
                className="mt-5 py-2 px-6 bg-slate-800 text-white 
                rounded shadow-xl hover:bg-white hover:text-slate-800
                 transition-all duration-400 w-full md:w-max hover:shadow-md
                 active:bg-slate-400 active:text-white active:shadow-none"
              >
                Télécharger CV
              </button>
            </a>
          </MovingText>
        )}
      </div>
    </div>
  )
}

export default About
