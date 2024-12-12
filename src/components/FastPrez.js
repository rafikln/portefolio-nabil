import React from 'react'

import SocialLink from './SocialLink'

import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'

const FastPrez = () => {
  return (
    <div className="text-slate-300">
      <div className="animate-charcter text-6xl font-black">
        <span>bakhelal nabil</span>
      </div>
      <p className="mt-5 text-2xl font-semibold tracking-widest">
        Développeur Web
      </p>
      <div className="flex mt-5 text-2xl gap-3 w-24">
        <SocialLink
          icon={<FaGithubSquare />}
          href="https://github.com/Nabil-bk-dev"
        />
        <SocialLink
          icon={<FaLinkedin />}
          href="www.linkedin.com/in/nabil-bakhelal-358910336"
        />
       
      </div>
    </div>
  )
}

export default FastPrez
