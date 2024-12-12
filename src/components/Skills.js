import React, { useRef } from 'react'

import useOnScreen from '../hooks/useOnScreen'
import MyAnimateTitle from './MyAnimateTitle'
import skillsPic from './assets/skills2.jpg'
import MyIcon from './MyIcon'

import {
  DiHtml5,
  DiCss3,
  DiNodejsSmall,
  DiReact,
  DiPostgresql,
  DiMongodb,
  DiMysql,
  DiFirebase
  
} from 'react-icons/di'
import {
  SiTailwindcss,
  SiExpress,
  SiPostman,
  SiAngular,
  SiVisualstudio
} from 'react-icons/si'
import { FaFigma, FaGithub } from 'react-icons/fa'
import { TbApi, TbBrandJavascript } from 'react-icons/tb'

const Skills = () => {
  const ref = useRef()
  const isVisible = useOnScreen(ref)

  return (
    <div ref={ref} className="flex flex-col lg:flex-row mt-40 lg:mt-0">
      <div className="p-1 md:p-10 pl-0 mt-3 md:mt-0 flex flex-col lg:w-7/12">
        <div className="text-3xl md:text-4xl font-bold text-red-500 uppercase flex justify-center md:justify-start">
          <span>
            {isVisible && (
              <MyAnimateTitle part1="Com" part2="pétence" part3="s" />
            )}
          </span>
        </div>

        <p className=" text-slate-700 lg:mt-10 text-base leading-6 md:leading-9 text-justify p-4 md:p-0">
          J&apos;aime créer des choses qui prennent forme à l&apos;écran, que ce
          soit sites Web, applications ou quoi que ce soit entre les deux.
          J’adore voir mon imagination s’animer sous les clics, autant que
          résoudre des casses-têtes exigeants.
          <br />
          Voici les outils (pour le moment 🤓) avec lesquels j’aime
          particulièrement travailer.
        </p>

        {isVisible && (
          <div className="mt-4 md:mt-10 flex flex-col justify-center items-center pb-[40px]">
            <div className="flex flex-col  border rounded-2xl px-0 md:px-8 bg-white">
              <p className="mx-auto px-8 md:px-16 w-max text-slate-700 text-center font-black text-2xl bg-white -translate-y-5">
                Front-end
              </p>
              <div className="flex">
                <MyIcon
                  icon={<DiHtml5 />}
                  type="slideInFromLeft"
                  duration="1000ms"
                />
                <MyIcon
                  icon={<DiCss3 />}
                  type="slideInFromTop"
                  duration="500ms"
                />
                <MyIcon
                  icon={<TbBrandJavascript />}
                  type="slideInFromBottom"
                  duration="800ms"
                />
                <MyIcon
                  icon={<DiReact />}
                  type="slideInFromRight"
                  duration="1800ms"
                />
                <MyIcon
                  icon={<SiAngular />}
                  type="slideInFromLeft"
                  duration="1200ms"
                />
                <MyIcon
                  icon={<SiTailwindcss />}
                  type="slideInFromBottom"
                  duration="800ms"
                />
             
              </div>
            </div>
            <div className="flex flex-col mt-5 md:mt-10 border rounded-2xl px-2 md:px-8 bg-white">
              <p className=" mx-auto px-8 md:px-16 w-max text-slate-700 text-center font-black text-2xl bg-white -translate-y-5">
                Back end
              </p>
              <div className="flex ">
                <MyIcon
                  icon={<DiNodejsSmall />}
                  type="slideInFromBottom"
                  duration="800ms"
                />
                <MyIcon
                  icon={<SiExpress />}
                  type="slideInFromLeft"
                  duration="1500ms"
                />
                <MyIcon
                  icon={<TbApi />}
                  type="slideInFromTop"
                  duration="1200ms"
                />
                <MyIcon
                  icon={<DiPostgresql />}
                  type="slideInFromBottom"
                  duration="1800ms"
                />
                <MyIcon
                  icon={<DiMongodb />}
                  type="slideInFromBottom"
                  duration="800ms"
                />
                  <MyIcon
                  icon={<DiMysql />}
                  type="slideInFromLeft"
                  duration="800ms"
                />
                  <MyIcon
                  icon={<DiFirebase />}
                  type="slideInFromRight"
                  duration="800ms"
                />
              </div>
            </div>
            <div className="flex flex-col mt-5 md:mt-10 border rounded-2xl px-2 md:px-8 bg-white">
              <p className=" mx-auto px-8 md:px-16 w-max text-slate-700 text-center font-black text-2xl bg-white -translate-y-5">
                Outils
              </p>
              <div className="flex ">
                <MyIcon
                  icon={<FaFigma />}
                  type="slideInFromLeft"
                  duration="1500ms"
                />
                <MyIcon
                  icon={<SiVisualstudio />}
                  type="slideInFromBottom"
                  duration="1800ms"
                />
                <MyIcon
                  icon={<SiPostman />}
                  type="slideInFromRight"
                  duration="1800ms"
                />
                <MyIcon
                  icon={<FaGithub />}
                  type="slideInFromTop"
                  duration="2200ms"
                />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="skewed__skills hidden lg:block mt-10 border-8 border-white border-dotted ml-3 md:ml-0">
        <img
          src={skillsPic}
          alt="profil"
          className="grayscale border-4 border-black border-dotted"
        />
      </div>
    </div>
  )
}

export default Skills
