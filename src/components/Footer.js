import React from 'react'

import SocialLink from './SocialLink'

import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'
import { DiReact } from 'react-icons/di'
import { SiTailwindcss } from 'react-icons/si'

function Footer() {
  return (
    <div
      style={{
        backgroundSize: '13%',
        backgroundPosition: 'bottom right',
        backgroundRepeat: 'no-repeat',
        backgroundImage: 'url(images/bgFooter.png)'
      }}
      className="lg:p-5 bg-slate-900 flex flex-col justify-center items-center"
    >
      <div>
        <p className="font-semibold text-white">Samuel Marien</p>
      </div>
      <div className="flex mt-2 lg:mt-5 text-2xl justify-between w-24 text-slate-500">
        <SocialLink
          icon={<FaGithubSquare />}
          href="https://github.com/Samuel-Marien"
        />
        <SocialLink
          icon={<FaLinkedin />}
          href="https://www.linkedin.com/in/samuel-marien/"
        />
        <SocialLink
          icon={<FaTwitterSquare />}
          href="https://twitter.com/Samuel_Marien"
        />
      </div>
      <div className="text-white mt-2 lg:mt-5">
        <p className="text-sm text-white flex items-center">
          Made with ❤️ /{' '}
          <span className="text-2xl ml-1 text-blue-300">{<DiReact />}</span> /{' '}
          <span className="text-2xl ml-1 text-blue-300">
            {<SiTailwindcss />}
          </span>
        </p>
      </div>
    </div>
  )
}

export default Footer
