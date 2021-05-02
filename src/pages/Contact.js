import React, { useRef } from 'react';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import Input from '../components/Input';
import Textarea from '../components/Textarea';


import '../styles/pages/Contact.css';

export default function Contact() {
  const formRef = useRef(null);

  function functionThatSetsErrors() {
    formRef.current.setErrors({

      name: 'Informe seu nome',
      email: 'Informe seu email',
      topic: 'O assunto é importante',
      message: 'Qual sua mensagem?',

    });

    formRef.current.setFieldError('name', 'Informe seu nome');
    formRef.current.setFieldError('email', 'Informe seu email');
    formRef.current.setFieldError('topic', 'O assunto é importante');
    formRef.current.setFieldError('message', 'Qual sua mensagem?');

  }


  async function handleSubmit (data, { reset }) {
    

    try {
      formRef.current.setErrors(functionThatSetsErrors());
  
      const schema = Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().email().required(),
        topic: Yup.string().required(),
        message: Yup.string().required(),
      });
      
      await schema.validate(data, {
        abortEarly: false,
      });
      console.log(data);
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
  
  return (
    <section id='contact'>
      <div className='formContainer'>
        <h4>&lt;contact&gt;</h4>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input label='Nome:' name='name' type='text' data-anime='left'/>
          <Input label='Email:' name='email'  data-anime='right'/>
          <Input label='Assunto:' name='topic' type='text' data-anime='left'/>
          <Textarea label="Mensagem:" name='message' data-anime='right'/>
          
          <input type="submit" value="Enviar" id='submit' />
        </Form>
        <h4>&lt;/contact&gt;</h4>
      </div>
    </section>
  )
}
