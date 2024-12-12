import React from 'react'

// import iptracker from '../components/assets/iptracker.png'
// import memory from '../components/assets/memory.png'
import acnh from '../components/assets/Screenshot_11-12-2024_152225_localhost.jpeg'
import portfolio from '../components/assets/photo_2024-12-11_14-23-13.jpg'
import bkm from '../components/assets/photo_2024-12-11_14-17-44.jpg'
import jobify from '../components/assets/photo_2024-06-22_19-56-34.jpg'

import { DiReact, DiCss3, DiMongodb, DiNodejsSmall ,DiPhp,DiMysql} from 'react-icons/di'
import {
  SiTailwindcss,
  SiBootstrap,
 
  
} from 'react-icons/si'
import { TbBrandJavascript, TbApi } from 'react-icons/tb'

const myProjects = [
  // {
  //   image: iptracker,
  //   title: 'Ip Tracker',
  //   description:
  //     'Ce projet a pour objectif de situer sur une carte géographique une adresse IP passée en paramètre dans le formulaire. Pour ce faire je fais appelle à deux APIs distinctes : Google map et Ip Registry. Le formulaire accepte uniquement des adresses IP au bon format. En plus de la géolocalisation, on accède à certaines informations : adresse, type de port, le réseau …',
  //   linkCode: 'https://github.com/Samuel-Marien/ip-tracker',
  //   linkSite: 'https://ip-tracker-dbfta26z5-samuel-marien.vercel.app/',
  //   techArray: [
  //     { icon: <DiReact />, type: 'slideInFromRight', duration: '1000ms' },
  //     {
  //       icon: <SiTailwindcss />,
  //       type: 'slideInFromBottom',
  //       duration: '400ms'
  //     },
  //     {
  //       icon: <TbBrandJavascript />,
  //       type: 'slideInFromBottom',
  //       duration: '600ms'
  //     },
  //     { icon: <TbApi />, type: 'slideInFromLeft', duration: '800ms' }
  //   ]
  // },
  // {
  //   image: memory,
  //   title: 'Memory game',
  //   description:
  //     'Un jeu de cartes classique pour développer sa mémoire. Vous pouvez choisir la difficulté et le type d’illustration, dépêchez vous le temps est compté ! Ce grand standard des exercices de code m’a permis de bien jouer avec React et ses Hooks. Prochaine étape : enregistrer les meilleurs scores !',
  //   linkCode: 'https://github.com/Samuel-Marien/memory',
  //   linkSite: 'https://memory-lime.vercel.app/',
  //   techArray: [
  //     { icon: <DiReact />, type: 'slideInFromRight', duration: '1000ms' },

  //     {
  //       icon: <TbBrandJavascript />,
  //       type: 'slideInFromBottom',
  //       duration: '600ms'
  //     },
  //     {
  //       icon: <SiTailwindcss />,
  //       type: 'slideInFromLeft',
  //       duration: '300ms'
  //     },
  //     {
  //       icon: <TbBrandNextjs />,
  //       type: 'slideInFromTop',
  //       duration: '600ms'
  //     }
  //   ]
  // },
  {
    image: acnh,
    title: 'Système De Gestion De Stock Intelligent',
    description:
    'Ce projet gère le stock d&apos;un magasin pour des matériaux tels que des caméras et des équipements Wi-Fi. Développé avec React.js, Node.js, Express et MySQL, il permet de suivre, gérer et mettre à jour les articles en temps réel.',
     linkCode: 'https://github.com/Nabil-bk-dev/Syst-me-de-gestion-de-stock-intelligent', // Remplace par le lien correct ou supprime si inutile    linkCode: '',
    techArray: [
      { icon: <DiReact />, type: 'slideInFromRight', duration: '1000ms' },
      {
        icon: <TbBrandJavascript />,
        type: 'slideInFromBottom',
        duration: '600ms'
      },
      { icon: <TbApi />, type: 'slideInFromLeft', duration: '800ms' },
      { icon: <DiNodejsSmall />, type: 'slideInFromBottom', duration: '800ms' },
      { icon: <DiMysql />, type: 'slideInFromTop', duration: '800ms' }
    ]
  },
  {
    image: jobify,
    title: 'Système De Gestion Des Agents De Sonatrach',
    description:
      'Ce projet gère les agents de Sonatrach en suivant leur situation médicale et administrative, notamment les visites médicales et données de santé. Développé avec Node.js, Express, React.js, Tailwind CSS et MongoDB, il offre une solution moderne et performante pour centraliser ces informations.',
      linkCode: 'https://github.com/Samuel-Marien/jobify_Prod',
    techArray: [
      { icon: <DiReact />, type: 'slideInFromRight', duration: '1000ms' },
      {
        icon: <TbBrandJavascript />,
        type: 'slideInFromBottom',
        duration: '600ms'
      },
      { icon: <TbApi />, type: 'slideInFromLeft', duration: '800ms' },
      { icon: <DiNodejsSmall />, type: 'slideInFromBottom', duration: '800ms' },
      { icon: <DiMongodb />, type: 'slideInFromTop', duration: '800ms' }
    ]
  },
  {
    image: bkm,
    title: 'Systeme De Gestion Des Prêts',
    description:
      'Ce projet permet aux employés de Sonatrach de gérer leurs demandes de prêts (sociaux, véhicules, logements), de suivre leur avancement et de consulter leur historique via un espace personnel. Développée avec MySQL, PHP, JavaScript et Bootstrap, l’application vise à automatiser le processus de gestion des prêts et reste en cours d’amélioration.',
    linkCode: 'https://github.com/Nabil-bk-dev/systeme-de-gestion-des-pr-ts',
    techArray: [
      {
        icon: <DiPhp />,
        type: 'slideInFromTop',
        duration: '600ms',
      },
      {
        icon: <SiBootstrap />,
        type: 'slideInFromBottom',
        duration: '400ms',
      },
      {
        icon: <TbBrandJavascript />,
        type: 'slideInFromBottom',
        duration: '600ms',
      },
      {
        icon: <DiMysql />,
        type: 'slideInFromTop',
        duration: '800ms',
      },
    ],
  },
  
  {
    image: portfolio,
    title: 'Portfolio',
    description:
      'Application pour gérer les prêts (sociaux, véhicules, logements) des employés. Développée avec PHP, MySQL, JavaScript et Bootstrap, elle automatise le suivi et la soumission des demandes. Des fonctionnalités comme des simulateurs et des notifications sont en développement. Note : le démarrage peut être lent. Cela conserve les points clés tout en étant beaucoup plus court. 😊',
    linkCode: 'https://github.com/Nabil-bk-dev/portefolio',
    linkSite: null,
    techArray: [
      { icon: <DiReact />, type: 'slideInFromRight', duration: '1000ms' },
      { icon: <DiCss3 />, type: 'slideInFromLeft', duration: '800ms' },
      {
        icon: <TbBrandJavascript />,
        type: 'slideInFromBottom',
        duration: '600ms'
      },
      {
        icon: <SiTailwindcss />,
        type: 'slideInFromLeft',
        duration: '600ms'
      }
    ]
  }
]

export default myProjects
