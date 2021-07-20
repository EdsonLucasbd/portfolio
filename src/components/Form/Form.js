import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import emailjs from 'emailjs-com';
import Modal from '../Modal';

import * as Yup from 'yup';

import '../../styles/components/Form.css'

const MyForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  const schema = Yup.object().shape({
    fromName: Yup.string().min(3, 'Seu nome é maior que isso...').required('Informe seu nome'),
    replyTo: Yup.string().email('Informe um email válido').required('Informe seu email'),
    subject: Yup.string().required('O assunto é importante'),
    message: Yup.string().required('Qual sua mensagem?'),
  });

  const sendEmail = (object) => {
    emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, object, process.env.REACT_APP_USER_ID)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <div>
      <Formik
        initialValues = {{
          fromName: '',
          replyTo: '',
          subject: '',
          message: ''
        }}
        validationSchema={schema}
        onSubmit={(values, { setSubmitting, resetForm,}) => {
          setTimeout (() => {
            sendEmail(values)
            console.log("submit", values);
            setSubmitting(false)
          }, 1000)
          resetForm();
          setIsOpen(true)
        }}
      >
        {({ errors, isValid, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <div data-anime='left'>
              <label htmlFor="fromName" 
                className={errors.fromName && 'has-error-label'}>Nome: </label>
              <span className={errors.fromName && 'has-error-label'}>
                <ErrorMessage name="fromName" />
              </span>
              <Field id="fromName" name="fromName" />
            </div>

            <div data-anime='right'>
              <label htmlFor="replyTo" 
                className={errors.replyTo && 'has-error-label'}>Email: </label>
              <span className={errors.replyTo && 'has-error-label'}>
                <ErrorMessage name="replyTo" />
              </span>
              <Field id="replyTo" name="replyTo" type="email"/>
            </div>

            <div data-anime='left'>
              <label htmlFor="subject" 
                className={errors.subject && 'has-error-label'}>Assunto: </label>
              <span className={errors.subject && 'has-error-label'}>
                <ErrorMessage name="subject" />
              </span>
              <Field id="subject" name="subject"/>
            </div>

            <div data-anime='right'>
              <label htmlFor="message" 
                className={errors.message && 'has-error-label'}>Mensagem: </label>
              <span className={errors.message && 'has-error-label'}>
                <ErrorMessage name="message" />
              </span>
              <Field id="message" name="message" as="textarea"/>
            </div>

            <button type="submit" id="submit" disabled={!isValid}>Enviar</button>
          </Form>
        )}
      </Formik>

      <Modal openModal={isOpen} handleCloseModal={() => setIsOpen(false)}>
        <img src="/like.png" alt="like" />
        <h1>Obrigado pelo contato!</h1>
      </Modal>
    </div>
  )
}

export default MyForm;