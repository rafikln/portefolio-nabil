import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import emailjs from '@emailjs/browser'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import Footer from './Footer'

import { RiMailSendLine } from 'react-icons/ri'
import { AiFillAlert } from 'react-icons/ai'
import { FaThumbsUp } from 'react-icons/fa'

const MySubmitButton = (props) => {
  const { title, icon, className, iconClass } = props
  return (
    <div
      className="text-white hover:text-slate-800 bg-slate-800 hover:bg-white 
      cursor-pointer hover:shadow-lg transition-all duration-500 rounded-lg md:px-6 
      md:py-2 px-3 py-1 mt-8 xl:mt-0 w-full sm:w-max flex justify-center"
    >
      <button
        type="submit"
        className={`${className} text-base md:text-xl flex items-center `}
        rel="noreferrer"
      >
        {title}
        <span className={`${iconClass}  ml-5 `}>{icon}</span>
      </button>
    </div>
  )
}
MySubmitButton.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  iconClass: PropTypes.string,
  icon: PropTypes.element
}

const MyValidatedMessage = () => {
  return (
    <div className="text-slate-800 font-semibold mt-5">
      <p className="text-base md:text-xl flex items-baseline">
        Votre message à été envoyé, Merci.
        <span className="text-2xl ml-2 ">
          <FaThumbsUp />
        </span>
      </p>
    </div>
  )
}

const MyErrorMessage = (props) => {
  const { errorType } = props
  return (
    <div
      style={{ boxShadow: '0 0 4px red' }}
      className="mt-2 mb-8 flex items-center justify-center text-red-200 bg-red-600 p-2 rounded"
    >
      <span className="animate-pulse text-xl">
        <AiFillAlert />
      </span>
      <span className="mx-10 text-red-100">{errorType}</span>
      <span className="animate-pulse text-xl">
        <AiFillAlert />
      </span>
    </div>
  )
}
MyErrorMessage.propTypes = {
  errorType: PropTypes.string
}

const Contact = () => {
  const [mailSended, setMailSended] = useState(false)
  const form = useRef()

  // Email service
  const sendEmail = () => {
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_KEY
      )
      .then(
        (result) => {
          console.log(result.text)
          setMailSended(true)
        },
        (error) => {
          console.log(error.text)
          setMailSended(false)
        }
      )
  }

  // Form validator
  const formik = useFormik({
    initialValues: {
      user_name: '',
      user_email: '',
      message: ''
    },
    validationSchema: Yup.object({
      user_name: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .min(2, 'Must be 2 characters or more')
        .required('Required'),
      message: Yup.string()
        .max(2000, 'Must be 2000 characters or less')
        .min(5, 'Must be 5 characters or more')
        .required('Required'),
      user_email: Yup.string()
        .email('Invalid email address')
        .required('Required')
    }),
    onSubmit: (values, { resetForm }) => {
      sendEmail(JSON.stringify(values, null, 2))
      resetForm()
    }
  })

  return (
    <div
      className="h-screen flex flex-col justify-between"
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundImage: 'url(images/bgContact.png)'
      }}
    >
      <div className="bg-white mx-2 md:mx-16 lg:mx-48 p-5 md:p-10 mt-2  xl:mt-36 rounded">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-3 ">
          <div className="h-28 md:h-48 xl:h-96 flex flex-col justify-center ">
            <p className="md:pr-20 md:tracking-widest text-2xl md:text-4xl font-bold text-slate-800">
              Envie d’en savoir plus ? Envoyez-moi quelques lignes et parlons-en
              ☕.
            </p>
          </div>

          <SwitchTransition>
            <CSSTransition
              key={mailSended}
              addEndListener={(node, done) =>
                node.addEventListener('transitionend', done, false)
              }
              classNames="fade"
            >
              {mailSended ? (
                <div className="flex flex-col justify-center items-center ">
                  <button
                    onClick={() => setMailSended(false)}
                    className="mt-16 h-max px-8 py-2 bg-slate-800 hover:bg-slate-500 text-white hover:shadow-lg transition-all duration-500 rounded-lg "
                  >
                    Nouveau messsage ?
                  </button>
                  <MyValidatedMessage />
                </div>
              ) : (
                <form
                  className="flex flex-col justify-around h-full"
                  ref={form}
                  onSubmit={formik.handleSubmit}
                >
                  <p className="font-bold text-4xl text-red-500">
                    👋 Contactez-moi
                  </p>
                  <input
                    className="border p-1 rounded mt-5 xl:mt-0"
                    placeholder="Nom"
                    name="user_name"
                    id="user_name"
                    type="text"
                    {...formik.getFieldProps('user_name')}
                  />
                  {formik.touched.user_name && formik.errors.user_name ? (
                    <MyErrorMessage errorType={formik.errors.user_name} />
                  ) : null}

                  <input
                    className="border p-1 rounded mt-3 xl:mt-0"
                    placeholder="Email"
                    name="user_email"
                    id="user_email"
                    type="email"
                    {...formik.getFieldProps('user_email')}
                  />
                  {formik.touched.user_email && formik.errors.user_email ? (
                    <MyErrorMessage errorType={formik.errors.user_email} />
                  ) : null}

                  <textarea
                    className="border p-1 rounded h-36 mt-3 xl:mt-0"
                    placeholder="Message"
                    name="message"
                    id="message"
                    {...formik.getFieldProps('message')}
                  />
                  {formik.touched.message && formik.errors.message ? (
                    <MyErrorMessage errorType={formik.errors.message} />
                  ) : null}

                  <MySubmitButton title="Envoyer" icon={<RiMailSendLine />} />
                </form>
              )}
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact
