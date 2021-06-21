import React, { useRef, useState } from 'react';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import Input from '../components/Form/Input';
import Textarea from '../components/Form/Textarea';

import '../styles/pages/Contact.css';
// import client from '../services/mailService';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [fields, setFields] = useState({
    fromName: '',
    replyTo: '',
    subject: '',
    message: ''
  });
  const formRef = useRef(null);

  async function handleSubmit (data, { reset }) {
    try {
      formRef.current.setErrors({});
  
      const schema = Yup.object().shape({
        fromName: Yup.string().min(3, 'Seu nome é maior que isso...').required('Informe seu nome'),
        replyTo: Yup.string().email().required('Informe seu email'),
        subject: Yup.string().required('O assunto é importante'),
        message: Yup.string().required('Qual sua mensagem?'),
      });
      
      await schema.validate(data, {
        abortEarly: false,
      });
      // handleFormSubmit(fields.email, fields.subject, fields.message);
      sendEmail()
      reset();
      alert('Obrigado pelo contato!');
    } catch (err) {
      
      const validationErrors = {};

      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {

          validationErrors[error.path] = error.message;

        });

        formRef.current.setErrors(validationErrors);
      }
    }
  }

  function handleInputChange(){
    const allValues = formRef.current.getData()
    for (let value in allValues){
      fields[value] = allValues[value];
      setFields(fields);
    }
  }

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(process.env.SERVICE_ID, process.env.TEMPLATE_ID, e.target,process.env.USER_ID)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset()
  }
  
  return (
    <section id='contact'>
      <img src="/EL.png" alt="EL logo" data-anime='left'/>
      <div className='formContainer'>
        <h4>&lt;contact&gt;</h4>
        <Form ref={formRef} onSubmit={sendEmail}>
          <Input label='Nome:' name='fromName' data-anime='left' onChange={handleInputChange}/>
          <Input label='Email:' name='replyTo'  data-anime='right'onChange={handleInputChange}/>
          <Input label='Assunto:' name='subject' data-anime='left' onChange={handleInputChange}/>
          <Textarea label="Mensagem:" name='message' data-anime='right' onChange={handleInputChange}/>
          
          <button type="submit" id='submit'>Enviar</button>
        </Form>
        <h4>&lt;/contact&gt;</h4>
      </div>
      <footer className="copyrights">
        <span>
          Copyrights © {new Date().getFullYear()} - 
        </span>
          <a href="https://github.com/EdsonLucasbd">
            &nbsp;Edson Lucas&nbsp;
          </a>
          <span>
            - All rights reserved.
          </span>
      </footer>
    </section>
  )
}
